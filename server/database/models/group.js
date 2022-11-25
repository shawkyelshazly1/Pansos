const mongoose = require("mongoose");

const groupSchema = mongoose.Schema(
	{
		name: { type: String, required: true, trim: true },
		photo: {
			type: mongoose.Types.ObjectId,
			ref: "Media",
			autopopulate: true,
			default: mongoose.Types.ObjectId("637d563d95eedd4b185b2cdd"),
		},
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
