import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategoryBar extends Component {
	state = {
		categoryState: {
			allproducts: true,
			addidas: false,
			nike: false,
			gucci: false,
		},
	};

	handleToggle = (name) => {
		const categoryState = {
			allproducts: false,
			addidas: false,
			nike: false,
			gucci: false,
		};
		categoryState[name] = true;
		this.setState({ categoryState });
	};

	render() {
		const { categoryState } = this.state;
		const { onCategoryChange } = this.props;

		return (
			<div className="main-category-container">
				<div>
					<Link
						className="main-category-item"
						to="#"
						onClick={() => {
							onCategoryChange("allproducts");
							this.handleToggle("allproducts");
						}}>
						All Products
					</Link>
				</div>
				<div
					className={
						categoryState.allproducts
							? "category-sub-items-open"
							: "category-sub-items-close"
					}>
					<div className="sub-category-container">
						<Link className="category-sub-item" to="#">
							Shoes
						</Link>
						<Link className="category-sub-item" to="#">
							Clothes
						</Link>
						<Link className="category-sub-item" to="#">
							Bags
						</Link>
					</div>
				</div>
				<Link
					className="main-category-item"
					to="#"
					onClick={() => {
						onCategoryChange("addidas");
						this.handleToggle("addidas");
					}}>
					Addidas
				</Link>
				<div
					className={
						categoryState.addidas
							? "category-sub-items-open"
							: "category-sub-items-close	"
					}>
					<div className="sub-category-container">
						<Link className="category-sub-item" to="#">
							Shoes
						</Link>
						<Link className="category-sub-item" to="#">
							Clothes
						</Link>
						<Link className="category-sub-item" to="#">
							Bags
						</Link>
					</div>
				</div>

				<Link
					className="main-category-item"
					to="#"
					onClick={() => {
						onCategoryChange("nike");
						this.handleToggle("nike");
					}}>
					Nike
				</Link>
				<div
					className={
						categoryState.nike
							? "category-sub-items-open"
							: "category-sub-items-close"
					}>
					<div className="sub-category-container">
						<Link className="category-sub-item" to="#">
							Shoes
						</Link>
						<Link className="category-sub-item" to="#">
							Clothes
						</Link>
						<Link className="category-sub-item" to="#">
							Bags
						</Link>
					</div>
				</div>
				<Link
					className="main-category-item"
					to="#"
					onClick={() => {
						onCategoryChange("gucci");
						this.handleToggle("gucci");
					}}>
					Gucci
				</Link>
				<div
					className={
						categoryState.gucci
							? "category-sub-items-open"
							: "category-sub-items-close"
					}>
					<div className="sub-category-container">
						<Link className="category-sub-item" to="#">
							Shoes
						</Link>
						<Link className="category-sub-item" to="#">
							Clothes
						</Link>
						<Link className="category-sub-item" to="#">
							Bags
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default CategoryBar;
