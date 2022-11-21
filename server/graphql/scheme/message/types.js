const messageTypes = `
	type Message {
		id: ID!
		author: User!
		conversation: Conversation!
		createdAt: Date!
	}
`;

module.exports = messageTypes;
