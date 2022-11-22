const { MessageRepository, ConversationRepository } = require("../database");
const { BadInputGraphQLError } = require("../utils/error");
const consola = require("consola");

// class to interact with conversation repository funcs
class MessageService {
	constructor() {
		this.repository = new MessageRepository();
		this.conversationRepository = new ConversationRepository();
	}

	// add new Message && update conversation last message
	async addMessage(messageData) {
		try {
			// validate input correct
			if (!messageData)
				return await BadInputGraphQLError("Message data is required.");

			// fin conversation try with usersIds
			let existingConversation =
				await this.conversationRepository.GetConversationByUsersIds([
					messageData.author,
					messageData.recipient,
				]);

			// if no conversation create new one
			if (!existingConversation) {
				existingConversation =
					await this.conversationRepository.CreateConversation([
						messageData.author,
						messageData.recipient,
					]);
			}

			// create new message
			const newMessage = await this.repository.CreateNewMessage({
				author: messageData.author,
				content: messageData.content,
				conversation: existingConversation._id,
			});

			//update conversation last message
			const conversation =
				await this.conversationRepository.UpdateConversationLastMessage(
					existingConversation._id,
					newMessage._id
				);

			return newMessage;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load conversation messages
	async loadConversationMessages(conversationId) {
		try {
			// validate input correct
			if (!conversationId)
				return await BadInputGraphQLError("Conversation Id is required.");

			// load conversation
			const existingConversation =
				await this.conversationRepository.GetConversationById(conversationId);

			// return error if no conversation matching the ID
			if (!existingConversation)
				return await BadInputGraphQLError("Conversation not found!");

			// load conversation messages from DB
			const conversationMessages =
				await this.repository.GetConversationMessages(conversationId);

			return conversationMessages;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = MessageService;
