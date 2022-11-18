const userTypes = `
	type User {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		password: String!
		profileImage: String!
	}

	type Query {
		getUser(userId: ID!): String!
	}

	type Mutation {
		createUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
			confirmPassword: String!
		): String!
	}
`;

module.exports = userTypes;
