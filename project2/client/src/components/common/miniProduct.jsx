import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../view-style/miniProduct.css";

class MiniProduct extends Component {
	render() {
		const { onAddCart, product, onChangeSingleProdId } = this.props;
		return (
			<div
				className="card"
				style={{ width: "250px", border: "none", margin: "0 60px 100px 60px" }}>
				<div className="card-image-layout">
					<h5 className="mini-product header">{product.name}</h5>
					<img
						src={require("../../assets/Superstar_Shoes_White_EG4958_01_standard.jpg")}
						className="card-img-top"
					/>
					<h5 className="mini-product price">{`$ ${product.price}.00`}</h5>
				</div>
				<p className="card-description">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. A libero rerum
					consequuntur modi dicta blanditiis placeat.
				</p>
				<div className="btn-container">
					<Link
						to={`/products/${product.name}`}
						// to="#"
						className="mini-product-btn"
						onClick={() => onChangeSingleProdId(product)}>
						More Info
					</Link>
					<Link
						to="#"
						className="mini-product-btn"
						onClick={() => onAddCart(product)}>
						Add To Cart
					</Link>
				</div>
			</div>
		);
	}
}

export default MiniProduct;
