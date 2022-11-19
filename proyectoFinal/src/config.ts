import mysql from "mysql2";

const PORT=3000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MySQL22",
  /* database: "xa_char_sheet_TONI_Y_LIDIA" */
  database: "proyecto_final"
});

export {PORT, db};