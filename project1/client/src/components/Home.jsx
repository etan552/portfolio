import React, { Component } from "react";
import "../view-style/Home.css";
import "../App.css";

class Home extends Component {
	render() {
		return (
			<div className="container box-shadow ">
				{/* main page image */}
				<div className="car-main main-page-image" />

				{/* Main page body */}
				{/* Home page section */}
				<div className="container" style={{ textAlign: "center" }}>
					<h1 style={{ padding: "100px 0 20px 0" }}>Home Page</h1>
					<div className="row justify-content-md-center">
						<div className="col-1" />
						<div className="col-10">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
						<div className="col-1" />
					</div>
				</div>

				{/* second section */}
				<div
					className="container"
					style={{ textAlign: "center", marginTop: "100px" }}>
					<div className="row justify-content-md-center">
						<div className="col-5 home-second-section-image car1" />
						<div className="col-5">
							<h2 className="home-second-section-title">Lorem ipsum</h2>
							<p className="home-second-section">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>

					<div className="row justify-content-md-center">
						<div className="col-5 home-second-section-image car2" />
						<div className="col-5">
							<h2 className="home-second-section-title">Lorem ipsum</h2>
							<p className="home-second-section">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>

					<div className="row justify-content-md-center">
						<div className="col-5 home-second-section-image car3" />
						<div className="col-5">
							<h2 className="home-second-section-title">Lorem ipsum</h2>
							<p className="home-second-section">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
