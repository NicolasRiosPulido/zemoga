const express = require("express");

function auth(app) {
	const router = express.Router();
	app.use("/login", router);

	router.get("/", async function(req, res, next) {
		try {
			req.session.count = req.session.count ? req.session.count + 1 : 1;
			res.status(200).json({
				cout: req.session.count,
				data: "hola mundo",
				mensaje: "Score dentix"
			});
		} catch (err) {
			next(err);
		}
	});
}

module.exports = auth;
