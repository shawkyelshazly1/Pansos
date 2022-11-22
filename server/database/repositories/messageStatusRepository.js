const consola = require("consola"),
	{ MessageStatusModal } = require("../models");
const mongoose = require("mongoose");

// class to interact with messages status in db
class MessageStatusRepository {
	// create new messagestatus

	async CreateMessageStatus(messageStatusData) {
		try {
			let newMessageStatus = await new MessageStatusModal(messageStatusData);
			await newMessageStatus.save();

			return newMessageStatus;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// update messageStatus to read by conversationID & UserId
	async UpdateMessageStatusIsRead(conversationId, userId) {
		try {
			const updatedMessgesStatus = await MessageStatusModal.updateMany(
				{
					conversation: mongoose.Types.ObjectId(conversationId),
					recipient: mongoose.Types.ObjectId(userId),
				},
				{ is_read: true }
			);
			return updatedMessgesStatus;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// update messageStatus to unread by conversationID & UserId & message Id
	async UpdateMessageStatusIsUnRead(conversationId, userId, messageId) {
		try {
			const updatedMessgesStatus = await MessageStatusModal.updateMany(
				{
					conversation: mongoose.Types.ObjectId(conversationId),
					recipient: mongoose.Types.ObjectId(userId),
					message: mongoose.Types.ObjectId(messageId),
				},
				{ is_read: false }
			);
			return updatedMessgesStatus;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get count of unread messages by conversationID & UserId
	async GetUnreadMessagesCount(conversationId, userId) {
		try {
			const unreadMessagesCount = await MessageStatusModal.find({
				conversation: mongoose.Types.ObjectId(conversationId),
				recipient: mongoose.Types.ObjectId(userId),
				is_read: false,
			}).count();

			return unreadMessagesCount;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = MessageStatusRepository;
