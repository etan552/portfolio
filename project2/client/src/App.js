import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";
import Navbar from "./components/navBar";
import axios from "axios";
import SingleProduct from "./components/SingleProduct";
import LoginForm from "./components/LoginForm";
import jwtDecode from "jwt-decode";
import RegisterForm from "./components/RegisterForm";
import Footer from "./components/footer";
import RegisterNewProducts from "./components/RegisterNewProducts";
import Test from "./components/test";

class App extends Component {
	state = {
		products: [],
		currentProducts: [],
		itemCount: 0,
		pageSize: 8,
		selectedPage: 1,
		search: "",
		cartArray: [],
		recentProducts: [],
		singleProductId: "",
	};

	async componentDidMount() {
		console.log(process.env.REACT_APP_API_ENDPOINT);
		const { data: products } = await axios.get(
			`${process.env.REACT_APP_API_ENDPOINT}/products`
		);

		// array of recently added products (home page section)
		const recentProducts = products
			.filter((product, index) => index > products.length - 7)
			.reverse();

		this.setState({
			products: products,
			currentProducts: products,
			itemCount: products.length,
			recentProducts,
		});

		// storing jwt in local storage
		try {
			const token = localStorage.getItem("token");
			const user = jwtDecode(token);
			// const isAdmin = jwtDecode(token);
			console.log(user);
			this.setState({ user });
		} catch (error) {}
	}

	handlePageChange = (page) => {
		this.setState({ selectedPage: page });
		// console.log(this.state.selectedPage);
	};

	handleCategoryChange = (category) => {
		const currentProducts = this.state.products.filter(
			(product) => product.category === category
		);
		if (currentProducts.length)
			this.setState({
				currentProducts: currentProducts,
				itemCount: currentProducts.length,
				selectedPage: 1,
			});
		else
			this.setState({
				currentProducts: this.state.products,
				itemCount: this.state.products.length,
				selectedPage: 1,
			});
		// console.log(this.state.currentCategory);
	};

	handleChange = ({ currentTarget: input }) => {
		const search = input.value;
		this.setState({ search });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const selectedPage = 1;
		const result = this.state.products.filter(
			(product) =>
				product.name === this.state.search || product.category === this.state.search
		);
		this.setState({
			currentProducts: result,
			itemCount: result.length,
			selectedPage,
		});
	};

	handleAddCart = (product) => {
		const cartArray = [...this.state.cartArray];
		const index = this.state.cartArray
			.map((prod) => prod._id)
			.indexOf(product._id);

		if (index !== -1) {
			const oldCount = cartArray[index].count;
			cartArray[index] = { ...product };
			cartArray[index].count = oldCount + 1;
		} else {
			cartArray.push({ ...product });
		}

		this.setState({ cartArray });
	};

	handleCartItemCounter = ({ currentTarget: input }, product) => {
		const cartArray = [...this.state.cartArray];
		const index = this.state.cartArray
			.map((prod) => prod._id)
			.indexOf(product._id);

		cartArray[index] = { ...product };
		cartArray[index].count = parseInt(input.value);

		this.setState({ cartArray });
	};

	handleCartItemIncrement = (product) => {
		const cartArray = [...this.state.cartArray];
		const index = this.state.cartArray
			.map((prod) => prod._id)
			.indexOf(product._id);

		const oldCount = cartArray[index].count;
		cartArray[index] = { ...product };
		cartArray[index].count = oldCount + 1;

		this.setState({ cartArray });
	};

	handleCartItemDecrement = (product) => {
		const cartArray = [...this.state.cartArray];
		const index = this.state.cartArray
			.map((prod) => prod._id)
			.indexOf(product._id);

		const oldCount = cartArray[index].count;
		cartArray[index] = { ...product };
		cartArray[index].count = oldCount - 1;

		this.setState({ cartArray });
	};

	handleSingleProdIdChange = (product) => {
		const singleProductId = product._id;
		this.setState({ singleProductId });
		console.log(this.state.singleProductId);
	};

	render() {
		const {
			products,
			currentProducts,
			itemCount,
			pageSize,
			selectedPage,
			cartArray,
			user,
			recentProducts,
		} = this.state;

		return (
			<div>
				<Navbar
					cartArray={cartArray}
					onCartItemChange={this.handleCartItemCounter}
					onIncrement={this.handleCartItemIncrement}
					onDecrement={this.handleCartItemDecrement}
					onCategoryChange={this.handleCategoryChange}
					user={user}
				/>

				<Switch>
					{/* <Route exact path="/test/:name" component={Test} /> */}

					<Route
						exact
						path="/products/:name"
						// path="/test2"
						render={(props) => <SingleProduct products={products} {...props} />}
					/>
					<Route
						// exact
						path="/products"
						render={(props) => (
							<ProductPage
								{...props}
								currentProducts={currentProducts}
								itemCount={itemCount}
								pageSize={pageSize}
								selectedPage={selectedPage}
								onChangeSearch={this.handleChange}
								onSubmitSearch={this.handleSubmit}
								onCategoryChange={this.handleCategoryChange}
								onPageChange={this.handlePageChange}
								onAddCart={this.handleAddCart}
								onChangeSingleProdId={this.handleSingleProdIdChange}
							/>
						)}
					/>

					<Route path="/register" component={RegisterForm} />
					<Route path="/login" component={LoginForm} />
					<Route path="/addProducts" component={RegisterNewProducts} />
					<Route
						path="/"
						render={(props) => (
							<Home
								{...props}
								onCategoryChange={this.handleCategoryChange}
								recentProducts={recentProducts}
								onAddCart={this.handleAddCart}
								onChangeSingleProdId={this.handleSingleProdIdChange}
							/>
						)}
					/>
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default App;
