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
				membershipStatus
				groupType
				name
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
				membershipStatus
				groupType
				name
			}
			user {
				id
			}
		}
	}
`;

export { ADD_GROUP, JOIN_GROUP, LEAVE_GROUP };
