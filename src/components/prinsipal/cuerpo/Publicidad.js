import React, { useState } from "react";

function Publicidad() {
	const [abierto, setAbierto] = useState(true);
	return (
		<React.Fragment>
			{abierto ? (
				<div className="contenedorPublicidad">
					<div className="publicidadA">
						<h2>Speak out. be heard</h2>
						<h2>Be counted</h2>
					</div>
					<div className="publicidadB">
						<h2>
							Rule of Thumb is a crowd curt of public opinion where anyone and everyone
							can speak out and speak freely. It's ease: You share your opinion, we
							analize and put the data in public report.
						</h2>
						<h2 onClick={() => setAbierto(false)}>X</h2>
					</div>
				</div>
			) : null}
		</React.Fragment>
	);
}

export default Publicidad;
