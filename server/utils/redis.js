const { FriendshipService } = require("../services");
const _ = require("lodash");
const user = require("../database/models/user");

// set use offline on redis on socket disconnect
const setRedisUserOffline = async (redisClient, socket) => {
	// get all users
	let users = await redisClient.smembers("online-users", async (err, data) => {
		return await JSON.stringify(data);
	});

	let onlineUsers = users.map((user) => JSON.parse(user));

	// update disconnected user to offline
	onlineUsers = onlineUsers.map((user) =>
		String(user.userId) !== String(socket.userId)
			? JSON.stringify(user)
			: JSON.stringify({
					...user,
					lastSeen: Date.now(),
					status: "offline",
			  })
	);
	redisClient.del("online-users");
	redisClient.sadd("online-users", onlineUsers);
};

// set use online on socket disconnect
const setRedisUserOnline = async (redisClient, userId) => {
	// get all users
	let users = await redisClient.smembers("online-users", async (err, data) => {
		return await JSON.stringify(data);
	});

	let onlineUsers = users.map((user) => JSON.parse(user));

	// check if user exists or not
	let user = onlineUsers.filter(
		(user) => String(user.userId) === String(userId)
	)[0];

	if (user) {
		onlineUsers = onlineUsers.map((user) =>
			String(user.userId) !== String(userId)
				? user
				: {
						...user,
						lastSeen: Date.now(),
						status: "online",
				  }
		);
	} else {
		onlineUsers.push({ userId, lastSeen: Date.now(), status: "online" });
	}

	onlineUsers = onlineUsers.map((user) => JSON.stringify(user));

	redisClient.del("online-users");
	redisClient.sadd("online-users", onlineUsers);
};

const friendshipService = new FriendshipService();

// load user online followers and followings
const getOnlineUsers = async (socket, redisClient) => {
	let users = await redisClient.smembers("online-users", async (err, data) => {
		return await JSON.stringify(data);
	});

	// pull user followers and followings
	let userFollowings = [
		...(await friendshipService.getUserFollowings(socket.userId)),
	].map((user) => user.target);

	let userFollowers = [
		...(await friendshipService.getUserFollowers(socket.userId)),
	].map((user) => user.author);

	// match friendships with status
	let onlineUsers = users.map((user) => JSON.parse(user));

	// get online followers

	let onlineFollowers = _.intersectionWith(
		userFollowers,
		onlineUsers,
		(o, o2) => String(o._id) === o2.userId
	);

	onlineFollowers = onlineFollowers.map((user) =>
		_.find(onlineUsers, { userId: String(user._id) })
			? { ...user._doc, ..._.find(onlineUsers, { userId: String(user._id) }) }
			: ""
	);

	// get online followings

	let onlineFollowings = _.intersectionWith(
		userFollowings,
		onlineUsers,
		(o, o2) => String(o._id) === o2.userId
	);

	onlineFollowings = onlineFollowings.map((user) =>
		_.find(onlineUsers, { userId: String(user._id) })
			? { ...user._doc, ..._.find(onlineUsers, { userId: String(user._id) }) }
			: ""
	);

	let onlineFriends = [
		...onlineFollowers.filter((user) => user !== []),
		...onlineFollowings.filter((user) => user !== []),
	];

	onlineFriends = [
		...new Map(
			onlineFriends.map((friend) => [friend["userId"], friend])
		).values(),
	];

	onlineFriends = _.orderBy(
		onlineFriends,
		["status", "lastSeen"],
		["desc", "desc"]
	).slice(0, 10);

	return onlineFriends;
};

module.exports = { setRedisUserOffline, setRedisUserOnline, getOnlineUsers };
