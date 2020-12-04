import React, { Component } from "react";
import axios from "axios";
import Form from "./common/Form";
import FormArea from "./common/FormArea";
import "../view-style/ContactForm.css";

class ContactForm extends Component {
	state = {
		account: { username: "", subject: "", message: "" },
	};
	handleSubmit = async (e) => {
		e.preventDefault();
		const { data: input } = await axios.post(
			`${process.env.REACT_APP_ENDPOINT}/mail`,
			this.state.account
		);
	};

	handleChange = ({ currentTarget: input }) => {
		const account = { ...this.state.account };
		account[input.name] = input.value;
		this.setState({ account });
	};
	render() {
		return (
			<div className="contact-form-container">
				<h1>Contact us</h1>
				<form onSubmit={this.handleSubmit}>
					<Form
						name="username"
						label="Username"
						description="Please enter your username"
						style={{}}
						value={this.state.account.username}
						onChange={this.handleChange}
					/>
					<Form
						name="subject"
						label="Subject"
						description="Please enter your subject"
						value={this.state.account.subject}
						onChange={this.handleChange}
					/>
					<FormArea
						style={{ height: "200px" }}
						name="message"
						label="Message"
						description="Please enter your message"
						value={this.state.account.message}
						onChange={this.handleChange}
					/>
					<button
						type="submit"
						className="btn btn-primary"
						style={{ float: "right" }}>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default ContactForm;
