import React, { Component } from "react";
import FormItem from "./common/FormItem";
import axios from "axios";
import { Link } from "react-router-dom";

class LoginForm extends Component {
	state = {
		account: { email: "", password: "" },
		errors: {},
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_ENDPOINT}/login`,
				this.state.account
			);
			localStorage.setItem("token", res.headers["x-auth-token"]);
			window.location = "/";
		} catch (ex) {}
	};

	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
	};

	render() {
		const { email, password } = this.state.account;
		return (
			<div className="container form">
				<form className="login-form" onSubmit={this.handleSubmit}>
					<h3 style={{ paddingBottom: "20px" }}>Please enter your account</h3>
					<FormItem
						name="email"
						label="Email"
						description="Please enter your email"
						style={{}}
						value={email}
						onChange={this.handleChange}
					/>
					<FormItem
						name="password"
						label="Password"
						description="Please enter your password"
						style={{}}
						value={password}
						onChange={this.handleChange}
					/>

					<button
						style={{ display: "inline" }}
						type="submit"
						className="form-item-group">
						Login
					</button>
					<Link style={{ float: "right" }} to="/register">
						Register new user
					</Link>
				</form>
			</div>
		);
	}
}

export default LoginForm;
