import { gql } from "@apollo/client";

const DELETE_POST = gql`
	mutation deletePost($postId: ID!) {
		deletePost(postId: $postId) {
			id
		}
	}
`;

export { DELETE_POST };
