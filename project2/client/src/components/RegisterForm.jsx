import React, { Component } from "react";
import FormItem from "./common/FormItem";
import axios from "axios";

class RegisterForm extends Component {
	state = {
		account: { name: "", email: "", password: "" },
		errors: {},
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post(
				`${process.env.REACT_APP_API_ENDPOINT}/users`,
				this.state.account
			);
			localStorage.setItem("token", res.headers["x-auth-token"]);
			window.location = "/";
		} catch (ex) {
			console.log(ex.response.data);
		}
	};

	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
	};
	render() {
		const { name, email, password } = this.state.account;
		console.log(16654);
		return (
			<div className="container form">
				<form className="login-form" onSubmit={this.handleSubmit}>
					<h3 style={{ paddingBottom: "20px" }}>Please enter your account</h3>
					<FormItem
						name="name"
						label="Name"
						description="Please enter your Name"
						style={{}}
						value={name}
						onChange={this.handleChange}
					/>
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
					<button type="submit" className="form-item-group">
						Register
					</button>
				</form>
			</div>
		);
	}
}

export default RegisterForm;
