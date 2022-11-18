const mongoose = require("mongoose"),
	consola = require("consola"),
	{ CommentModal } = require("../models");

// repository class to interact with DB
class CommentRepository {
	//create new comment
	async CreateComment(commentData) {
		try {
			let newComment = await new CommentModal(commentData);
			newComment = await newComment.save();
			newComment = newComment.populate("author", "-password");

			return newComment;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// delete comment by ID
	async DeleteCommentById(commentId) {
		try {
			const deletedComment = await CommentModal.findByIdAndDelete(
				mongoose.Types.ObjectId(commentId)
			);

			return deletedComment;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get Comment By ID
	async GetCommentById(commentId) {
		try {
			const existingComment = await CommentModal.findById(
				mongoose.Types.ObjectId(commentId)
			);

			return existingComment;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get post comments
	async GetPostComments(postId) {
		try {
			const postComments = await CommentModal.find({
				post: mongoose.Types.ObjectId(postId),
			}).populate("author", "-password");

			return postComments;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get post comments count by postId
	async GetPostCommentsCountById(postId) {
		try {
			const postCommentsCount = await CommentModal.count({
				post: mongoose.Types.ObjectId(postId),
			});

			return postCommentsCount;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = CommentRepository;
