import { gql } from "@apollo/client";

const ADD_COMMENT = gql`
	mutation addComment($postId: ID!, $content: String!) {
		addComment(postId: $postId, content: $content) {
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
				id
				commentsCount
			}
		}
	}
`;

const DELETE_COMMENT = gql`
	mutation deleteComment($commentId: ID!) {
		deleteComment(commentId: $commentId) {
			id
			post {
				id
				commentsCount
			}
		}
	}
`;

export { ADD_COMMENT, DELETE_COMMENT };
