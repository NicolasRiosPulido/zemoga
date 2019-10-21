import React from "react";
import { connect } from "react-redux";

import VotosKW from "./VotosKW";

import * as votosActions from "../../../actions/votosActions";

const { traerVotos } = votosActions;

class Votos extends React.Component {
	componentDidMount() {
		this.props.traerVotos();
	}
	render() {
		return (
			<div className="gridVotos">
				<VotosKW />
				<VotosKW />
				<VotosKW />
				<VotosKW />
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
)(Votos);
