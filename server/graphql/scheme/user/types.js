const userTypes = `
	type User {
		id: ID!
		firstName: String!
		lastName: String!
		email: String!
		profileImage: Media!
		profileCover: Media!
		followersCount: Int!
		followingsCount: Int!
		followStatus: String!
	}

	type Query {
		loadUser(userId: ID!): User!
		searchUsers(searchQuery: String!): [User]!
		authUser: User!
		getSuggesstedUsers: [User]!
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
		updateProfileInfo(firstName: String!, lastName: String!,profileImage:String,profileCover:String): User!
	}
`;

module.exports = userTypes;
