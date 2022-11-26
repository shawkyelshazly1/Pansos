const { StoryModal, FriendshipModal } = require("../models"),
	consola = require("consola"),
	mongoose = require("mongoose");

// class t interact with story on DB
class StoryRepository {
	// create new story
	async CreateStory(storyData) {
		try {
			const newStory = await StoryModal(storyData);

			newStory = await newStory.save();
			return newStory;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// delete story
	async DeleteStory(storyId) {
		try {
			const deletedStory = await StoryModal.findByIdAndDelete(
				mongoose.Types.ObjectId(storyId)
			)
				.populate("user")
				.populate("media");

			return deletedStory;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get single story
	async GetStoryById(storyId) {
		try {
			const existingStory = await StoryModal.findById(
				mongoose.Types.ObjectId(storyId)
			);

			return existingStory;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user followings stories
	async GetUserStoriesNewsFeed(currentUserId) {
		try {
			const userFollowings = await FriendshipModal.find(
				{
					author: mongoose.Types.ObjectId(currentUserId),
					status: "approved",
				},
				{ target: 1 }
			)
				.distinct("target")
				.lean();

			const stories = await StoryModal.find({
				$and: [{ status: "active" }, { user: { $in: userFollowings } }],
			}).sort({ createdAt: "desc" });

			return stories;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user stories
	async GetUserStories(currentUserId) {
		try {
			const userStories = await StoryModal.find({
				user: mongoose.Types.ObjectId(currentUserId),
			}).sort({ createdAt: "desc" });

			return userStories;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = StoryRepository;
