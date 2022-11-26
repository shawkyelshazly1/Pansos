const { StoryViewRepository, StoryRepository } = require("../database");
const consola = require("consola");
const {
	BadInputGraphQLError,
	NotAuthorizedGraphQLError,
} = require("../utils/error.js");

class StoryViewService {
	constructor() {
		this.repository = new StoryViewRepository();
		this.storyRepository = new StoryRepository();
	}

	// add story view
	async addNewStoryView(storyViewData) {
		try {
			const { userId, storyId } = storyViewData;

			if (!userId || !storyId)
				return await BadInputGraphQLError("Story View Data is required!");

			const newStoryView = await this.repository.ViewStory({
				story: storyId,
				user: userId,
			});

			return newStoryView;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get story viewers
	async getStoryViewers(currentUserId, storyId) {
		try {
			if (!currentUserId || !storyId)
				return await BadInputGraphQLError("Story View Data is required!");

			const existingStory = this.storyRepository.GetStoryById(storyId);

			if (!existingStory) return await BadInputGraphQLError("Story not found!");

			if (String(existingStory.user) !== String(currentUserId))
				return await NotAuthorizedGraphQLError("Not Authorized!");

			const storyViewers = await this.repository.GetStoryViewers(storyId);

			return storyViewers;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get story viewers count
	async getStoryViewersCount(currentUserId, storyId) {
		try {
			if (!currentUserId || !storyId)
				return await BadInputGraphQLError("Story View Data is required!");

			const existingStory = this.storyRepository.GetStoryById(storyId);

			if (!existingStory) return await BadInputGraphQLError("Story not found!");

			if (String(existingStory.user) !== String(currentUserId))
				return await NotAuthorizedGraphQLError("Not Authorized!");

			const storyViewersCount = await this.repository.GetStoryViewersCount(
				storyId
			);

			return storyViewersCount;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// check if user viewed story or not
	async isStoryViewed(currentUserId, storyId) {
		try {
			if (!currentUserId || !storyId)
				return await BadInputGraphQLError("Story View Data is required!");

			const existingStory = this.storyRepository.GetStoryById(storyId);

			if (!existingStory) return await BadInputGraphQLError("Story not found!");

			if (String(existingStory.user) !== String(currentUserId))
				return await NotAuthorizedGraphQLError("Not Authorized!");

			const isStoryViewed = await this.repository.GetIfUserViewedStory(
				currentUserId,
				storyId
			);

			return isStoryViewed;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = StoryViewService;
