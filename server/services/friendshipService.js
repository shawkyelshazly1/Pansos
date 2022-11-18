const { FriendshipRepository } = require("../database");

// class to interact with user service
class FriendshipService {
	// constructor to use DB repository interface
	constructor() {
		this.repository = new FriendshipRepository();
	}
}

module.exports = FriendshipService;
