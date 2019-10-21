const express = require("express");
const consultarVotos = require("../services/consultarVotosDB");

function votos(app) {
	const router = express.Router();
	app.use("/votos", router);

	const consultarV = new consultarVotos();

	router.get("/all", async function(req, res, next) {
		try {
			const votosTotales = await consultarV.getVotos();
			res.status(200).json({
				cout: 0,
				data: votosTotales,
				mensaje: "todos los votos"
			});
		} catch (err) {
			next(err);
		}
	});
	router.get("/guardar", async function(req, res, next) {
		req.session.count = req.session.count ? req.session.count + 1 : 1;
		if (req.session.count < 3) {
			res.status(200).json({
				cout: req.session.count,
				data: [],
				mensaje: "error maximo de votos"
			});
		} else {
			res.status(200).json({
				cout: req.session.count,
				data: [],
				mensaje: "error maximo de votos"
			});
		}
	});
}

module.exports = votos;
