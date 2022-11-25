const { GroupService, GroupMemberService } = require("../../../services");
const { isAuthenticated } = require("../../middlewares/auth");

const groupService = new GroupService();
const groupMemberService = new GroupMemberService();

const groupMutations = {
	// add Group
	addGroup: async (_, { groupType, name }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		return await groupService.addNewGroup(_id, { groupType, name });
	},

	// updateGroup
	updateGroup: async (_, { groupId, name, groupType }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		await groupService.UpdateGroup(_id, groupId, { name, groupType });
	},

	//addOrRemoveGroupAdministrator
	addOrRemoveGroupAdministrator: async (_, { groupId, userId }, context) => {
		await isAuthenticated(context);
		const { _id } = context.req.payload;
		await groupService.AddOrRemoveGroupAdministrators(_id, groupId, userId);
	},
};

module.exports = groupMutations;
