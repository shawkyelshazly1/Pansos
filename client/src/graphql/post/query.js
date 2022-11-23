import { gql } from "@apollo/client";

// load user newsfeed
const LOAD_NEWSFEED = gql`
	query getUserNewsfeed {
		getUserNewsfeed {
			__typename
			... on Post {
				id
				content
				commentsCount
				likesCount
				isLiked
				createdAt
				media {
					url
					type
				}
				author {
					id
					firstName
					lastName
					profileImage {
						url
						type
					}
				}
			}
			... on SharedPost {
				id
				post {
					id
					content
					media {
						url
						type
					}
					author {
						id
						firstName
						lastName
						profileImage {
							url
							type
						}
					}
				}
				sharedPostContent: content
				commentsCount
				likesCount
				isLiked
				createdAt
				sharedPostauthor: author {
					id
					firstName
					lastName
					profileImage {
						url
						type
					}
				}
			}
		}
	}
`;

// load single postPostModaMediaViewer
const LOAD_POST = gql`
	query getSinglePost($postId: ID!) {
		getPostById(postId: $postId) {
			id
			content
			commentsCount
			likesCount
			isLiked
			createdAt
			media {
				url
				type
			}
			author {
				id
				firstName
				lastName
				profileImage {
					url
					type
				}
			}
		}
	}
`;

const LOAD_SHARED_POST = gql`
	query getSharedPost($sharedPostId: ID!) {
		getSharedPostById(sharedPostId: $sharedPostId) {
			id
			content
			commentsCount
			likesCount
			isLiked
			is_shared
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
				content
				media {
					type
					url
				}
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
			}
		}
	}
`;

// load user posts
const LOAD_USER_POSTS = gql`
	query getUserPosts($userId: ID!) {
		getUserPosts(userId: $userId) {
			__typename
			... on Post {
				id
				content
				commentsCount
				likesCount
				isLiked
				createdAt
				media {
					url
					type
				}
				author {
					id
					firstName
					lastName
					profileImage {
						url
						type
					}
				}
			}
			... on SharedPost {
				id
				post {
					id
					content
					media {
						url
						type
					}
					author {
						id
						firstName
						lastName
						profileImage {
							url
							type
						}
					}
				}
				sharedPostContent: content
				commentsCount
				likesCount
				isLiked
				createdAt
				sharedPostauthor: author {
					id
					firstName
					lastName
					profileImage {
						url
						type
					}
				}
			}
		}
	}
`;

export { LOAD_NEWSFEED, LOAD_USER_POSTS, LOAD_POST, LOAD_SHARED_POST };
