import { gql } from "@apollo/client";

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
			administrators {
				id
			}
		}
	}
`;

export { LOAD_SUGGESSTED_GROUPS, LOAD_GROUP };
