const { CommentService } = require("../../../services");
const { isAuthenticated } = require("../../middlewares/auth");

const commentService = new CommentService();

// comment graphql mutations
const commentMutation = {
	// create new comment
	addComment: async (_, { postId, content, postType }, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
		return await commentService.addComment(userId, {
			post: postId,
			content,
			postType,
		});
	},

	// delete comment
	deleteComment: async (_, { commentId }, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
		return await commentService.deleteComment(userId, commentId);
	},
};

module.exports = commentMutation;
