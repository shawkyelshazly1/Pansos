const mongoose = require("mongoose");

const commentSchema = mongoose.Schema(
	{
		author: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
		post: {
			type: mongoose.Types.ObjectId,
			ref: "Post",
			required: true,
			autopopulate: true,
		},
		content: { type: String, trim: true, required: true },
	},
	{ timestamps: true }
);

commentSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Comment", commentSchema);
