const { StoryViewModal } = require("../models"),
	consola = require("consola"),
	mongoose = require("mongoose");

class StoryViewRepository {
	// view story
	async ViewStory(storyViewData) {
		try {
			const existingStoryView = await StoryViewModal.findOne({
				story: mongoose.Types.ObjectId(storyViewData.story),
				user: mongoose.Types.ObjectId(storyViewData.user),
			});

			if (existingStoryView) return existingStoryView;

			let newStoryView = await StoryViewModal({
				story: mongoose.Types.ObjectId(storyViewData.story),
				user: mongoose.Types.ObjectId(storyViewData.user),
			});

			newStoryView = await newStoryView.save();

			return newStoryView;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// load story viewers
	async GetStoryViewers(storyId) {
		try {
			const storyViewers = await StoryViewModal.find({
				story: mongoose.Types.ObjectId(storyId),
			});

			return storyViewers;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// load story viewers count
	async GetStoryViewersCount(storyId) {
		try {
			const storyViewersCount = await StoryViewModal.find({
				story: mongoose.Types.ObjectId(storyId),
			}).count();

			return storyViewersCount;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// is story viewed
	async GetIfUserViewedStory(currentUserId, storyId) {
		try {
			const storyViewed = await StoryViewModal.findOne({
				story: mongoose.Types.ObjectId(storyId),
				user: mongoose.Types.ObjectId(currentUserId),
			});


			if (storyViewed) return true;
			else return false;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = StoryViewRepository;
