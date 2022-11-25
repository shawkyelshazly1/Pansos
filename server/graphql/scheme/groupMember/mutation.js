const { GroupMemberService } = require("../../../services");
const isAuthenticated = require("../../middlewares/auth");

const groupMemberService = new GroupMemberService();

const groupMemberMutations = {
	// joinGroup
	joinGroup: async (_, { groupId, groupType }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await groupMemberService.joinGroup(_id, groupId, groupType);
	},
	// leaveGroup
	leaveGroup: async (_, { groupId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await groupMemberService.leaveGroup(_id, groupId);
	},
	// acceptJoinRequest
	acceptJoinRequest: async (_, { groupId, userId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await groupMemberService.acceptJoinRequest(_id, userId, groupId);
	},
	// declineJoinRequest
	declineJoinRequest: async (_, { groupId, userId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await groupMemberService.declineJoinRequest(_id, userId, groupId);
	},
};

module.exports = groupMemberMutations;
