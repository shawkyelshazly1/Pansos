const messageTypes = `
	type Message {
		id: ID!
		author: User!
		conversation: Conversation
		createdAt: Date!
		content: String!
	}

	type Mutation {
		markMessagesRead(conversationId: ID!): Boolean
	}
`;

module.exports = messageTypes;
