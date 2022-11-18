const userMutation = {
	createUser: (parent, args) => {
		console.log(args);
		return "s";
	},
};

module.exports = userMutation;
