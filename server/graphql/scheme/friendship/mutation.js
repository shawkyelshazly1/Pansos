const FriendshipService = require("../../../services/friendshipService");
const { isAuthenticated } = require("../../middlewares/auth");

const friendshipService = new FriendshipService();

// friendship graphql queries
const friendshipMutation = {
	// send follow request
	sendFollowRequest: async (_, { userId }, context) => {
		await isAuthenticated(context);
		const { _id: currentUserId } = context.req.payload;
		return await friendshipService.createFriendRequest({
			target: userId,
			author: currentUserId,
		});
	},

	// accept follow request
	acceptFollowRequest: async (_, { userId }, context) => {
		await isAuthenticated(context);
		const { _id: currentUserId } = context.req.payload;
		return await friendshipService.acceptFollowRequest(currentUserId, userId);
	},

	// decline follow request
	declineFollowRequest: async (_, { userId }, context) => {
		await isAuthenticated(context);
		const { _id: currentUserId } = context.req.payload;
		return await friendshipService.declineFollowRequest(currentUserId, userId);
	},

	// delete sent follow request
	deleteSentRequest: async (_, { userId }, context) => {
		await isAuthenticated(context);
		const { _id: currentUserId } = context.req.payload;
		return await friendshipService.removeSentFollowRequest(
			currentUserId,
			userId
		);
	},
};

module.exports = friendshipMutation;
