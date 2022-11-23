const consola = require("consola"),
	{ MediaModal } = require("../models"),
	mongoose = require("mongoose");

// class to interact with media modal in DB
class MediaRepository {
	// create new media
	async CreateMedia(mediaData) {
		try {
			let newMedia = await new MediaModal(mediaData);
			await newMedia.save();
			return newMedia;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// delete media by Id
	async DeleteMedia(mediaId) {
		try {
			const deletedMedia = await MediaModal.findByIdAndDelete(
				mongoose.Types.ObjectId(mediaId)
			);
			return deletedMedia;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// insert multiple media data in DB
	async CreateMultipleMedia(multipleMediaData) {
		try {
			let newMedia = await MediaModal.insertMany(multipleMediaData);
			return newMedia;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// delete multipleMedia by Id
	async DeleteMultipleMedia(multipleMediaIds) {
		try {
			let Ids = multipleMediaIds.map((id) => mongoose.Types.ObjectId(id));

			let deletedMedia = await MediaModal.deleteMany({ _id: { $in: Ids } });
			return deletedMedia;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = MediaRepository;
