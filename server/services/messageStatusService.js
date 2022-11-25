const { MessageStatusRepository } = require("../database");

// class to interact with message status repository
class MessageStatusService {
	constructor() {
		this.repository = new MessageStatusRepository();
	}

	// create a new unreadMessage
	async addMessageStatus(messageStatusData) {
		try {
			const { recipient, message, conversation } = messageStatusData;
			if ((!recipient || !message, !conversation))
				return await BadInputGraphQLError("messageStatus Data is  required.");

			const newMessageStatus = await this.repository.CreateMessageStatus(
				messageStatusData
			);

			return newMessageStatus;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get unread messaegs for a certain user and certain conversation
	async getUnreadMessagesCount(conversationId, userId) {
		try {
			if (!conversationId || !userId)
				return await BadInputGraphQLError(
					"Conversation & User Ids are required."
				);

			const unreadMessagesCount = await this.repository.GetUnreadMessagesCount(
				conversationId,
				userId
			);

			return unreadMessagesCount;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// get unread messaegs for a certain user
	async getUnreadMessagesByUserId(userId) {
		try {
			if (!userId) return await BadInputGraphQLError(" User Ids is required.");

			const unreadMessagesCount = await this.repository.GetUnreadMessages(
				userId
			);

			return unreadMessagesCount;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// mark all conversation messages as read
	async markAllAsRead(conversationId, userId) {
		try {
			if (!conversationId || !userId)
				return await BadInputGraphQLError(
					"Conversation & User Ids are required."
				);

			const updatedMessagesStatus =
				await this.repository.UpdateMessageStatusIsRead(conversationId, userId);

			return updatedMessagesStatus.length > 0;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// mark all conversation messages as read
	async markSingleMessageAsUnRead(conversationId, userId, messageId) {
		try {
			if (!conversationId || !userId || !messageId)
				return await BadInputGraphQLError(
					"Conversation, Message & User Ids are required."
				);

			const updatedMessagesStatus =
				await this.repository.UpdateMessageStatusIsUnRead(
					conversationId,
					userId,
					messageId
				);

			return updatedMessagesStatus.length > 0;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = MessageStatusService;
