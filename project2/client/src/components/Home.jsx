import React, { Component } from "react";
import "../view-style/Home.css";
import MiniProduct from "./common/miniProduct";
import { Link } from "react-router-dom";

class Home extends Component {
	render() {
		const {
			onCategoryChange,
			recentProducts,
			onAddCart,
			onChangeSingleProdId,
		} = this.props;
		return (
			<div className="container">
				<div className="test1" />
				<h1 className="header">Category</h1>
				<div className="category-container">
					<Link
						to="/products"
						className="allproduct"
						onClick={() => onCategoryChange("All products")}>
						<div className="category-name top">All products</div>
					</Link>
					<Link
						to="/products"
						className="addidas"
						onClick={() => onCategoryChange("addidas")}>
						<div className="category-name top">Adidas</div>
					</Link>
					<Link
						to="/products"
						className="nike"
						onClick={() => onCategoryChange("nike")}>
						<div className="category-name bottom">Nike</div>
					</Link>
					<Link
						to="/products"
						className="gucci"
						onClick={() => onCategoryChange("gucci")}>
						<div className="category-name bottom">Gucci</div>
					</Link>
				</div>
				<h1 className="header">New Products</h1>
				<div className="product-container">
					{recentProducts.map((product) => (
						<MiniProduct
							key={product._id}
							onAddCart={onAddCart}
							product={product}
							onChangeSingleProdId={onChangeSingleProdId}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default Home;
