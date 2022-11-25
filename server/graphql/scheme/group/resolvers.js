const { GroupMemberService } = require("../../../services");

const groupMemberService = new GroupMemberService();

const groupResolvers = {
	// get group administrators
	async groupMembersCount(parent) {
		let groupMembers = await groupMemberService.loadGroupMembers(parent._id);

		if (groupMembers === []) return 0;
		else return groupMembers.length;
	},

	// check if user is group GroupMember
	async membershipStatus(parent, __, context) {
		const { _id } = context.req.payload;
		return await groupMemberService.getMemberShipStatus(_id, parent._id);
	},

	// load group members
	async members(parent, __, context) {
		return await groupMemberService.loadGroupMembers(parent._id);
	},
};

module.exports = groupResolvers;
