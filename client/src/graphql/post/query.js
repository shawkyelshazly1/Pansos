import { gql } from "@apollo/client";

const LOAD_NEWSFEED = gql`
	query getUserNewsfeed {
		getUserNewsfeed {
			id
			content
			commentsCount
			likesCount
			isLiked
			author {
				id
				firstName
				lastName
				id
				profileImage
			}
		}
	}
`;

export { LOAD_NEWSFEED };
