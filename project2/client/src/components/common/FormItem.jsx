import React, { Component } from "react";
import "../../view-style/Login.css";

class Form extends Component {
	render() {
		const { name, value, onChange, label, description, style } = this.props;
		return (
			<div className="form-item-group">
				<label htmlFor={name}>{label}</label>
				<input
					className="form-input"
					value={value}
					id={name}
					name={name}
					type="text"
					onChange={onChange}
					// style={style}
				/>
				<small id="emailHelp" className="form-text text-muted">
					{description}
				</small>
			</div>
		);
	}
}

export default Form;
