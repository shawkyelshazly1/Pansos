import { gql } from "@apollo/client";

const LOAD_USER_PHOTOS = gql`
	query loadUserPhotos($userId: ID!) {
		getUserPhotos(userId: $userId) {
			id
			url
		}
	}
`;

export { LOAD_USER_PHOTOS };
