const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	firstName: { type: String, trim: true, required: true },
	lastName: { type: String, trim: true, required: true },
	email: { type: String, trim: true, required: true },
	password: { type: String, trim: true, required: true },
	profileImage: {
		type: String,
		trim: true,
		default: "https://i.postimg.cc/9Mj9yQgY/jonespeace-1.webp",
	},
});

module.exports = mongoose.model("User", userSchema);
