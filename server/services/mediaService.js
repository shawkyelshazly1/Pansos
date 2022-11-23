const MediaRepository = require("../database/repositories/mediaRepository");
const { BadInputGraphQLError } = require("../utils/error");

// class to interact with media repository on DB

class MediaService {
	constructor() {
		this.repository = new MediaRepository();
	}

	/*
    Disclaimer :: All services return array with results
    */

	// CreateMedia
	// mediaData: {url,user,}
	async addNewMedia(mediaData) {
		try {
			// check if one or multiple
			if (!Array.isArray(mediaData)) {
				let addedMedia = await this.repository.CreateMedia(mediaData);

				return [addedMedia];
			} else {
				let addedMedia = await this.repository.CreateMultipleMedia(mediaData);
				return addedMedia;
			}
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// DeleteMedia
	async deleteMedia(mediaId) {
		try {
			// check if one or multiple
			if (!Array.isArray(mediaId)) {
				let deletedMedia = await this.repository.DeleteMedia(mediaId);
				return [deletedMedia];
			} else {
				let deletedMedia = await this.repository.DeleteMultipleMedia(mediaId);
				return deletedMedia;
			}
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get user photos
	async getUserPhotos(userId) {
		try {
			if (!userId) return await BadInputGraphQLError("UserId is required");

			const userPhotos = await this.repository.LoadUserPhotos(userId);
			return userPhotos;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = MediaService;
