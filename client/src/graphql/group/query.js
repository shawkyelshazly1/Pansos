import { gql } from "@apollo/client";

const LOAD_USER_GROUPS = gql`
	query loadUserGroups($userId: ID!) {
		loadUserGroups(userId: $userId) {
			id
			photo {
				url
			}
			name
			groupType
			groupMembersCount
			membershipStatus
		}
	}
`;

const LOAD_SUGGESSTED_GROUPS = gql`
	query loadSuggesstedGroups {
		loadSuggesstedGroups {
			id
			photo {
				url
			}
			name
			groupType
			groupMembersCount
			membershipStatus
		}
	}
`;

const LOAD_GROUP = gql`
	query loadGroup($groupId: ID!) {
		loadSingleGroup(groupId: $groupId) {
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
	}
`;

const LOAD_JOIN_REQUESTS = gql`
	query loadJoinRequests($groupId: ID!) {
		loadJoinRequests(groupId: $groupId) {
			id
			group {
				id
			}
			status
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
	LOAD_SUGGESSTED_GROUPS,
	LOAD_GROUP,
	LOAD_JOIN_REQUESTS,
	LOAD_USER_GROUPS,
};
