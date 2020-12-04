const jwt = require("jsonwebtoken");
const config = require("../config");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	isAdmin: { type: Boolean, default: false },
});

userSchema.methods.getAuthToken = function () {
	const token = jwt.sign(
		{
			_id: this._id,
			email: this.email,
			name: this.name,
			isAdmin: this.isAdmin,
		},
		config.serverSecret
	);
	return token;
};

const User = new mongoose.model("user", userSchema);

function validateUser(user) {
	const schema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().required(),
		password: Joi.string().required(),
	});
	return schema.validate(user);
}

function validateLogin(user) {
	const schema = Joi.object({
		email: Joi.string().required(),
		password: Joi.string().required(),
	});
	return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
exports.validateLogin = validateLogin;
