const mongoose = require("mongoose");

const postLikeSchema = mongoose.Schema(
	{
		post: {
			type: mongoose.Types.ObjectId,
			ref: "Post",
			required: true,
			autopopulate: true,
		},
		author: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
	},
	{ timestamps: true }
);

postLikeSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("PostLike", postLikeSchema);
