import React, { Component } from "react";
import "../view-style/Profile.css";

class Profile extends Component {
	render() {
		return (
			<div className="container box-shadow ">
				{/* main page image */}
				<div className="image1 profile-main-page-image" />

				{/* Main page body */}

				{/* Profile page description section */}
				<div
					className="container"
					style={{ textAlign: "center", paddingBottom: "100px" }}>
					<h1 style={{ padding: "100px 0 20px 0" }}>Profile Page</h1>
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

				{/* Profile page services */}
				<div className="container">
					<div className="row" style={{ marginBottom: "20px" }}>
						<div className="col-1" />
						<div className="col-2 image2 profile-service-image" />
						<div className="col-3" style={{ paddingRight: "60px" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<button className="button1">Learn more</button>
						</div>
						<div className="col-2 image3 profile-service-image" />
						<div className="col-3" style={{ paddingRight: "60px" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<button className="button1">Learn more</button>
						</div>
						<div className="col-1" />
					</div>
					<div className="row">
						<div className="col-1" />
						<div className="col-2 image4 profile-service-image" />
						<div className="col-3" style={{ paddingRight: "60px" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<button className="button1">Learn more</button>
						</div>
						<div className="col-2 image5 profile-service-image" />
						<div className="col-3" style={{ paddingRight: "60px" }}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<button className="button1">Learn more</button>
						</div>
						<div className="col-1" />
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
