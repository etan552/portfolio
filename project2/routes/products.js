const express = require("express");
const route = express.Router();
const { Product, validate } = require("../models/product");

route.get("/", async (req, res) => {
	console.log("get successed");
	// getCourses().then((result) => res.send(result));
	const result = await Product.find();
	res.send(result);
});
route.get("/test", (req, res) => {
	console.log("test successful");
	res.send("test successful");
});

route.post("/", async (req, res) => {
	console.log("products");
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);
	const newProduct = new Product({
		name: req.body.name,
		price: req.body.price,
		description: req.body.description,
		category: req.body.category,
	});

	await newProduct.save();

	console.log("new product added...");
	res.send("new product added");
});

module.exports = route;
