const { GroupService, GroupMemberService } = require("../../../services");
const isAuthenticated = require("../../middlewares/auth");

const groupService = new GroupService();
const groupMemberService = new GroupMemberService();

const groupQueries = {
	// loadSingleGroup
	loadSingleGroup: async (_, { groupId }, context) => {
		await isAuthenticated(context);
		return await groupService.loadSingleGroup(groupId);
	},

	// loadGroupMembers
	loadGroupMembers: async (_, { groupId }, context) => {
		await isAuthenticated(context);
		return await groupMemberService.loadGroupMembers(groupId);
	},

	// loadJoinRequests
	loadJoinRequests: async (_, { groupId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await groupMemberService.loadPendingJoinRequests(_id, groupId);
	},

	// loadUserGroups
	loadUserGroups: async (_, { userId }, context) => {
		await isAuthenticated(context);
		return await groupMemberService.loadUserGroups(userId);
	},
};

module.exports = groupQueries;
