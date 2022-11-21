const { ConversationService } = require("../../../services");
const { isAuthenticated } = require("../../middlewares/auth");

const conversationService = new ConversationService();

// conversation graphql mutations
const conversationMutations = {
	// add new conversation
	addConversation: async (_, { participantId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		await conversationService.addConversation([_id, participantId]);
	},
};

module.exports = conversationMutations;
