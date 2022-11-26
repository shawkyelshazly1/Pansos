import { gql } from "@apollo/client";

const LOAD_STORIES_NEWSFEED = gql`
	query loadUserNewsfeedStories {
		loadUserNewsfeedStories {
			id
			isViewed
			media {
				url
			}
			createdAt
			user {
				id
				lastName
				firstName
				profileImage {
					url
				}
			}
		}
	}
`;

export { LOAD_STORIES_NEWSFEED };
