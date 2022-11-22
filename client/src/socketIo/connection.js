import socket from "./socket";

const connectSocketIo = (userId) => {
	// auth user on socket with userId
	console.log(userId);
	socket.auth = { userId };
	//connect socket to server
	socket.connect();
};

export { connectSocketIo };
