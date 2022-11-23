module.exports = {
	initiDBConnection: require("./connection"),
	UserRepository: require("./repositories/userRepository"),
	PostRepository: require("./repositories/postRepository"),
	PostLikeRepository: require("./repositories/postLikeRepository"),
	FriendshipRepository: require("./repositories/friendshipRepository"),
	CommentRepository: require("./repositories/commentRepository"),
	ConversationRepository: require("./repositories/conversationRepository"),
	MessageRepository: require("./repositories/messageRepository"),
	MessageStatusRepository: require("./repositories/messageStatusRepository"),
	MediaRepository: require("./repositories/mediaRepository"),
	SharedPostRepository: require("./repositories/sharedPostRepository"),
};
