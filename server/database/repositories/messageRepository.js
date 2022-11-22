const { MessageModal } = require("../models"),
	consola = require("consola");

// class to interact with Message Modal in DB
class MessageRepository {
	// create new Message
	async CreateNewMessage(messageData) {
		try {
			let newMessage = await new MessageModal(messageData);
			newMessage = await newMessage.save();
			newMessage = await newMessage.populate("author", "-password");
			newMessage = await newMessage.populate("conversation");

			return newMessage;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// load Conversation Messages by CnversationID
	async GetConversationMessages(conversationId) {
		try {
			const conversationMessages = await MessageModal.find({
				conversation: conversationId,
			})
				.populate("author", "-password")
				.sort({ createdAt: -1 });

			return conversationMessages;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = MessageRepository;
