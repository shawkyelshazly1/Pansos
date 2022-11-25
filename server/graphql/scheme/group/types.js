const groupTypes = `
	type Group {
		id: ID!
		name: String!
		administrators: [User]!
		groupType: String!
		photo: Media!

	}

	type Query {
		loadSingleGroup(groupId: ID!): Group!
		loadGroupMembers(groupId: ID!): [GroupMember]!
		loadUserGroups(userId: ID!): [Group]!
		loadJoinRequests(groupId: ID!): [GroupMember]!
	}

	type Mutation {
		addGroup(name: String!, groupType: String!): Group!
		updateGroup(groupId: ID!, name: String!, groupType: String!): Group!
		addOrRemoveGroupAdministrator(groupId: ID!, userId: ID!): Group!
	}
`;

module.exports = groupTypes;
