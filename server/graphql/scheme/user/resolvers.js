const { FriendshipService } = require("../../../services");

const friendshipService = new FriendshipService();

// user graphql resolvers
const userResolvers = {
	async followersCount(parent) {
		return await friendshipService.getUserFollowersCount(parent._id);
	},
	async followingsCount(parent) {
		return await friendshipService.getUserFollowingsCount(parent._id);
	},
};

module.exports = userResolvers;
