const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema(
	{
		users: [{ type: mongoose.Types.ObjectId, required: true, ref: "User" }],
		lastMessage: { type: mongoose.Types.ObjectId, ref: "Message" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Conversation", conversationSchema);
