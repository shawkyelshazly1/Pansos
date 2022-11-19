const UserService = require("../../../services/userService");
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
};

module.exports = userMutation;
