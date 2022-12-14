import { io } from "socket.io-client";

//url
const URL = "https://pansos-api.onrender.com/";

// connect socket on demand
const socket = io(URL, { autoConnect: false });

// listen to all events from server
socket.onAny((event, ...args) => {
	console.log(event, args);
});

export default socket;
