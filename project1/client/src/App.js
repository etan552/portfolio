import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Profile from "./components/Profile";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Footer from "./components/footer";

function App() {
	console.log(process.env.REACT_APP_ENDPOINT);
	return (
		<div>
			<NavBar />
			<Switch>
				<Route path="/profile" component={Profile} />
				<Route path="/contact-us" component={ContactUs} />
				<Route path="/" component={Home} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
