const MediaService = require("../../../services/mediaService");
const { isAuthenticated } = require("../../middlewares/auth");

const mediaService = new MediaService();

const mediaQueries = {
	// load user getUserPhotos
	getUserPhotos: async (_, { userId }, context) => {
		await isAuthenticated(context);
		return await mediaService.getUserPhotos(userId);
	},
};

module.exports = mediaQueries;
