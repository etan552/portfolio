import React, { Component } from "react";
import Page from "./common/Page";
import axios from "axios";
import Pagination from "./common/Pagination";
import "../view-style/ProductPage.css";
import ProductPageSearch from "./ProductPageSearch";
import CategoryBar from "./CategoryBar";
import Test from "./test";

class ProductPage extends Component {
	render() {
		const {
			currentProducts,
			itemCount,
			pageSize,
			selectedPage,
			onChangeSearch,
			onSubmitSearch,
			onCategoryChange,
			onPageChange,
			onAddCart,
			location,
			history,
			match,
			onChangeSingleProdId,
		} = this.props;

		return (
			<div className="test">
				<div className="row">
					<div className="col-2">
						<CategoryBar
							location={location}
							history={history}
							match={match}
							onCategoryChange={onCategoryChange}
						/>
					</div>
					<div className="col-10">
						<ProductPageSearch onSubmit={onSubmitSearch} onChange={onChangeSearch} />
						<Page
							products={currentProducts}
							count={itemCount}
							pageSize={pageSize}
							selectedPage={selectedPage}
							onAddCart={onAddCart}
							onChangeSingleProdId={onChangeSingleProdId}
						/>
						<Pagination
							count={itemCount}
							pageSize={pageSize}
							selectedPage={selectedPage}
							onChange={onPageChange}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductPage;
