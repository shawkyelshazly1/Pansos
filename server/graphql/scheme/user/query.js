const UserService = require("../../../services/userService"),
	{ isAuthenticated } = require("../../middlewares/auth");

const userService = new UserService();
// user graphql queries
const userQuery = {
	// load single user by id
	loadUser: async (_, { userId }, context) => {
		await isAuthenticated(context);
		return await userService.getUser(userId);
	},

	//auth User
	authUser: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id: userId } = context.req.payload;
		return await userService.getUser(userId);
	},

	// search users
	searchUsers: async (_, { searchQuery }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await userService.searchUsers(searchQuery, _id);
	},

	// load suggessted users
	getSuggesstedUsers: async (_, __, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await userService.loadSuggesstedUsers(_id);
	},
};

module.exports = userQuery;
