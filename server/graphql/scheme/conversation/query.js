const { ConversationService, MessageService } = require("../../../services");
const { isAuthenticated } = require("../../middlewares/auth");

const conversationService = new ConversationService();
const messageService = new MessageService();

// conversation graphql queries
const conversationQueries = {
	// load conversation messages
	loadConversationMessages: async (_, { conversationId }, context) => {
		await isAuthenticated(context);
		return await messageService.loadConversationMessages(conversationId);
	},

	// load user conversations
	loadUserConversations: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await conversationService.loadUserConversations(_id);
	},

	//load single conversation
	loadSingleConversation: async (_, { userId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await conversationService.loadSingleConversationByUsers([
			_id,
			userId,
		]);
	},

	// load unread conversations count
	loadUnreadConversationsCount: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await conversationService.getUnreadConversationsCount(_id);
	},
};

module.exports = conversationQueries;
