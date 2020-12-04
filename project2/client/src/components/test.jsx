import React, { Component } from "react";

class Test extends Component {
	// async componentDidMount() {
	// 	const x = this.props.match.params.name;
	// 	console.log(x);
	// }
	render() {
		return <img src={require("../assets/img02.jpg")} />;
	}
}

export default Test;
