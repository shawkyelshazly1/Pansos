const { userTypes, userQueries, userMutations } = require("./user");

const typeDefs = `
	${userTypes}
`;

const resolvers = {
	Query: {
		...userQueries,
	},
	Mutation: {
		...userMutations,
	},
};

module.exports = { typeDefs, resolvers };
