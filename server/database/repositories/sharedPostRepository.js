const consola = require("consola"),
	{ SharedPostModal } = require("../models"),
	mongoose = require("mongoose");

// class to interact with the shared post modal
class SharedPostRepository {
	// create new shared post
	async CreateSharedPost(sharedPostData) {
		try {
			let newSharedPost = await new SharedPostModal(sharedPostData);
			newSharedPost = await newSharedPost.save();

			return newSharedPost;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// delete shared post by ID
	async DeleteSharedPostById(sharedPostId) {
		try {
			let deletedSharedPost = await SharedPostModal.findByIdAndDelete(
				mongoose.Types.ObjectId(sharedPostId)
			)
				.populate("author", "-password")
				.populate("post");

			// #TODO: delete shared post likes
			// #TODO: delete shared post comments

			return deletedSharedPost;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get shared post by Id
	async GetSharedPostById(sharedPostId) {
		try {
			let existingSharedPost = await SharedPostModal.findById(
				mongoose.Types.ObjectId(sharedPostId)
			);

			return existingSharedPost;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = SharedPostRepository;
