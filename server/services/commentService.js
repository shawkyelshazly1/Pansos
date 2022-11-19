const { CommentRepository } = require("../database");
const { BadInputGraphQLError } = require("../utils/error");
const consola = require("consola");

// class to interact with user service
class CommentService {
	// constructor to use DB repository interface
	constructor() {
		this.repository = new CommentRepository();
	}

	// add comment
	async addComment(userId, commentData) {
		try {
			const { post, content } = commentData;

			// validate input correct
			if (!userId || !post || !content)
				return await BadInputGraphQLError("Commment data is required!");

			// create new comment in DB
			const newComment = await this.repository.CreateComment({
				author: userId,
				...commentData,
			});

			return newComment;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get post comments
	async getPostComments(postId) {
		try {
			// validate input correct
			if (!postId) return await BadInputGraphQLError("PostId is required!");

			// load comments from DB
			const comments = await this.repository.GetPostComments(postId);

			return comments;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get post comments count
	async getPostCommentsCount(postId) {
		try {
			// validate input correct
			if (!postId) return await BadInputGraphQLError("PostId is required!");

			// load comments count from DB
			const commentsCount = await this.repository.GetPostCommentsCountById(
				postId
			);

			return commentsCount;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get single comment by id
	async getSingleComment(commentId) {
		try {
			// validate input correct
			if (!commentId)
				return await BadInputGraphQLError("CommetnId is required!");

			// get comment from DB
			const existingComment = await this.repository.GetCommentById(commentId);

			// return error if comment not found
			if (!existingComment)
				return await BadInputGraphQLError("Comment not found!");

			return existingComment;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// delete comment by id
	async deleteComment(userId, commentId) {
		try {
			if (!userId || !commentId)
				return await BadInputGraphQLError("userId & CommentId are required!");

			// load comment from DB
			const existingComment = await this.repository.GetCommentById(commentId);

			// return error if comment not found
			if (!existingComment)
				return await BadInputGraphQLError("Comment not found!");

			// return error if not comment author
			if (String(existingComment.author._id) !== String(userId))
				return await BadInputGraphQLError("Not Authorized!");

			// delete comment from DB
			const deletedComment = await this.repository.DeleteCommentById(commentId);

			return deletedComment;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = CommentService;
