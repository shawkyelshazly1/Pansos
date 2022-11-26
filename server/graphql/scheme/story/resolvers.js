const { StoryViewService } = require("../../../services");

const storyViewService = new StoryViewService();

const storyResolvers = {
	//storyViewersCount
	async storyViewersCount(parent, __, context) {
		const { _id } = context.req.payload;
		return await storyViewService.getStoryViewersCount(_id, parent._id);
	},

	//storyViewers
	async storyViewers(parent, __, context) {
		const { _id } = context.req.payload;
		return await storyViewService.getStoryViewers(_id, parent._id);
	},

	//is story viewed
	async isViewed(parent, __, context) {
		const { _id } = context.req.payload;
		return await storyViewService.isStoryViewed(_id, parent._id);
	},
};

module.exports = storyResolvers;
