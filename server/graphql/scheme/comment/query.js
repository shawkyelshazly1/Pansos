const { CommentService } = require("../../../services");
const { isAuthenticated } = require("../../middlewares/auth");

const commentService = new CommentService();

// comment graphql queries
const commentQuery = {
	// load post comments
	loadPostComments: async (_, { postId }, context) => {
		await isAuthenticated(context);
		return await commentService.getPostComments(postId);
	},

	// load single comment
	loadSingleComment: async (_, { commentId }, context) => {
		await isAuthenticated(context);
		return await commentService.getSingleComment(commentId);
	},
};

module.exports = commentQuery;
