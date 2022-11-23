const { MessageService, MessageStatusService } = require("../services");
const consola = require("consola");
const user = require("../database/models/user");

const messageService = new MessageService();
const messageStatusService = new MessageStatusService();

// configure events for messages
const configureMessageEvents = (socket, ioServer) => {
	socket.on("new_msg", async (messageData) => {
		// add new message in DB

		try {
			const newMessage = await messageService.addMessage({
				...messageData,
				author: socket.handshake.auth.userId,
			});

			let otherParticipant = newMessage.conversation.users.filter(
				(user) => user._id.toString() !== socket.handshake.auth.userId
			)[0];

			// checking if user online or not to set messages as unread if not online
			if (ioServer.sockets.adapter.rooms.get(otherParticipant._id.toString())) {
				// add message status as read
				await messageStatusService.addMessageStatus({
					recipient: otherParticipant._id,
					message: newMessage._id,
					conversation: newMessage.conversation._id,
					is_read: true,
				});
			} else {
				// add message status as read
				await messageStatusService.addMessageStatus({
					recipient: otherParticipant._id,
					message: newMessage._id,
					conversation: newMessage.conversation._id,
					is_read: false,
				});
			}

			// mark any messages in this conversation as read for the sender
			await messageStatusService.markAllAsRead(
				newMessage.conversation._id,
				socket.handshake.auth.userId
			);

			//send message back to users
			newMessage.conversation.users.forEach((user) => {
				ioServer.in(user._id.toString()).emit("new_msg", newMessage);
			});
		} catch (error) {
			consola.error(error);
		}
	});

	// mark message as not read
	socket.on("msg_not_recieved", async (msgData) => {
		let { conversationId, messageId } = msgData;
		try {
			await messageStatusService.markSingleMessageAsUnRead(
				conversationId,
				socket.handshake.auth.userId,
				messageId
			);
		} catch (error) {
			consola.error(error);
		}
	});
};

module.exports = { configureMessageEvents };
