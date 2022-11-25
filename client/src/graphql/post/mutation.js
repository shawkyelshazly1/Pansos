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

const SHARE_POST = gql`
	mutation addSharedPost($post: ID!, $content: String) {
		addSharedPost(post: $post, content: $content) {
			id
			content
			commentsCount
			likesCount
			is_shared
			isLiked
			createdAt
			author {
				id
				firstName
				lastName
				profileImage {
					type
					url
				}
			}
			post {
				id
				content
				media {
					url
					type
				}
				createdAt
				author {
					id
					firstName
					lastName
					profileImage {
						type
						url
					}
				}
			}
		}
	}
`;

const ADD_POST = gql`
	mutation addPost($content: String!, $media: [String], $group: ID) {
		addPost(content: $content, media: $media, group: $group) {
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

export { DELETE_POST, LIKE_OR_UNLIKE_POST, ADD_POST, SHARE_POST };
