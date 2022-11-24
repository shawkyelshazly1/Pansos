const { Server } = require("socket.io"),
	consola = require("consola");
const { configureMessageEvents } = require("./message");
const { v4 } = require("uuid");
const {
	setRedisUserOffline,
	setRedisUserOnline,
	getOnlineUsers,
} = require("../utils/redis");

// main socket io connection thread
const initSocketIO = (server, redisClient) => {
	// create socketIo instance
	const ioServer = new Server(server, {
		cors: { origin: "*" },
		pingInterval: 12000,
	});

	// listen to client connection
	ioServer.on("connection", async (socket) => {
		socket.join(socket.handshake.auth.userId);

		// set user as online on redis

		setRedisUserOnline(redisClient, socket.userId);

		// configure all events
		configureMessageEvents(socket, ioServer);
		configureDisconnectEevents(socket, redisClient);
		configurePingEevents(socket, ioServer, redisClient);
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
const configureDisconnectEevents = (socket, redisClient) => {
	// on user disconnection
	socket.on("disconnect", async () => {
		consola.info("📴 user disconnected");

		// set user as offline in redis
		await setRedisUserOffline(redisClient, socket);
	});
};

const configurePingEevents = (socket, ioServer, redisClient) => {
	socket.conn.on("packet", async (packet) => {
		ioServer
			.in(socket.userId)
			.emit("online-users", await getOnlineUsers(socket, redisClient));
	});
};

module.exports = { initSocketIO };
