const FriendshipService = require("../../../services/friendshipService");
const { isAuthenticated } = require("../../middlewares/auth");

const friendshipService = new FriendshipService();

// friendship graphql queries
const friendshipQuery = {
	// get user followers
	getUserFollowers: async (_, { userId }, context) => {
		await isAuthenticated(context);

		return await friendshipService.getUserFollowers(userId);
	},

	// get user followings
	getUserFollowings: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
		return await friendshipService.getUserFollowings(userId);
	},

	// get pending sent requests
	getPendingSentRquests: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
		return await friendshipService.getSentRequests(userId);
	},

	// get pending received requests
	getPendingRecievedRquests: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
		return await friendshipService.getRecievedRequests(userId);
	},
};

module.exports = friendshipQuery;
