const mongoose = require("mongoose"),
	consola = require("consola"),
	{ FriendshipModal } = require("../models");

// repository class to interact with DB
class FriendshipRepository {
	// create friendship
	async CreateFriendShip(friendshipData) {
		try {
			const newFriendship = await new FriendshipModal(friendshipData);

			return await newFriendship.save();
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// update friendship "accept it"
	async UpdateFriendship(friendshipData) {
		try {
			const updatedFriendship = await FriendshipModal.findOneAndUpdate(
				{
					author: mongoose.Types.ObjectId(friendshipData.authorId),
					target: mongoose.Types.ObjectId(friendshipData.targetId),
				},
				friendshipData,
				{ new: true }
			);

			return updatedFriendship;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// delete friendship
	async DeleteFriendShip(friendshipData) {
		try {
			const deletedFriendship = await FriendshipModal.findOneAndDelete({
				author: mongoose.Types.ObjectId(friendshipData.authorId),
				target: mongoose.Types.ObjectId(friendshipData.targetId),
			});

			return deletedFriendship;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user Friendship
	async GetUserFriendships(userId) {
		try {
			const userFriendships = await FriendshipModal.find({
				target: mongoose.Types.ObjectId(userId),
				status: "approved",
			}).populate("author", "-password");

			return userFriendships;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user pending friendship requests
	async GetUserPendingFriendships(userId) {
		try {
			const userPendingFriendships = await FriendshipModal.find({
				target: mongoose.Types.ObjectId(userId),
				status: "pending",
			}).populate("author", "-password");

			return userPendingFriendships;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = FriendshipRepository;
