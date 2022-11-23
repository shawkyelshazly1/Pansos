import { gql } from "@apollo/client";

// load user profile
const LOAD_USER = gql`
	query loadUser($userId: ID!) {
		loadUser(userId: $userId) {
			id
			firstName
			lastName
			email
			profileImage {
				url
				type
			}
			profileCover {
				url
				type
			}
			followersCount
			followingsCount
			followStatus
		}
	}
`;

// load & auth current user
const AUTH_USER = gql`
	query authUser {
		authUser {
			id
			firstName
			lastName
			email
			profileImage {
				url
				type
			}
			profileCover {
				url
				type
			}
			followersCount
			followingsCount
			followStatus
		}
	}
`;

// search users
const SEARCH_USERS = gql`
	query searchUsers($searchQuery: String!) {
		searchUsers(searchQuery: $searchQuery) {
			id
			firstName
			lastName
			profileImage {
				url
				type
			}
			followersCount
			followingsCount
			followStatus
		}
	}
`;

const LOAD_SUGGGESSTED_USERS = gql`
	query getSuggesstedUsers {
		getSuggesstedUsers {
			id
			profileImage {
				url
				type
			}
			followingsCount
			followersCount
			followStatus
			firstName
			lastName
		}
	}
`;

// load user profile
const LOAD_USER_MINIMAL = gql`
	query loadUser($userId: ID!) {
		loadUser(userId: $userId) {
			id
			firstName
			lastName
			profileImage {
				url
				type
			}
		}
	}
`;

export {
	LOAD_USER,
	AUTH_USER,
	SEARCH_USERS,
	LOAD_SUGGGESSTED_USERS,
	LOAD_USER_MINIMAL,
};
