const bcryptjs = require("bcryptjs"),
	jwt = require("jsonwebtoken");

const hashPassword = async (password) => {
	const hashedPassword = await bcryptjs.hash(password, 10);
	return hashedPassword;
};

const generateAccessToken = async (user) => {
	return jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: "1w",
	});
};

module.exports = { hashPassword, generateAccessToken };
