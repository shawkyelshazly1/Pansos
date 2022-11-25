import { gql } from "@apollo/client";

const ADD_GROUP = gql`
	mutation addGroup($name: String!, $groupType: String!) {
		addGroup(name: $name, groupType: $groupType) {
			id
			name
			photo {
				url
			}
			groupMembersCount
			groupType
			membershipStatus
		}
	}
`;

const JOIN_GROUP = gql`
	mutation joinGroup($groupId: ID!, $groupType: String!) {
		joinGroup(groupId: $groupId, groupType: $groupType) {
			id
			group {
				id
				groupType
				membershipStatus
				name
				photo {
					url
				}
				groupMembersCount
				members {
					id
					firstName
					lastName
					profileImage {
						url
					}
				}
				administrators {
					id
					firstName
					lastName
					profileImage {
						url
					}
				}
			}
			user {
				id
			}
		}
	}
`;

const LEAVE_GROUP = gql`
	mutation leaveGroup($groupId: ID!) {
		leaveGroup(groupId: $groupId) {
			id
			group {
				id
				groupType
				membershipStatus
				name
				photo {
					url
				}
				groupMembersCount
				members {
					id
					firstName
					lastName
					profileImage {
						url
					}
				}
				administrators {
					id
					firstName
					lastName
					profileImage {
						url
					}
				}
			}
			user {
				id
			}
		}
	}
`;

const ACCEPT_JOIN_REQUEST = gql`
	mutation acceptJoinRequest($groupId: ID!, $userId: ID!) {
		acceptJoinRequest(groupId: $groupId, userId: $userId) {
			id
			status
			group {
				id
				groupMembersCount
				membershipStatus
			}
			user {
				id
				firstName
				lastName
				profileImage {
					url
				}
			}
		}
	}
`;

const DECLINE_JOIN_REQUEST = gql`
	mutation declineJoinRequest($groupId: ID!, $userId: ID!) {
		declineJoinRequest(groupId: $groupId, userId: $userId) {
			id
			status
			group {
				id
				groupMembersCount
				membershipStatus
			}
			user {
				id
				firstName
				lastName
				profileImage {
					url
				}
			}
		}
	}
`;

export {
	ADD_GROUP,
	JOIN_GROUP,
	LEAVE_GROUP,
	ACCEPT_JOIN_REQUEST,
	DECLINE_JOIN_REQUEST,
};
