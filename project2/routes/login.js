const express = require("express");
const router = express.Router();
const { User, validateLogin } = require("../models/user");
const bcryptjs = require("bcryptjs");
const Joi = require("joi");

router.post("/", async (req, res) => {
	const { error } = validateLogin(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Invalid email or password.");

	const validPassword = await bcryptjs.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send("Invalid email or password.");
	// console.log(123);

	const token = user.getAuthToken();
	res
		.header("x-auth-token", token)
		.header("access-control-expose-headers", "x-auth-token")
		.send();
});

function validate(user) {
	const schema = Joi.object({
		email: Joi.string().required(),
		password: Joi.string().required(),
	});
	return schema.validate(user);
}

module.exports = router;
