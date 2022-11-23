const mongoose = require("mongoose"),
	consola = require("consola"),
	{ FriendshipModal } = require("../models");

// repository class to interact with DB
class FriendshipRepository {
	// create friendship
	async CreateFriendShip(friendshipData) {
		try {
			let newFriendship = await new FriendshipModal(friendshipData);
			newFriendship = await newFriendship.save();

			return newFriendship;
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
					author: mongoose.Types.ObjectId(friendshipData.author),
					target: mongoose.Types.ObjectId(friendshipData.target),
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
				author: mongoose.Types.ObjectId(friendshipData.author),
				target: mongoose.Types.ObjectId(friendshipData.target),
			})
				.populate("author", "-password")
				.populate("target", "-password");

			return deletedFriendship;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user Friendship
	async GetUserFollowings(userId) {
		try {
			const userFriendships = await FriendshipModal.find({
				author: mongoose.Types.ObjectId(userId),
				status: "approved",
			});

			return userFriendships;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user Followers
	// get user Friendship
	async GetUserFollowers(userId) {
		try {
			const userFriendships = await FriendshipModal.find({
				target: mongoose.Types.ObjectId(userId),
				status: "approved",
			});

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
			});

			return userPendingFriendships;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user pending sent friendship requests
	async GetUserPendingSentFriendships(userId) {
		try {
			const userPendingFriendships = await FriendshipModal.find({
				author: mongoose.Types.ObjectId(userId),
				status: "pending",
			});

			return userPendingFriendships;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get single friendship
	async getFriendship(author, target) {
		try {
			const existingFriendship = await FriendshipModal.findOne({
				author,
				target,
			});

			return existingFriendship;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = FriendshipRepository;
