const mongoose = require("mongoose");

const friendshipSchema = mongoose.Schema(
	{
		author: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
		target: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
		status: { type: String, enum: ["pending", "approved"], default: "pending" },
	},
	{ timestamps: true }
);

friendshipSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Friendship", friendshipSchema);
