import { gql } from "@apollo/client";

const LOAD_POST_COMMENTS = gql`
	query loadPostComments($postId: ID!) {
		loadPostComments(postId: $postId) {
			id
			content
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

export { LOAD_POST_COMMENTS };
