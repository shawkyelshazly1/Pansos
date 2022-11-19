const { FriendshipService } = require("../../../services");

const friendshipService = new FriendshipService();

// user graphql resolvers
const userResolvers = {
	async FollowersCount(parent) {
		return await friendshipService.getUserFollowersCount(parent._id);
	},
	async FollowingsCount(parent) {
		return await friendshipService.getUserFollowingsCount(parent._id);
	},
};

module.exports = userResolvers;
