import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
	mutation addComment($postId: ID!, $content: String!, $postType: String!) {
		addComment(postId: $postId, content: $content, postType: $postType) {
			id
			content
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
			post {
				__typename
				... on Post {
					id
					commentsCount
				}
				... on SharedPost {
					id
					commentsCount
				}
			}
		}
	}
`;

const DELETE_COMMENT = gql`
	mutation deleteComment($commentId: ID!) {
		deleteComment(commentId: $commentId) {
			id
			post {
				__typename
				... on Post {
					id
					commentsCount
				}
				... on SharedPost {
					id
					commentsCount
				}
			}
		}
	}
`;

export { ADD_COMMENT, DELETE_COMMENT };
