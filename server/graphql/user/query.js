// user graphql queries
const userQuery = {
	getUser: (parent, args) => {
		console.log(args);
		return "s";
	},
};

module.exports = userQuery;
