const { MessageService } = require("../../../services");

const messageService = new MessageService();
// conversation graphql resolvers
const conversationResolvers = {
	// get conversation messages
	async messages(parent) {
		return await messageService.loadConversationMessages(parent._id);
	},
};

module.exports = conversationResolvers;
