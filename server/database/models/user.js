const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		firstName: { type: String, trim: true, required: true },
		lastName: { type: String, trim: true, required: true },
		email: { type: String, trim: true, required: true },
		password: { type: String, trim: true, required: true },
		profileImage: {
			type: String,
			trim: true,
			default: "https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp",
		},
		profileCover: {
			type: String,
			trim: true,
			default: "https://html.crumina.net/html-olympus/img/top-header1.webp",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
