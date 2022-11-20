import { gql } from "@apollo/client";

const DELETE_POST = gql`
	mutation deletePost($postId: ID!) {
		deletePost(postId: $postId) {
			id
		}
	}
`;

const LIKE_OR_UNLIKE_POST = gql`
	mutation likeOrUnlikePost($postId: ID!) {
		LikeOrUnlikePost(postId: $postId) {
			post {
				id
				likesCount
				isLiked
			}
		}
	}
`;

export { DELETE_POST, LIKE_OR_UNLIKE_POST };
