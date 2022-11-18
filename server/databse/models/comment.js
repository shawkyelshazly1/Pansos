const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
	{
		author: { type: mongoose.Types.ObjectId, ref: "User", required: true },
		post: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
		content: { type: String, trim: true, required: true },
	},
	{ timstamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
