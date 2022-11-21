const conversationTypes = `
	type Conversation {
		id: ID!
		users: [User]!
		lastMessage: Message!
		createdAt: Date!
		messages: [Message]!
	}

	type Query {
		loadConversationMessages(conversationId: ID!): [Message]!
		loadUserConversations: [Conversation]!
		loadSingleConversation(userId:ID!):Conversation!
	}

	type Mutation {
		addConversation(participantId: ID!): Conversation!
	}
`;

module.exports = conversationTypes;
