const mongoose = require("mongoose");

const groupMemberSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
			autopopulate: true,
		},
		group: {
			type: mongoose.Types.ObjectId,
			ref: "Group",
			required: true,
			autopopulate: true,
		},
		status: {
			type: String,
			enum: ["accepted", "pending"],
			required: true,
		},
	},
	{ timestamps: true }
);

groupMemberSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("GroupMember", groupMemberSchema);
