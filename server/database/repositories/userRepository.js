const { UserModal, FriendshipModal } = require("../models"),
	consola = require("consola"),
	mongoose = require("mongoose");

// repository class to interact with DB
class UserRepository {
	// create new user in DB
	async CreateUser(userData) {
		try {
			let newUser = await new UserModal(userData);

			newUser = await newUser.save();

			return newUser;
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
			const existingUser = await UserModal.findOne({
				email: userEmail,
			});

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

	// load suggessted user
	async GetSuggesstedUsers(currentuserId) {
		try {
			// get all IDs for users the user follows and accepted
			const userFollowings = await FriendshipModal.find(
				{
					author: mongoose.Types.ObjectId(currentuserId),
					status: "approved",
				},
				{ target: 1 }
			)

				.distinct("target")
				.lean();

			// load suggessted not followed users

			let suggesstedUsers = await UserModal.aggregate([
				{
					$match: {
						_id: {
							$nin: [...userFollowings, mongoose.Types.ObjectId(currentuserId)],
						},
					},
				},
				{
					$lookup: {
						from: "media",
						localField: "profileImage",
						foreignField: "_id",
						as: "profileImage",
					},
				},
				{ $unwind: "$profileImage" },
				{
					$lookup: {
						from: "media",
						localField: "profileCover",
						foreignField: "_id",
						as: "profileCover",
					},
				},
				{ $unwind: "$profileCover" },
				{ $sample: { size: 20 } },
			]);

			suggesstedUsers = suggesstedUsers.map((user) => {
				const { _id, ...updatedUser } = user;

				return { ...updatedUser, id: _id };
			});

			return suggesstedUsers;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = UserRepository;
