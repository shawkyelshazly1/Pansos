const { StoryRepository } = require("../database");
const consola = require("consola");
const {
	BadInputGraphQLError,
	NotAuthorizedGraphQLError,
} = require("../utils/error.js");

const MediaService = require("./mediaService");

class StoryService {
	constructor() {
		this.repository = new StoryRepository();
		this.mediaService = new MediaService();
	}

	// add new story
	async addNewStory(storyData) {
		try {
			const { userId, media } = storyData;

			// validate input
			if (!userId || !media)
				return await BadInputGraphQLError("Story Data is required!");

			const newMedia = await this.mediaService.addNewMedia({
				url: media,
				type: "photo",
				user: userId,
			});

			console.log();

			const newStory = await this.repository.CreateStory({
				user: userId,
				media: newMedia[0]._id,
			});

			return newStory;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// delete story
	async deleteStory(currentUserId, storyId) {
		try {
			// validate input
			if (!currentUserId || !storyId)
				return await BadInputGraphQLError("Story Data is required!");

			// find existing story and validate owner
			const existingStory = await this.repository.GetStoryById(storyId);

			if (!existingStory) return await BadInputGraphQLError("Story not found!");

			if (String(existingStory.user) !== String(currentUserId))
				return await NotAuthorizedGraphQLError("Not Authorized!");

			const deletedStory = await this.repository.DeleteStory(storyId);

			return deletedStory;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load user stories
	async loadUserStories(currentUserId) {
		try {
			const userStories = await this.repository.GetUserStories(currentUserId);

			return userStories;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load user newsfeed stories
	async loadUserNewsfeedStories(currentUserId) {
		try {
			const userNewsfeedStories = await this.repository.GetUserStoriesNewsFeed(
				currentUserId
			);

			return userNewsfeedStories;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = StoryService;
