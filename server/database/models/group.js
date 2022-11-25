const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		photo: { type: mongoose.Types.ObjectId, ref: "Media", autopopulate: true },
		administrators: [
			{
				type: mongoose.Types.ObjectId,
				ref: "User",
				autopopulate: true,
			},
		],
		groupType: { type: String, enum: ["private", "public"], default: "public" },
	},
	{ timestamps: true }
);

groupSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("Group", groupSchema);
