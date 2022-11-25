const mongoose = require("mongoose");

const storyViewSchema = mongoose.Schema(
	{
		story: {
			type: mongoose.Types.ObjectId,
			ref: "Story",
			required: true,
			autopopulate: true,
		},
		user: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
	},
	{ timestamps: true }
);

storyViewSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("StoryView", storyViewSchema);
