import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "rozo1022", // Coloca tu contraseña de MySQL
  database: "rovercrop",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
