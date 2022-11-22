const { Server } = require("socket.io"),
	consola = require("consola");
const { configureMessageEvents } = require("./message");
const { v4 } = require("uuid");

// main socket io connection thread
const initSocketIO = (server) => {
	// create socketIo instance
	const ioServer = new Server(server, {
		cors: { origin: "*" },
	});

	// listen to client connection
	ioServer.on("connection", (socket) => {
		socket.join(socket.handshake.auth.userId);
	
		// configure all events
		configureMessageEvents(socket, ioServer);
		configureDisconnectEevents(socket, ioServer);
	});

	// use the user ID in socket as attribute
	ioServer.use((socket, next) => {
		// load user ID from the handshake
		const userId = socket.handshake.auth.userId;

		// throw error if userId doesn't exist in the handshake
		if (!userId) return next(new Error("invalid userId"));

		// set user Id as attribuate of the socket
		socket.userId = userId;
		next();
	});
};

// configure disconnect events
const configureDisconnectEevents = (socket, ioServer) => {
	// on user disconnection
	socket.on("disconnect", () => {
		consola.info("📴 user disconnected");

	});
};

module.exports = { initSocketIO };
