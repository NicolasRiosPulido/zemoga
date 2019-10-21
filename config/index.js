require("dotenv").config();

const config = {
	dev: process.env.NODE_ENV !== "production",
	port: process.env.PORT || 3002,
	autJwtSecret: "lsIkAih3q7yeuaHOwDjUc20ZEgG9dR4o",
	publicApiToken: ""
};

module.exports = { config };
