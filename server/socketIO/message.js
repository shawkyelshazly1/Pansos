const { MessageService } = require("../services");
const consola = require("consola");

const messageService = new MessageService();

// configure events for messages
const configureMessageEvents = (socket) => {
	socket.on("new_msg", async (messageData) => {
		// add new message in DB
		try {
			const newMessage = await messageService.addMessage({
				...messageData,
				author: socket.handshake.auth.userId,
			});

			newMessage.conversation.users.forEach((user) => {
				socket.to(user.toString()).emit("new_msg", newMessage);
				console.log("shit");
			});
		} catch (error) {
			consola.error(error);
		}
	});
};

module.exports = { configureMessageEvents };
