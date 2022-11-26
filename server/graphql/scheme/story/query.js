const StoryService = require("../../../services/storyService");
const { isAuthenticated } = require("../../middlewares/auth");

const storyService = new StoryService();

const storyQueries = {
	// load user stories
	loadUserStories: async (_, { userId }, context) => {
		await isAuthenticated(context);
		return await storyService.loadUserStories(userId);
	},

	// load user newsfeed stories
	loadUserNewsfeedStories: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await storyService.loadUserNewsfeedStories(_id);
	},
};

module.exports = storyQueries;
