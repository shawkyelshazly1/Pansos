const { PostRepository } = require("../database");

// class to interact with user service
class PostService {
	// constructor to use DB repository interface
	constructor() {
		this.repository = new PostRepository();
	}
}

module.exports = PostService;
