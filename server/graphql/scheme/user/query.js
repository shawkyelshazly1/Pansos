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

	// search users
	searchUsers: async (_, { searchQuery }, context) => {
		await isAuthenticated(context);
		return await userService.searchUsers(searchQuery);
	},
};

module.exports = userQuery;
