import { gql } from "@apollo/client";

const GET_USER_FOLLOWERS = gql`
	query getUserFollowers($userId: ID!) {
		getUserFollowers(userId: $userId) {
			id
			author {
				id
				followStatus
				firstName
				lastName
				profileImage{
				url
				type
			}
			}
		}
	}
`;

const GET_USER_FOLLOWINGS = gql`
	query getUserFollowings {
		getUserFollowings {
			id
			target {
				id
				firstName
				lastName
				profileImage{
				url
				type
			}
				followStatus
			}
		}
	}
`;

const GET_PENDING_RECIEVED_REQEUSTS = gql`
	query getPendingRecievedRquests {
		getPendingRecievedRquests {
			id
			author {
				id
				firstName
				lastName
				profileImage{
				url
				type
			}
			}
		}
	}
`;

export {
	GET_USER_FOLLOWERS,
	GET_USER_FOLLOWINGS,
	GET_PENDING_RECIEVED_REQEUSTS,
};
