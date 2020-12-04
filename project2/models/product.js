const Joi = require("joi");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
	name: { type: String, required: true },
	price: { type: Number, required: true },
	description: { type: String, required: true },
	category: { type: String, required: true },
	count: { type: Number, default: 1 },
	timeStamp: { type: Number, default: Date.now },
});
const Product = mongoose.model("product", productSchema);

function validateProduct(product) {
	const schema = Joi.object({
		name: Joi.string().required(),
		price: Joi.number().required(),
		description: Joi.string().required(),
		category: Joi.string().required(),
	});
	return schema.validate(product);
}

exports.Product = Product;
exports.validate = validateProduct;
