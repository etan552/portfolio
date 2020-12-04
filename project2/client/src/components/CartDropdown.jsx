import React, { Component } from "react";
import CartItem from "./CartItem";

class CartDropdown extends Component {
	calcTotalPrice = (cartArray) => {
		let total = 0;
		cartArray.map((product) => (total += product.price * product.count));
		return total;
	};
	render() {
		const {
			cartArray,
			onCartItemChange,
			onIncrement,
			onDecrement,
			dropDownState,
		} = this.props;

		let className = "initial-cart-state";
		const totalPrice = this.calcTotalPrice(cartArray);

		if (dropDownState === true) className = "cart-menu-open";
		else if (dropDownState === false) className = "cart-menu-close";
		return (
			<div className={className}>
				<div className="cart-item-view">
					{cartArray.map((product, index) => (
						<CartItem
							key={`cart-item-${index}`}
							product={product}
							onCartItemChange={onCartItemChange}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
						/>
					))}
				</div>
				<div className="horizontal-line"></div>
				<div className="cart-item-total-price">
					<h5>{`Total Price: $${totalPrice}`}</h5>
				</div>
			</div>
		);
	}
}

export default CartDropdown;
