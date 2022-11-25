const groupMemberTypes = `
	type GroupMember {
		id: ID!
		user: User!
		group: Group!
		status: String!
	}

	type Mutation {
		joinGroup(groupId: ID!, groupType: String!): GroupMember!
		leaveGroup(groupId: ID!): GroupMember!
		acceptJoinRequest(groupId: ID!, userId: ID!): GroupMember!
		declineJoinRequest(groupId: ID!, userId: ID!): GroupMember!
	}
`;

module.exports = groupMemberTypes;
