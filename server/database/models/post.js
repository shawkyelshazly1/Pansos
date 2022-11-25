const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
	{
		content: { type: String, required: true, trim: true },
		author: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
		media: [
			{
				type: mongoose.Types.ObjectId,
				trim: true,
				ref: "Media",
				autopopulate: true,
			},
		],
		group: {
			type: mongoose.Types.ObjectId,
			trim: true,
			ref: "Group",
			autopopulate: true,
		},
	},
	{ timestamps: true }
);

postSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Post", postSchema);
