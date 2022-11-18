const mongoose = require("mongoose");

const postLikeSchema = mongoose.Schema({
	post: { type: mongoose.Types.ObjectId, ref: "Post", required: true },
	author: { type: mongoose.Types.ObjectId, ref: "User", required: true },
},
{ timstamps: true });

module.exports = mongoose.model("PostLike", postLikeSchema);
