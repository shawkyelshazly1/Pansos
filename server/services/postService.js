const consola = require("consola");
const { PostRepository } = require("../database");
const {
	BadInputGraphQLError,
	NotAuthorizedGraphQLError,
} = require("../utils/error");

// class to interact with user service
class PostService {
	// constructor to use DB repository interface
	constructor() {
		this.repository = new PostRepository();
	}

	// create post
	async createPost(postData) {
		try {
			const { content, author } = postData;
			// validate if all inputs are valid
			if (!content || !author)
				return await BadInputGraphQLError("Post data is required!");

			// create new post in DB
			const newPost = await this.repository.CreatePost(postData);

			return newPost;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load user posts
	async loadUserPosts(userId) {
		try {
			// validate input correct
			if (!userId) return await BadInputGraphQLError("UserId is required!");

			const userPosts = await this.repository.GetUserPostsById(userId);

			return userPosts;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load single post
	async loadSinglePost(postId) {
		try {
			// validate input correct
			if (!postId) return await BadInputGraphQLError("PostId is required!");

			const existingPost = await this.repository.GetPostById(postId);

			if (!existingPost) return await BadInputGraphQLError("Post not found!");

			return existingPost;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load newsfeed
	async loadNewsFeed(userId) {
		try {
			// validate input correct
			if (!userId) return await BadInputGraphQLError("UserId is required!");

			// load newsfeed posts from DB
			const newsFeedPosts = await this.repository.GetUserNewsFeed(userId);

			return newsFeedPosts;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// delete post
	async deletePost(currentUserId, postId) {
		try {
			// validate input correct
			if (!currentUserId || !postId)
				return await BadInputGraphQLError("UserId & PostId are required!");

			// load post to validate owner
			const existingPost = await this.repository.GetPostById(postId);

			// validate if post owner else throw authentication error
			if (String(existingPost.author._id) !== String(currentUserId))
				return await BadInputGraphQLError("Not Authorized!");

			// delete post from DB
			const deletedPost = await this.repository.DeletePostById(postId);

			return deletedPost;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = PostService;
