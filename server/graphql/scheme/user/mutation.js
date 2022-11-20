const UserService = require("../../../services/userService");
const { isAuthenticated } = require("../../middlewares/auth");
const userService = new UserService();

const userMutation = {
	// register user
	createUser: async (_, args) => {
		const { firstName, lastName, email, password, confirmPassword } = args;
		return await userService.registerUser({
			firstName,
			lastName,
			email,
			password,
			confirmPassword,
		});
	},

	// login user
	loginUser: async (_, { email, password }) => {
		return await userService.loginUser({ email, password });
	},

	// update user profileCover
	updateProfileInfo: async (_, { firstName, lastName }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await userService.updateProfileInfo(_id, { firstName, lastName });
	},
};

module.exports = userMutation;
