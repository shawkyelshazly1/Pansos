const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
	{
		author: { type: mongoose.Types.ObjectId, ref: "User", required: true },
		conversation: {
			type: mongoose.Types.ObjectId,
			ref: "Conversation",
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
