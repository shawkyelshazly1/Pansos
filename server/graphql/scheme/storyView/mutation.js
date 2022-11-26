const StoryViewService = require("../../../services/storyViewService");
const { isAuthenticated } = require("../../middlewares/auth");

const storyViewService = new StoryViewService();

const storyViewMutation = {
	// add story view
	viewStory: async (_, { storyId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await storyViewService.addNewStoryView({ userId: _id, storyId });
	},
};

module.exports = storyViewMutation;
