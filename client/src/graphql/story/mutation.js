import { gql } from "@apollo/client";

const ADD_STORY = gql`
	mutation addStory($media: String!) {
		addNewStory(media: $media) {
			id
			createdAt
			media {
				url
			}
			user {
				id
				firstName
				lastName
				profileImage {
					url
				}
			}
			storyViewersCount
			storyViewers {
				id
				user {
					id
					firstName
					lastName
					profileImage {
						url
					}
				}
			}
		}
	}
`;

export { ADD_STORY };
