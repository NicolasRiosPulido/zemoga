import React from "react";

import VotosPapa from "./VotosPapa";

class Header extends React.Component {
	render() {
		return (
			<div className="contenedorHeader">
				<div className="contenedorMenu">
					<h3 className="tituloHeader">Rule of Thumb</h3>
					<div className="menu">
						<h3>Past Trials</h3>
						<h3>How it Works</h3>
						<h3>Log In/Sing Up</h3>
						<h3>Q</h3>
					</div>
				</div>
				<VotosPapa />
				<div className="contadorDias">
					<div className="clousing">
						<span />
						<h2>CLOSING IN</h2>
					</div>
					<div className="dias">
						<h2>22 days</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
