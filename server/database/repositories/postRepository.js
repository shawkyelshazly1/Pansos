const MediaService = require("../../services/mediaService");
const {
		PostModal,
		PostLikeModal,
		CommentModal,
		FriendshipModal,
		MediaModal,
	} = require("../models"),
	mongoose = require("mongoose"),
	consola = require("consola");

// repository class to interact with DB
const mediaService = new MediaService();
class PostRepository {
	// create new post
	async CreatePost(postData) {
		try {
			let newPost = await new PostModal(postData);
			newPost = await newPost.save();

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
			);

			return existingPost;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user posts
	// #TODO: add union to shared posts table
	async GetUserPostsById(userId) {
		try {
			const userPosts = await PostModal.find({
				author: mongoose.Types.ObjectId(userId),
			}).sort({ createdAt: "desc" });

			return userPosts;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// create news feed
	// #TODO: add union to shared posts table
	async GetUserNewsFeed(userId) {
		try {
			const userFollowings = await FriendshipModal.find(
				{
					author: mongoose.Types.ObjectId(userId),
					status: "approved",
				},
				{ target: 1 }
			)
				.distinct("target")
				.lean();

			const posts = await PostModal.find({
				$or: [
					{
						author: { $in: userFollowings },
					},
					{
						author: mongoose.Types.ObjectId(userId),
					},
				],
			}).sort({ createdAt: "desc" });

			return posts;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	//

	// delete post by ID
	async DeletePostById(postId) {
		try {
			const deletedPost = await PostModal.findByIdAndDelete(
				mongoose.Types.ObjectId(postId)
			)
				.populate("media")
				.populate("author", "-password");

			// delete all post likes and comments
			await PostLikeModal.deleteMany({
				post: mongoose.Types.ObjectId(postId),
			});

			await CommentModal.deleteMany({
				post: mongoose.Types.ObjectId(postId),
			});

			await mediaService.deleteMedia(deletedPost.media);

			return deletedPost;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = PostRepository;
