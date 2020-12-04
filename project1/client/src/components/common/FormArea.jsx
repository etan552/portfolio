import React, { Component } from "react";

class FormArea extends Component {
	render() {
		const { name, value, onChange, label, description, style } = this.props;

		return (
			<div className="form-group">
				<label htmlFor={name}>{label}</label>
				<textarea
					style={style}
					className="form-control"
					value={value}
					id={name}
					name={name}
					type="text"
					onChange={onChange}
				/>
				<small id="emailHelp" className="form-text text-muted">
					{description}
				</small>
			</div>
		);
	}
}

export default FormArea;
