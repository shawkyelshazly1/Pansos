const mongoose = require("mongoose");

const postLikeSchema = mongoose.Schema(
	{
		post: {
			type: mongoose.Types.ObjectId,
			refPath: "postType",
			required: true,
			autopopulate: true,
		},
		author: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
		postType: {
			type: String,
			required: true,
			enum: ["Post", "SharedPost"],
		},
	},
	{ timestamps: true }
);

postLikeSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("PostLike", postLikeSchema);
