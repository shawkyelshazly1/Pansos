// friendship graphql types

const friendshipTypes = `
	type Friendship {
		id: ID!
		author: User!
		target: User!
		status: String!
	}

	type Query {
		getUserFollowers(userId: ID!): [Friendship]!
		getUserFollowings: [Friendship]!
		getPendingSentRquests: [Friendship]!
		getPendingRecievedRquests: [Friendship]!
	}

	type Mutation {
		sendFollowRequest(userId: ID!): Friendship!
		acceptFollowRequest(userId: ID!): Friendship!
		declineFollowRequest(userId: ID!): Friendship!
		deleteSentRequest(userId: ID!): Friendship!
	}
`;

module.exports = friendshipTypes;
