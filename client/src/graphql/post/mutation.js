import { gql } from "@apollo/client";

const DELETE_POST = gql`
	mutation deletePost($postId: ID!) {
		deletePost(postId: $postId) {
			id
		}
	}
`;

const LIKE_OR_UNLIKE_POST = gql`
	mutation likeOrUnlikePost($postId: ID!, $postType: String!) {
		LikeOrUnlikePost(postId: $postId, postType: $postType) {
			post {
				__typename
				... on Post {
					id
					likesCount
					isLiked
				}
				... on SharedPost {
					id
					likesCount
					isLiked
				}
			}
		}
	}
`;

const ADD_POST = gql`
	mutation addPost($content: String!, $media: [String]) {
		addPost(content: $content, media: $media) {
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
				profileImage {
					url
					type
				}
			}
		}
	}
`;

export { DELETE_POST, LIKE_OR_UNLIKE_POST, ADD_POST };
