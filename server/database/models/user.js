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
			default: mongoose.Types.ObjectId("637d4894f241c18035c6f03f"),
		},
		profileCover: {
			type: mongoose.Types.ObjectId,
			ref: "Media",
			default: mongoose.Types.ObjectId("637d4b62957a89bbc15bfa40"),
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
