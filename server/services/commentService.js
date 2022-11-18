const { CommentRepository } = require("../database");

// class to interact with user service
class CommentService {
	// constructor to use DB repository interface
	constructor() {
		this.repository = new CommentRepository();
	}
}

module.exports = CommentService;
