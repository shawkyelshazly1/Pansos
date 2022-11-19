const PostLikeService = require("../../../services/postLikeService");
const { isAuthenticated } = require("../../middlewares/auth");

// postlike service instance
const postLikeService = new PostLikeService();

// postlike graphql mutaitons
const postLikeMutations = {
	// like or unlike post
	LikeOrUnlikePost: async (_, { postId }, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
		return await postLikeService.likeOrUnlikePost(userId, postId);
	},
};

module.exports = postLikeMutations;
