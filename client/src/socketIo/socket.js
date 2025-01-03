import { io } from "socket.io-client";

// connect socket on demand
const socket = io(import.meta.env.VITE_API_URL, { autoConnect: true });

// listen to all events from server
socket.onAny((event, ...args) => {
	console.log(event, args);
});

export default socket;
