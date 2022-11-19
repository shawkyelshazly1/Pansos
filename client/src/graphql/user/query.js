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
		}
	}
`;

// load user profile
const LOAD_USER_POSTS = gql`
	query getUserPosts($userId: ID!) {
		getUserPosts(userId: $userId) {
			id
			content
			isLiked
			likesCount
			commentsCount
			author {
				id
				firstName
				lastName
				profileImage
			}
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
		}
	}
`;

export { LOAD_USER, LOAD_USER_POSTS, AUTH_USER };
