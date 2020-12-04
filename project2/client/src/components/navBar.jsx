import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";
import "../view-style/Navbar.css";
class Navbar extends Component {
	state = {
		dropDownState: null,
	};
	handleChange = () => {
		let dropDownState = true;
		if (this.state.dropDownState === null || this.state.dropDownState === false) {
			dropDownState = true;
		} else {
			dropDownState = false;
		}
		this.setState({ dropDownState });
		console.log(this.state.dropDownState);
	};

	handleLogout = () => {
		localStorage.clear();
		window.location = "/";
	};

	render() {
		const {
			cartArray,
			onCartItemChange,
			onIncrement,
			onDecrement,
			onCategoryChange,
			user,
		} = this.props;

		const { dropDownState } = this.state;
		return (
			<div className="navbar-container">
				<Link className="navbar-brand" to="/" style={{ marginLeft: "12%" }}>
					Navbar
				</Link>
				<div>
					<Link className="navbar-item" to="/">
						Home
					</Link>

					<Link
						className="navbar-item"
						to="/products"
						onClick={() => onCategoryChange("allproducts")}>
						Products
					</Link>
					<div className="cart">
						<p
							className="navbar-item"
							style={{ margin: "0", cursor: "pointer" }}
							onClick={() => this.handleChange()}>
							Cart
						</p>
						<CartDropdown
							cartArray={cartArray}
							onCartItemChange={onCartItemChange}
							onIncrement={onIncrement}
							onDecrement={onDecrement}
							dropDownState={dropDownState}
						/>
					</div>
					{!user ? (
						<Link className="navbar-item" to="/login">
							Login
						</Link>
					) : (
						<div>
							<Link className="navbar-item" to="#">
								{user.name}
							</Link>
							<Link className="navbar-item" to="#" onClick={this.handleLogout}>
								Logout
							</Link>
							{user.isAdmin ? (
								<Link className="navbar-item" to="/addProducts">
									Add products
								</Link>
							) : (
								""
							)}
						</div>
					)}
				</div>
			</div>
		);
	}
}

export default Navbar;
