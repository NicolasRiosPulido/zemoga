import axios from "axios";

import { TRAER_VOTOS, ERROR, CARGANDO } from "../types/votosTypes";

export const traerVotos = () => async dispatch => {
	dispatch({ type: CARGANDO });

	try {
		const respuesta = await axios.get("http://localhost:3002/votos/all");
		dispatch({
			type: TRAER_VOTOS,
			payload: respuesta.data
		});
	} catch (error) {
		dispatch({
			type: ERROR,
			payload: "Error 404 por favor intente mas tarde"
		});
	}
};
