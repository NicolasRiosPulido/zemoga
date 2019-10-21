import React from "react";
import { connect } from "react-redux";

import * as votosActions from "../../../actions/votosActions";

const { traerVotos } = votosActions;

class VotosKW extends React.Component {
	render() {
		if (this.props.votosReducer.cargando) {
			return <h1>cargando</h1>;
		}
		return (
			<div className="kwConteiner">
				<div className="contenedorTextosP">
					<h2>
						<span>V</span>Kanye West
					</h2>
					<h2>1 month ago in Entertainment</h2>
					<h2>
						Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu
						velit libero
					</h2>
				</div>
				<div className="barras">
					<div className="spacioOk" style={{ width: "40%" }}>
						a favor
					</div>
					<div className="spacioFail" style={{ width: "60%" }}>
						en contra
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ votosReducer }) => {
	return { votosReducer };
};
const mapDispatchToProps = {
	traerVotos
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(VotosKW);
