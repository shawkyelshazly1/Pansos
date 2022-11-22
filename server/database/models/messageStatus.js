const mongoose = require("mongoose");

const messageStatusSchema = mongoose.Schema(
	{
		recipient: { type: mongoose.Types.ObjectId, ref: "User" },
		message: { type: mongoose.Types.ObjectId, ref: "Message" },
		conversation: { type: mongoose.Types.ObjectId, ref: "Conversation" },
		is_read: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("MessageStatus", messageStatusSchema);
