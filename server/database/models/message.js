const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
	{
		author: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
		conversation: {
			type: mongoose.Types.ObjectId,
			ref: "Conversation",
			required: true,
			autopopulate: true,
		},
		content: { type: String, required: true, trim: true },
	},
	{ timestamps: true }
);

messageSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Message", messageSchema);
