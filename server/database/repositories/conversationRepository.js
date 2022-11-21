const consola = require("consola"),
	{ ConversationModal } = require("../models");
const mongoose = require("mongoose");

// class to interact with conversation Modal
class ConversationRespository {
	// create new Conversation by two users
	async CreateConversation(usersIds) {
		try {
			let newConversation = await new ConversationModal({ users: usersIds });
			newConversation = await newConversation.save();
			newConversation = await newConversation.populate("users", "-password");
			return newConversation;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// load user conversations
	async GetUserConversations(userId) {
		try {
			const userConversations = await ConversationModal.find({
				users: { $in: [mongoose.Types.ObjectId(userId)] },
			})
				.populate("users", "-password")
				.populate("lastMessage")
				.sort({ lastMessage: -1 });

			return userConversations;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get single conversation
	async GetConversationById(conversationId) {
		try {
			const existingConversation = await ConversationModal.findById(
				conversationId
			)
				.populate("users", "-password")
				.populate("lastMessage");

			return existingConversation;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get single conversation by usersIds
	async GetConversationByUsersIds(usersIds) {
		let Ids = usersIds.map((id) => mongoose.Types.ObjectId(id));
		try {
			const existingConversation = await ConversationModal.findOne({
				users: { $all: Ids },
			})
				.populate("users", "-password")
				.populate("lastMessage");

			return existingConversation;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// update conversation last Message by conversationID
	async UpdateConversationLastMessage(conversationId, lastMessageId) {
		try {
			const updatedConversation = await ConversationModal.findByIdAndUpdate(
				conversationId,
				{ lastMessage: lastMessageId },
				{ new: true }
			)
				.populate("users", "-password")
				.populate("lastMessage");

			return updatedConversation;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = ConversationRespository;
