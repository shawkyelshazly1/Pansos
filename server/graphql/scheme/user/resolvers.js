const { FriendshipService } = require("../../../services");

const friendshipService = new FriendshipService();

// user graphql resolvers
const userResolvers = {
	// get followers Count
	async followersCount(parent) {
		return await friendshipService.getUserFollowersCount(
			parent._id || parent.id
		);
	},

	// get followings count
	async followingsCount(parent) {
		return await friendshipService.getUserFollowingsCount(
			parent._id || parent.id
		);
	},

	//get follow followStatus
	async followStatus(parent, _, context) {
		const { _id } = context.req.payload;
		return await friendshipService.getUserFollowStatus(
			_id,
			parent._id || parent.id
		);
	},
};

module.exports = userResolvers;
