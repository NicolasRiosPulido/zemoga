import React from "react";
import "../../css/prinsipal.css";

import Header from "./header";
import Layout from "./Layout";
import Cuerpo from "./cuerpo";

function Prinsipal() {
	return (
		<React.Fragment>
			<Header />
			<Layout>
				<Cuerpo />
			</Layout>
		</React.Fragment>
	);
}

export default Prinsipal;
