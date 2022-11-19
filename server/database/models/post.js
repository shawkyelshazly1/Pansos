const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
	{
		content: { type: String, required: true, trim: true },
		author: { type: mongoose.Types.ObjectId, ref: "User", required: true },
		media: [{ type: mongoose.Types.ObjectId, ref: "Media" }],
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
