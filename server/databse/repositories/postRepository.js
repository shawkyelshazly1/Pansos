const { PostModal, PostLikeModal, CommentModal } = require("../models"),
	mongoose = require("mongoose"),
	consola = require("consola");

// repository class to interact with DB

class PostRepository {
	// create new post
	async CreatePost(postData) {
		try {
			let newPost = await new PostModal(postData);
			newPost = await newPost.save();
			newPost = await newPost.populate("author", "-password");

			return newPost;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// Get single post by id
	async GetPostById(postId) {
		try {
			const existingPost = await PostModal.findById(
				mongoose.Types.ObjectId(postId)
			).populate("author", "-password");

			return existingPost;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user posts
	async GetUserPostsById(userId) {
		try {
			const userPosts = await PostModal.find({
				userId: mongoose.Types.ObjectId(userId),
			}).populate("author", "-password");

			return userPosts;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// #TODO: create news feed fanout

	// delete post by ID
	async DeletePostById(postId) {
		try {
			const deletedPost = await PostModal.findByIdAndDelete(
				mongoose.Types.ObjectId(postId)
			).populate("author", "-password");

			// delete all post likes and comments
			await PostLikeModal.deleteMany({
				post: mongoose.Types.ObjectId(postId),
			});

			await CommentModal.deleteMany({
				post: mongoose.Types.ObjectId(postId),
			});

			return deletedPost;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = PostRepository;
