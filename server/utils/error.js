const { GraphQLError } = require("graphql");

// throw graphql error
const BadInputGraphQLError = async (message) => {
	return new GraphQLError(message, {
		extensions: {
			code: "BAD_USER_INPUT",
		},
	});
};

// throw graphql error
const NotAuthorizedGraphQLError = async () => {
	throw new GraphQLError("Not Authenticated", {
		extensions: {
			code: "UNAUTHENTICATED ",
		},
	});
};

module.exports = { BadInputGraphQLError, NotAuthorizedGraphQLError };
