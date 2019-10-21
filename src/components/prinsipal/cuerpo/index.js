import React from "react";
import Publicidad from "./Publicidad";
import Votos from "./Votos";

function Cuerpo() {
	return (
		<React.Fragment>
			<Publicidad />
			<h2 className="tituloCuerpo">Votes</h2>
			<Votos />
		</React.Fragment>
	);
}

export default Cuerpo;
