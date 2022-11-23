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
			refPath: "postType",
			required: true,
			autopopulate: true,
		},
		postType: {
			type: String,
			required: true,
			enum: ["Post", "SharedPost"],
		},
		content: { type: String, trim: true, required: true },
	},
	{ timestamps: true }
);

commentSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Comment", commentSchema);
