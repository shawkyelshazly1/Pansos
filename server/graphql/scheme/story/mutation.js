const StoryService = require("../../../services/storyService");
const { isAuthenticated } = require("../../middlewares/auth");

const storyService = new StoryService();

const storyMutations = {
	// add new story
	addNewStory: async (_, { media }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await storyService.addNewStory({ userId: _id, media });
	},

	// delete story
	deleteStory: async (_, { storyId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await storyService.deleteStory(_id, storyId);
	},
};

module.exports = storyMutations;
