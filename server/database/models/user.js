const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		firstName: { type: String, trim: true, required: true },
		lastName: { type: String, trim: true, required: true },
		email: { type: String, trim: true, required: true },
		password: { type: String, trim: true, required: true },
		profileImage: {
			type: mongoose.Types.ObjectId,
			ref: "Media",
			default: mongoose.Types.ObjectId("637d564595eedd4b185b2cde"),
			autopopulate: true,
		},
		profileCover: {
			type: mongoose.Types.ObjectId,
			ref: "Media",
			default: mongoose.Types.ObjectId("637d563d95eedd4b185b2cdd"),
			autopopulate: true,
		},
	},
	{ timestamps: true }
);
userSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("User", userSchema);
