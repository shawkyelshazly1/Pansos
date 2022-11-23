const { SharedPostService } = require("../../../services");
const { isAuthenticated } = require("../../middlewares/auth");

const sharedPostService = new SharedPostService();

const sharedPostMutations = {
	// add shared post
	addSharedPost: async (_, sharedPostData, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await sharedPostService.addNewSharedPost({
			...sharedPostData,
			author: _id,
		});
	},

	// delete shared post
	deleteSharedPost: async (_, { sharedPostId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await sharedPostService.deleteSharedPost(_id, sharedPostId);
	},
};

module.exports = sharedPostMutations;
