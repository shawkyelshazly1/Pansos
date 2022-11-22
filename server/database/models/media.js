const mongoose = require("mongoose");

const mediaSchema = mongoose.Schema(
	{
		url: { type: String, required: true, trim: true },
		type: {
			type: String,
			required: true,
			trim: true,
			enum: ["photo", "video"],
		},
		user: { type: mongoose.Types.ObjectId, ref: "User" },
		post: { type: mongoose.Types.ObjectId, ref: "Post" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Media", mediaSchema);
