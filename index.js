const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

const { config } = require("./config");

app.use(cors());
app.use(bodyParser.json());

app.use(
	session({
		resave: false,
		saveUninitialized: false,
		secret: "keyboardZegoma"
	})
);

const autenticacion = require("./routes/autenticacion");
const votos = require("./routes/votos");

autenticacion(app);
votos(app);

app.listen(config.port, function() {
	console.log(`listening on http://localhost:${config.port}!`);
});
