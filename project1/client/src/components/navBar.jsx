import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<a style={{ marginLeft: "15%" }} className="navbar-brand" to="#">
					Navbar
				</a>

				<div className="collapse navbar-collapse">
					<ul className="navbar-nav " style={{ marginLeft: "63%" }}>
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="profile">
								Profile
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="contact-us">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default NavBar;
