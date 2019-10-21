import { TRAER_VOTOS, ERROR, CARGANDO } from "../types/votosTypes";

const INITIAL_STATE = {
	votos: [],
	cargando: false,
	error: ""
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case TRAER_VOTOS:
			return {
				...state,
				votos: action.payload,
				cargando: false,
				error: ""
			};
		case CARGANDO:
			return {
				...state,
				cargando: true
			};
		case ERROR:
			return {
				...state,
				cargando: false,
				error: action.payload
			};
		default:
			return state;
	}
};
