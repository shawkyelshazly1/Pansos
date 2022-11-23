const { PostLikeRepository } = require("../database");
const { BadInputGraphQLError } = require("../utils/error.js");
const consola = require("consola");

// class to interact with user service
class PostLikeService {
	// constructor to use DB repository interface
	constructor() {
		this.repository = new PostLikeRepository();
	}

	// like or unlike post
	async likeOrUnlikePost(userId, postId, postType) {
		try {
			//validate if input is valid
			if (!userId || !postId || !postType)
				return await BadInputGraphQLError("PostLike data is required!");

			// check if post liked already or not
			const postLiked = await this.repository.GetPostLikedStatus(
				userId,
				postId
			);

			// like post in DB
			if (!postLiked) {
				const postLike = await this.repository.CreatePostLike({
					post: postId,
					author: userId,
					postType,
				});
				return postLike;
			}
			// remove post like from DB
			else {
				const deletedPostLike = await this.repository.DeletePostLike({
					post: postId,
					author: userId,
					postType,
				});

				return deletedPostLike;
			}
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get post likes count
	async getPostLikesCount(postId) {
		try {
			// validate input correct
			if (!postId) return await BadInputGraphQLError("postId is required!");

			// get likes count
			const likesCount = await this.repository.GetPostLikesCountById(postId);

			return likesCount;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	async isPostLiked(userId, postId) {
		try {
			// validate input correct
			if (!postId || !userId)
				return await BadInputGraphQLError("postId & userId are required!");

			const likeStatus = await this.repository.GetPostLikedStatus(
				userId,
				postId
			);

			return likeStatus;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = PostLikeService;
