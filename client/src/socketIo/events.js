const sendMessage = (IOsocket, messageData) => {
	// emit message to server
	IOsocket.emit("new_msg", messageData);
};

const registerEvents = (socket) => {
	
};

export { sendMessage, registerEvents };
