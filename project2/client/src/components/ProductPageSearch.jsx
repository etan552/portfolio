import React, { Component } from "react";
import "../view-style/ProductPage.css";

class ProductPageSearch extends Component {
	render() {
		const { onSubmit, onChange } = this.props;
		return (
			<div className="search">
				<form onSubmit={onSubmit}>
					<input className="search-bar" onChange={onChange} />
					<button className="search-btn" type="submit">
						Search
					</button>
				</form>
			</div>
		);
	}
}

export default ProductPageSearch;
