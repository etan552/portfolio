import React, { Component } from "react";
import FormItem from "./common/FormItem";
import axios from "axios";

class RegisterNewProducts extends Component {
	state = {
		newProduct: {
			name: "",
			price: "",
			description: "",
			category: "",
		},
	};

	handleChange = ({ currentTarget: input }) => {
		const newProduct = { ...this.state.newProduct };
		newProduct[input.name] = input.value;
		this.setState({ newProduct });
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post(
				`${process.env.REACT_APP_API_ENDPOINT}/products`,
				this.state.newProduct
			);
		} catch (ex) {
			console.error(ex.response.data);
		}
	};
	render() {
		const { name, price, description, category } = this.state.newProduct;
		return (
			<div className="container form">
				<form className="login-form" onSubmit={this.handleSubmit}>
					<h3 style={{ paddingBottom: "20px" }}>Add new product</h3>
					<FormItem
						name="name"
						label="Product name"
						description="please enter a name for your product."
						onChange={this.handleChange}
						value={name}
					/>
					<FormItem
						name="price"
						label="Price"
						description="please enter a price for your product."
						onChange={this.handleChange}
						value={price}
					/>
					<FormItem
						name="description"
						label="Desciption"
						description="please enter a description for your product."
						onChange={this.handleChange}
						value={description}
					/>
					<FormItem
						name="category"
						label="Category"
						description="please enter a category for your product."
						onChange={this.handleChange}
						value={category}
					/>
					<button type="submit" className="form-item-group">
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default RegisterNewProducts;
