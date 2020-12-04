import React, { Component } from "react";

class CartItem extends Component {
	render() {
		const { product, onCartItemChange, onIncrement, onDecrement } = this.props;
		return (
			<div className="cart-item">
				<p>{product.name}</p>
				{product.count > 0 ? (
					<button className="cart-item-btn" onClick={() => onDecrement(product)}>
						-
					</button>
				) : (
					<button className="cart-item-btn">-</button>
				)}

				<input
					type="text"
					value={product.count}
					onChange={(e) => onCartItemChange(e, product)}
				/>
				<button className="cart-item-btn" onClick={() => onIncrement(product)}>
					+
				</button>
				<p>{`$${product.price * product.count}`}</p>
			</div>
		);
	}
}

export default CartItem;
