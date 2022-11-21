const { UserRepository } = require("../database"),
	{ hashPassword, generateAccessToken } = require("../utils/auth.js"),
	consola = require("consola"),
	bcryptjs = require("bcryptjs"),
	{ BadInputGraphQLError } = require("../utils/error.js");

// class to interact with user service
class UserService {
	// constructor to use DB repository interface
	constructor() {
		this.repository = new UserRepository();
	}

	// register user
	async registerUser(userData) {
		try {
			const { firstName, lastName, email, password, confirmPassword } =
				userData;

			// validate if data is full
			if (!firstName || !lastName || !email || !password || !confirmPassword)
				return await BadInputGraphQLError("User data is required!");

			// validate if passwords match
			if (password !== confirmPassword)
				return await BadInputGraphQLError(
					"Password & Confirm Password doesn't match."
				);

			// check for existing user and return if any
			const existingUser = await this.repository.FindUserByEmail(email);
			if (existingUser)
				return await BadInputGraphQLError("Email registered already.");

			// create new user if doesn't exist
			const newUser = await this.repository.CreateUser({
				firstName,
				lastName,
				email,
				password: await hashPassword(password),
				confirmPassword,
			});

			return newUser;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// login user
	async loginUser(userData) {
		try {
			const { email, password } = userData;

			// validate inputs full
			if (!email || !password)
				return await BadInputGraphQLError("Login data is required.");

			// check for existing user
			const existingUser = await this.repository.FindUserByEmail(email);

			if (!existingUser) return await BadInputGraphQLError("Email not found!");

			// validate password matching
			if (!(await bcryptjs.compare(password, existingUser.password)))
				return await BadInputGraphQLError("Incorrect Password!");

			// get user and create token
			const user = await this.repository.FindUserById(existingUser._id);
			const accessToken = await generateAccessToken(user);

			return { user, accessToken };
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load User
	async getUser(userId) {
		try {
			// check for valid param
			if (!userId) return await BadInputGraphQLError("UserId is required.");

			//chech is user exists
			const existingUser = await this.repository.FindUserById(userId);

			// return error if not found
			if (!existingUser) return await BadInputGraphQLError("User not found!");
			// else return user
			else return existingUser;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	//search for users
	async searchUsers(searchQuery, currentUserId) {
		try {
			// check for valid param
			if (!searchQuery || !currentUserId)
				return await BadInputGraphQLError("Search Query is required.");

			// get serach results from DB
			const searchResults = await this.repository.FindSimilarUsers(
				searchQuery,
				currentUserId
			);

			return searchResults;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// update User
	async updateProfileInfo(userId, userData) {
		try {
			// check for valid param
			if (!userId || !userData)
				return await BadInputGraphQLError("Userdata & UserId are required.");

			// update user in DB
			const existingUser = await this.repository.FindUserById(userId);

			//throw error if no user found with this ID
			if (!existingUser) return await BadInputGraphQLError("User not found!");

			// throw error if not same user authenticated
			if (String(existingUser._id) !== String(userId))
				return await BadInputGraphQLError("Not Authorized");

			// Update User in DB
			const updatedUser = await this.repository.UpdateUserById(
				userId,
				userData
			);

			return updatedUser;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get suggessted user
	async loadSuggesstedUsers(currentUserId) {
		try {
			// check for valid param
			if (!currentUserId)
				return await BadInputGraphQLError("UserId is required.");

			// load suggessted users
			const suggesstedUsers = await this.repository.GetSuggesstedUsers(
				currentUserId
			);

			return suggesstedUsers;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = UserService;
