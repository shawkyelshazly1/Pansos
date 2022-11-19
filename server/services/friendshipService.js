const { FriendshipRepository } = require("../database");
const { BadInputGraphQLError } = require("../utils/error");
const consola = require("consola");

// class to interact with user service
class FriendshipService {
	// constructor to use DB repository interface
	constructor() {
		this.repository = new FriendshipRepository();
	}

	// send friendship request
	async createFriendRequest(friendshipData) {
		try {
			const { author, target } = friendshipData;

			// validate if input correct
			if (!author || !target)
				return await BadInputGraphQLError("Friendship data is required!");

			// validate if request isn't there already
			const existingFriendship = await this.repository.getFriendship(
				author,
				target
			);

			// return error if exists arlready
			if (existingFriendship)
				return await BadInputGraphQLError("Friendship exists already!");

			const newFriendship = await this.repository.CreateFriendShip(
				friendshipData
			);

			return newFriendship;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get user friendships
	async getUserFollowings(userId) {
		try {
			// validate if input correct
			if (!userId) return await BadInputGraphQLError("UserId is required!");

			// load user friendships from DB
			const userfollowings = await this.repository.GetUserFollowings(userId);

			return userfollowings;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get user followers
	async getUserFollowers(userId) {
		try {
			// validate if input correct
			if (!userId) return await BadInputGraphQLError("UserId is required!");

			// load user friendships from DB
			const userFollowers = await this.repository.GetUserFollowers(userId);

			return userFollowers;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get user friendships
	async getUserFollowingsCount(userId) {
		try {
			// validate if input correct
			if (!userId) return await BadInputGraphQLError("UserId is required!");

			// load user friendships from DB
			const userfollowings = await this.repository.GetUserFollowings(userId);

			return userfollowings.length;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get user followers
	async getUserFollowersCount(userId) {
		try {
			// validate if input correct
			if (!userId) return await BadInputGraphQLError("UserId is required!");

			// load user friendships from DB
			const userFollowers = await this.repository.GetUserFollowers(userId);

			return userFollowers.length;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get user sent pending requests
	async getSentRequests(userId) {
		try {
			// validate if input correct
			if (!userId) return await BadInputGraphQLError("UserId is required!");

			// load requests from DB
			const pendingSentRequests =
				await this.repository.GetUserPendingSentFriendships(userId);

			return pendingSentRequests;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get user pending requests
	async getRecievedRequests(userId) {
		try {
			// validate if input correct
			if (!userId) return await BadInputGraphQLError("UserId is required!");

			// load requests from DB
			const pendingRecievedRequests =
				await this.repository.GetUserPendingFriendships(userId);

			return pendingRecievedRequests;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// accept friend request
	async acceptFollowRequest(currentUserId, userId) {
		try {
			// validate if input correct
			if (!userId || !currentUserId)
				return await BadInputGraphQLError("UserId  is required!");

			const friendShipUpdated = await this.repository.UpdateFriendship({
				author: userId,
				target: currentUserId,
				status: "approved",
			});

			if (!friendShipUpdated)
				return await BadInputGraphQLError("Can't find request");

			return friendShipUpdated;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// decline friend request
	async declineFollowRequest(currentUserId, userId) {
		try {
			// validate if input correct
			if (!userId || !currentUserId)
				return await BadInputGraphQLError("UserId  is required!");

			const deletedFriendship = await this.repository.DeleteFriendShip({
				author: userId,
				target: currentUserId,
			});

			return deletedFriendship;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// delete sent follow request
	async removeSentFollowRequest(currentUserId, userId) {
		try {
			// validate if input correct
			if (!userId || !currentUserId)
				return await BadInputGraphQLError("UserId  is required!");

			const deletedFriendship = await this.repository.DeleteFriendShip({
				author: currentUserId,
				target: userId,
			});

			return deletedFriendship;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = FriendshipService;
