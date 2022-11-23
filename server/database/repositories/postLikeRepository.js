const mongoose = require("mongoose"),
	consola = require("consola"),
	{ PostLikeModal } = require("../models");

// repository class to interact with DB
class PostLikeRepository {
	// create new postLike
	async CreatePostLike(postLikeData) {
		try {
			let newPostLike = await new PostLikeModal(postLikeData);

			newPostLike = await newPostLike.save();

			return newPostLike;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// delete postLike
	async DeletePostLike(postLikeData) {
		try {
			const deletedPostLike = await PostLikeModal.findOneAndDelete({
				post: mongoose.Types.ObjectId(postLikeData.post),
				author: mongoose.Types.ObjectId(postLikeData.author),
				postType: postLikeData.postType,
			})
				.populate("post")
				.populate("author", "-password");

			return deletedPostLike;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get postLiKes Count
	async GetPostLikesCountById(postId) {
		try {
			const postLikesCount = await PostLikeModal.count({
				post: mongoose.Types.ObjectId(postId),
			});

			return postLikesCount;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// check if user liked post or not
	async GetPostLikedStatus(authorId, postId) {
		try {
			const postLiked = await PostLikeModal.findOne({
				author: mongoose.Types.ObjectId(authorId),
				post: mongoose.Types.ObjectId(postId),
			});

			if (postLiked) return true;
			else return false;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = PostLikeRepository;
