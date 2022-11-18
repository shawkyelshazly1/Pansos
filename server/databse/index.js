module.exports = {
	initiDBConnection: require("./connection"),
	UserRepository: require("./repositories/userRepository"),
	PostRepository: require("./repositories/postRepository"),
	PostLikeRepository: require("./repositories/postLikeRepository"),
	FriendshipRepository: require("./repositories/friendshipRepository"),
	CommentRepository: require("./repositories/commentRepository"),
};
