const { PostLikeRepository } = require("../database");

// class to interact with user service
class PostLikeService {
	// constructor to use DB repository interface
	constructor() {
		this.repository = new PostLikeRepository();
	}
}

module.exports = PostLikeService;
