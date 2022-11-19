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
				profileImage
				profileCover
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

export { LOGIN_USER, REGISTER_USER };
