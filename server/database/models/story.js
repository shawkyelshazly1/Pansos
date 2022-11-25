const mongoose = require("mongoose");

const storySchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
		media: {
			type: mongoose.Types.ObjectId,
			ref: "Media",
			required: true,
			autopopulate: true,
		},
		status: {
			type: String,
			enum: ["active", "archived"],
			default: "active",
		},
	},
	{ timestamps: true }
);

storySchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Story", storySchema);
