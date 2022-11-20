import { gql } from "@apollo/client";

const LOAD_NEWSFEED = gql`
	query getUserNewsfeed {
		getUserNewsfeed {
			id
			content
			commentsCount
			likesCount
			isLiked
			createdAt
			author {
				id
				firstName
				lastName
				profileImage
			}
		}
	}
`;

// load user posts
const LOAD_USER_POSTS = gql`
	query getUserPosts($userId: ID!) {
		getUserPosts(userId: $userId) {
			id
			content
			isLiked
			likesCount
			commentsCount
			createdAt
			author {
				id
				firstName
				lastName
				profileImage
			}
		}
	}
`;

export { LOAD_NEWSFEED, LOAD_USER_POSTS };
