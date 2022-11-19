const userTypes = `
	type User {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		password: String!
		profileImage: String!
		profileCover:String!
		followersCount: Int!
		followingsCount: Int!
		
	}

	type Query {
		loadUser(userId: ID!): User!
		searchUsers(searchQuery: String!): [User]!
		authUser:User!
	}

	type LoginResponse {
		accessToken: String!
		user: User!
	}

	type Mutation {
		createUser(
			firstName: String!
			lastName: String!
			email: String!
			password: String!
			confirmPassword: String!
		): User!
		loginUser(email: String!, password: String!): LoginResponse!
	}
`;

module.exports = userTypes;
