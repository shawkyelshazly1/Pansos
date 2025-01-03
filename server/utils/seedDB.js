const { default: mongoose } = require("mongoose");
const { MediaModal } = require("../database/models");

async function seedDB() {
	try {
		const existingPhoto = await MediaModal.findById(
			mongoose.Types.ObjectId("637d564595eedd4b185b2cde")
		);

		if (!existingPhoto) {
			await new MediaModal({
				_id: new mongoose.Types.ObjectId("637d564595eedd4b185b2cde"),

				type: "photo",
				url: "https://ucarecdn.com/fe777bfe-2109-49f7-963d-bfe19cb8d501/profile_placeholder.png",
			}).save();
		}

		const existingCover = await MediaModal.findById(
			mongoose.Types.ObjectId("637d563d95eedd4b185b2cdd")
		);

		if (!existingCover) {
			await new MediaModal({
				_id: new mongoose.Types.ObjectId("637d563d95eedd4b185b2cdd"),
				type: "photo",
				url: "https://ucarecdn.com/1b7a9708-f5f3-43a5-9672-5fe04c9eefbb/BluePinkPhotoSummerFacebookCover.png",
			}).save();
		}
	} catch (error) {
		console.error(error);
	}
}

module.exports = { seedDB };
