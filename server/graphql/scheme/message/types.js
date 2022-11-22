const messageTypes = `
	type Message {
		id: ID!
		author: User!
		conversation: Conversation
		createdAt: Date!
		content:String!
	}
`;

module.exports = messageTypes;
