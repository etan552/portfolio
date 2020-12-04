import React, { Component } from "react";
import shoeImg from "../assets/Superstar_Shoes_White_EG4958_01_standard.jpg";
import "../view-style/ProductPage.css";

class SingleProduct extends Component {
	render() {
		const { name } = this.props.match.params;
		const { products } = this.props;

		if (products.length === 0) return <h1>page not found</h1>;

		const product1 = products.filter((product) => product.name === name);
		const { name: productName, price, description } = product1[0];

		return (
			<div className="single-product-container">
				<span className="single-product-image" />
				<div className="single-product-info">
					<h1 className="name">{productName}</h1>
					<h2 className="price">${price}.00</h2>
					<h4 className="desc-title">Description</h4>
					<p className="desc">{description}</p>
				</div>
			</div>
		);
	}
}

export default SingleProduct;
