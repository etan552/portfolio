const express = require("express");
const router = express.Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {

	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send("User already exist.");

	user = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	const salt = await bcrypt.genSalt(5);
	user.password = await bcrypt.hash(user.password, salt);
	await user.save();

	const token = user.getAuthToken();

	res
		.header("x-auth-token", token)
		.header("access-control-expose-headers", "x-auth-token")
		.send(user);
});

module.exports = router;
