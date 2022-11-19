const PostService = require("../../../services/postService");
const { isAuthenticated } = require("../../middlewares/auth");

const postService = new PostService();

// post graphql Mutation
const postMutations = {
	// add new post
	addPost: async (_, { content }, context) => {
		await isAuthenticated(context);
		const { _id: author } = context.req.payload;
		return await postService.createPost({ content, author });
	},

	// delete post
	deletePost: async (_, { postId }, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
	
		return await postService.deletePost(userId, postId);
	},
};

module.exports = postMutations;
