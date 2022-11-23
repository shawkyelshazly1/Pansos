const mongoose = require("mongoose");

const conversationSchema = mongoose.Schema(
	{
		users: [
			{
				type: mongoose.Types.ObjectId,
				required: true,
				ref: "User",
				autopopulate: true,
			},
		],
		lastMessage: {
			type: mongoose.Types.ObjectId,
			ref: "Message",
			autopopulate: true,
		},
	},
	{ timestamps: true }
);

conversationSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Conversation", conversationSchema);
