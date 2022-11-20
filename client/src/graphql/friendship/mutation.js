import { gql } from "@apollo/client";

const SEND_FOLLOW_REQUEST = gql`
	mutation sendFollowRequest($userId: ID!) {
		sendFollowRequest(userId: $userId) {
			target {
				id
				followStatus
			}
			author {
				id
				followersCount
				followingsCount
				followStatus
			}
		}
	}
`;

const DELETE_FOLLOW = gql`
	mutation deleteSentRequest($userId: ID!) {
		deleteSentRequest(userId: $userId) {
			target {
				id
				followStatus
			}
			author {
				id
				followersCount
				followingsCount
				followStatus
			}
		}
	}
`;

export { SEND_FOLLOW_REQUEST, DELETE_FOLLOW };
