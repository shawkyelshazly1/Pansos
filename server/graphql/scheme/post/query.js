const PostService = require("../../../services/postService");
const { isAuthenticated } = require("../../middlewares/auth");

const postService = new PostService();

// post graphql queries
const postQueries = {
	// load single post by Id
	getPostById: async (_, { postId }, context) => {
		await isAuthenticated(context);
		return await postService.loadSinglePost(postId);
	},

	// load user posts by Id
	getUserPosts: async (_, { userId }, context) => {
		await isAuthenticated(context);
		return await postService.loadUserPosts(userId);
	},

	// load user newsfeed posts
	getUserNewsfeed: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await postService.loadNewsFeed(_id);
	},

	// load groupPosts
	loadGroupPosts: async (_, { groupId }, context) => {
		await isAuthenticated(context);

		return await postService.loadGroupPosts(groupId);
	},
};

module.exports = postQueries;
