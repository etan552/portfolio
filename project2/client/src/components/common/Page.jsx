import React, { Component } from "react";
import MiniProduct from "./miniProduct";
import _ from "lodash";
import Test from "./../test";

class Page extends Component {
	render() {
		const {
			count,
			pageSize,
			selectedPage,
			products,
			onAddCart,
			onChangeSingleProdId,
		} = this.props;
		const start = (selectedPage - 1) * pageSize;
		const end = count - start < pageSize ? count : selectedPage * pageSize;
		const pageSizeArray = _.range(start, end, 1);

		return (
			<div className="product-item-container">
				{pageSizeArray.map((index) => (
					<MiniProduct
						onAddCart={onAddCart}
						product={products[index]}
						key={products[index]._id}
						onChangeSingleProdId={onChangeSingleProdId}
					/>
				))}
			</div>
		);
	}
}

export default Page;
