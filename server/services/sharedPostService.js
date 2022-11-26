const { SharedPostRepository } = require("../database");
const consola = require("consola");
const { BadInputGraphQLError } = require("../utils/error.js");

// class to interact with shared post repository on DB
class SharedPostService {
	constructor() {
		this.repository = new SharedPostRepository();
	}

	// add new shared post
	async addNewSharedPost(sharedPostData) {
		try {
			const { post, author } = sharedPostData;

			// validate input correct
			if (!post || !author)
				return await BadInputGraphQLError("Shared Post data is required!");

			const newSharedPost = await this.repository.CreateSharedPost(
				sharedPostData
			);

			return newSharedPost;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	//load shared post
	async loadSharedPost(sharedPostId) {
		try {
			if (!sharedPostId)
				return await BadInputGraphQLError("Shared Post Id is required!");

			const existingSharedPost = await this.repository.GetSharedPostById(
				sharedPostId
			);

			if (!existingSharedPost)
				return await BadInputGraphQLError("Post not found!");

			return existingSharedPost;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// delete shared post
	async deleteSharedPost(currentUserId, sharedPostId) {
		try {
			if (!sharedPostId)
				return await BadInputGraphQLError("Shared Post Id is required!");

			const existingSharedPost = await this.repository.GetSharedPostById(
				sharedPostId
			);

			if (!existingSharedPost)
				return await BadInputGraphQLError("Post not found!");

			if (String(existingSharedPost.author._id) !== String(currentUserId))
				return await BadInputGraphQLError("Not Authorized!");

			const deletedSharedPost = await this.repository.DeleteSharedPostById(
				sharedPostId
			);

			return deletedSharedPost;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = SharedPostService;
