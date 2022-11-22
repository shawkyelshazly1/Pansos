import { gql } from "@apollo/client";

// load user profile
const LOAD_USER = gql`
	query loadUser($userId: ID!) {
		loadUser(userId: $userId) {
			id
			firstName
			lastName
			email
			profileImage
			profileCover
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
			profileImage
			profileCover
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
			profileImage
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
			profileImage
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
			profileImage
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
