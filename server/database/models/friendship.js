const mongoose = require("mongoose");

const friendshipSchema = mongoose.Schema({
	author: { type: mongoose.Types.ObjectId, ref: "User", required: true },
	target: { type: mongoose.Types.ObjectId, ref: "User", required: true },
	status: { type: String, enum: ["pending,approved"], default: "pending" },
},
{ timestamps: true });

module.exports = mongoose.model("Friendship", friendshipSchema);
