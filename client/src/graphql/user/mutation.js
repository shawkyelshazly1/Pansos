import { gql } from "@apollo/client";

//loginUser
const LOGIN_USER = gql`
	mutation loginUser($email: String!, $password: String!) {
		loginUser(email: $email, password: $password) {
			accessToken
			user {
				id
				firstName
				lastName
				email
				profileImage {
					url
					type
				}
				profileCover {
					url
					type
				}
				followersCount
				followingsCount
			}
		}
	}
`;

// register user mutation
const REGISTER_USER = gql`
	mutation registerUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		createUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		) {
			id
			firstName
			lastName
		}
	}
`;

const UPDATE_PROFILE_INFO = gql`
	mutation updateProfileInfo(
		$firstName: String!
		$lastName: String!
		$profileImage: String
		$profileCover: String
	) {
		updateProfileInfo(
			firstName: $firstName
			lastName: $lastName
			profileImage: $profileImage
			profileCover: $profileCover
		) {
			id
			firstName
			lastName
			profileCover {
				url
				type
			}
			profileImage {
				url
				type
			}
			followersCount
			followingsCount
		}
	}
`;

export { LOGIN_USER, REGISTER_USER, UPDATE_PROFILE_INFO };
