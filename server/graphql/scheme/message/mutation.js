const { isAuthenticated } = require("../../middlewares/auth"),
	{ MessageStatusService } = require("../../../services");

const messageStatusService = new MessageStatusService();

// messages graphql mutations
const messageMutations = {
	// mark all messages for a conversation as read
	markMessagesRead: async (_, { conversationId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		await messageStatusService.markAllAsRead(conversationId, _id);
	},
};

module.exports = messageMutations;
