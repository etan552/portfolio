import React, { Component } from "react";
import ContactForm from "./ContactForm";
import "../view-style/ContactUs.css";

class ContactUs extends Component {
	render() {
		return (
			<div className="container box-shadow style">
				<div className="row">
					<div className="col-6">
						<ContactForm />
					</div>
					<div className="col-6 vertical">
						<div className="contact-detail">
							<h2>Address</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nx Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut
							</p>
						</div>
						<div className="contact-detail">
							<h2>Contact details</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nx Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut
							</p>
						</div>
						<div className="contact-detail">
							<h2>Social media</h2>
							<ul>
								<li>facebook</li>
								<li>twitter</li>
								<li>instagram</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactUs;
