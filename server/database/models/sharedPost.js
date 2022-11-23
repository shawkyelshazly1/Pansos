const mongoose = require("mongoose");

const sharedPostSchema = mongoose.Schema(
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
		content: { type: String, trim: true },
		is_shared: { type: Boolean, default: true, immutable: true },
	},
	{ timestamps: true }
);

sharedPostSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("SharedPost", sharedPostSchema);
