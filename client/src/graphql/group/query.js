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

export { LOAD_SUGGESSTED_GROUPS };
