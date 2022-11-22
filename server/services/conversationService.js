const { ConversationRepository } = require("../database");
const { BadInputGraphQLError } = require("../utils/error");
const consola = require("consola");

// class to interact with conversation repository funcs
class ConversationService {
	constructor() {
		this.repository = new ConversationRepository();
	}

	// add new conversation
	async addConversation(participants) {
		try {
			// validate input correct
			if (!participants)
				return await BadInputGraphQLError("Participants data is required.");

			// search and load if conversation exists already
			const existingConversation =
				await this.repository.GetConversationByUsersIds(participants);

			if (existingConversation) return existingConversation;

			// create new conversation id doesn't exists
			const newConversation = await this.repository.CreateConversation(
				participants
			);

			return newConversation;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load user conversations by userId
	async loadUserConversations(userId) {
		try {
			// validate input correct
			if (!userId) return await BadInputGraphQLError("UserId is required.");

			// load user conversations from DB
			const userConversations = await this.repository.GetUserConversations(
				userId
			);
			
			return userConversations;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load single conversation between two users
	async loadSingleConversationByUsers(participants) {
		try {
			// validate input correct
			if (!participants)
				return await BadInputGraphQLError("Participants data is required.");

			// load conversation from DB
			const existingConversation =
				await this.repository.GetConversationByUsersIds(participants);

			// throw error if not found
			if (!existingConversation)
				return await BadInputGraphQLError("Conversation not found!");

			// return conversation if found
			return existingConversation;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load conversation by ID
	async loadSingleConversationById(conversationId) {
		try {
			// validate input correct
			if (!conversationId)
				return await BadInputGraphQLError("conversationId  is required.");

			// load conversation from DB
			const existingConversation = await this.repository.GetConversationById(
				conversationId
			);

			// throw error if not found
			if (!existingConversation)
				return await BadInputGraphQLError("Conversation not found!");

			return existingConversation;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = ConversationService;
