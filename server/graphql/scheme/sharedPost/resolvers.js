const { CommentService, PostLikeService } = require("../../../services");

const commentService = new CommentService();
const postLikeService = new PostLikeService();

// post graphql resolvers
const sharedPostResolvers = {
	// get comments count resolver
	async commentsCount(parent) {
		return await commentService.getPostCommentsCount(parent._id);
	},

	// get comments
	async comments(parent) {
		return await commentService.getPostComments(parent._id);
	},

	// get likes count
	async likesCount(parent) {
		return await postLikeService.getPostLikesCount(parent._id);
	},

	// get is post liked or not
	async isLiked(parent, _, context) {
		const { _id: currentUserId } = context.req.payload;
		return await postLikeService.isPostLiked(currentUserId, parent._id);
	},
};

module.exports = sharedPostResolvers;
