const conversationTypes = `
	type Conversation {
		id: ID!
		users: [User]!
		lastMessage: Message!
		createdAt: Date!
		messages: [Message]!
		unreadMessagesCount:Int!
	}

	type Query {
		loadConversationMessages(conversationId: ID!): [Message]!
		loadUserConversations: [Conversation]!
		loadSingleConversation(userId:ID!):Conversation!
		loadUnreadConversationsCount(userId:ID!):Int!
	}

	type Mutation {
		addConversation(participantId: ID!): Conversation!
	}
`;

module.exports = conversationTypes;
