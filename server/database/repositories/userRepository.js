const { UserModal } = require("../models"),
	consola = require("consola"),
	mongoose = require("mongoose");

// repository class to interact with DB
class UserRepository {
	// create new user in DB
	async CreateUser(userData) {
		try {
			const newUser = await new UserModal(userData);
			return await newUser.save();
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// find user by Id
	async FindUserById(userId) {
		try {
			const existingUser = await UserModal.findById(
				mongoose.Types.ObjectId(userId),
				{ password: 0 }
			);
			return existingUser;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// find user by email
	async FindUserByEmail(userEmail) {
		try {
			const existingUser = await UserModal.findOne({ email: userEmail });
			return existingUser;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// update user
	async UpdateUserById(userId, userData) {
		try {
			const updatedUser = await UserModal.findOneAndUpdate(
				{ _id: mongoose.Types.ObjectId(userId) },
				userData,
				{ new: true }
			);
			return updatedUser;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// find simmilar users by name
	async FindSimilarUsers(query, currentUserId) {
		try {
			const regex = new RegExp(query, "i");
			const users = await UserModal.find({}, { password: 0 })
				.or([{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }])
				.ne("_id", mongoose.Types.ObjectId(currentUserId))
				.limit(5);

			return users;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = UserRepository;
