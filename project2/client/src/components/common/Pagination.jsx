import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
class Pagination extends Component {
	render() {
		const { pageSize, count, selectedPage, onChange } = this.props;
		const pages = _.range(1, count / pageSize + 1);

		return (
			<div style={{ margin: "-50px 0 100px 0" }}>
				<nav aria-label="Page navigation example">
					<ul className="pagination" style={{ justifyContent: "center" }}>
						{pages.map((page) => (
							<li className="page-item" key={page}>
								<Link className="page-link" to="#" onClick={() => onChange(page)}>
									{page}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		);
	}
}

export default Pagination;
