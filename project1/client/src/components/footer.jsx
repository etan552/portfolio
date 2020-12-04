import React, { Component } from "react";
import "../view-style/Footer.css";

class Footer extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="footer-header">
					<p>copyright 2020</p>
					<p>tel: 123 456 789</p>
					<p>email: abc@gmail.com</p>
				</div>
				<div className="footer-content">
					<div>
						<h6>ADDRESS</h6>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta rem
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta rem
							natus
						</p>
					</div>
					<div>
						<h6>CONTACT</h6>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta rem
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta rem
							natus
						</p>
					</div>
					<div>
						<h6>SOCIAL MEDIA</h6>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta rem
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta rem
							natus
						</p>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Footer;
