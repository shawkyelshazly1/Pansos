import { gql } from "@apollo/client";

const SEND_FOLLOW_REQUEST = gql`
	mutation sendFollowRequest($userId: ID!) {
		sendFollowRequest(userId: $userId) {
			id
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
			id
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

const ACCEPT_REQUEST = gql`
	mutation acceptrequest($userId: ID!) {
		acceptFollowRequest(userId: $userId) {
			id
			author {
				id
				firstName
				lastName
				profileImage {
					type
					url
				}
				followStatus
			}
			target {
				id
				followersCount
			}
		}
	}
`;

const DECLINE_REQUEST = gql`
	mutation declineRequest($userId: ID!) {
		declineFollowRequest(userId: $userId) {
			id
			author {
				id
				firstName
				lastName
				profileImage {
					type
					url
				}
				followStatus
			}
		}
	}
`;

export { SEND_FOLLOW_REQUEST, DELETE_FOLLOW, ACCEPT_REQUEST, DECLINE_REQUEST };
