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
			media {
				url
				type
			}
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

const LOAD_POST = gql`
	query getSinglePost($postId: ID!) {
		getPostById(postId: $postId) {
			id
			content
			commentsCount
			likesCount
			isLiked
			createdAt
			media {
				url
				type
			}
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
			media {
				url
				type
			}
			author {
				id
				firstName
				lastName
				profileImage {
					url
					type
				}
			}
		}
	}
`;

export { LOAD_NEWSFEED, LOAD_USER_POSTS, LOAD_POST };
