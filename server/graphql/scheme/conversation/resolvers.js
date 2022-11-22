const { MessageService, MessageStatusService } = require("../../../services");

const messageService = new MessageService();
const messageStatusService = new MessageStatusService();
// conversation graphql resolvers
const conversationResolvers = {
	// get conversation messages
	async messages(parent) {
		return await messageService.loadConversationMessages(parent._id);
	},
	// get unread messages Count
	async unreadMessagesCount(parent, _, context) {
		const { _id } = context.req.payload;
		return await messageStatusService.getUnreadMessagesCount(parent._id, _id);
	},
};

module.exports = conversationResolvers;
