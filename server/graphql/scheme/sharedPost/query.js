const { SharedPostService } = require("../../../services");
const { isAuthenticated } = require("../../middlewares/auth");

const sharedPostService = new SharedPostService();

const sharedPostQueries = {
	// get shared post by id
	getSharedPostById: async (_, { sharedPostId }, context) => {
		await isAuthenticated(context);
		return await sharedPostService.loadSharedPost(sharedPostId);
	},
};

module.exports = sharedPostQueries;
// 637e1aa0a0923eb19f49d2e1