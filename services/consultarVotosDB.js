const mariadb = require("mariadb");

const mockVotos = [
	{
		nombre: "kw",
		votosok: 20,
		votosFail: 60
	},
	{
		nombre: "mz",
		votosok: 30,
		votosFail: 10
	},
	{
		nombre: "ck",
		votosok: 5,
		votosFail: 70
	},
	{
		nombre: "my",
		votosok: 4,
		votosFail: 50
	}
];

class vehiculoBD {
	constructor() {
		/* 
        Asumo que tengo una base de datos maria db con los sigientes parametros de conexion
        this.pool = mariadb.createPool({
			host: "",
			user: "",
			database: "",
			password: "",
			connectionLimit: 5
		}); */
	}
	async getVotos() {
		/* 
        este seria el queri para obtener todos los votos
        let conn;
		try {
			conn = await this.pool.getConnection();
			const rows = await conn.query("SELECT * FROM tabla_votos");
			return rows;
		} catch (err) {
			throw err;
		} finally {
			conn.end();
        } */
		return mockVotos;
	}
	async insertarVotos(id_persona, votos) {
		/* 
        este seria el queri para insertar votos
        let conn;
		try {
			conn = await this.pool.getConnection();
			const rows = await conn.query(`UPDATE tabla_votos* ${id_persona} VALUES ${votos}`);
			return rows;
		} catch (err) {
			throw err;
		} finally {
			conn.end();
        } */
		return votos + 1;
	}
}
module.exports = vehiculoBD;
