import mysql from 'mysql2/promise.js'

const con = await mysql.createConnection({
   host: process.env.MYSQL_HOST,
   user: process.env.MYSQL_USER,
   database: process.env.MYSQL_DB
})

console.log('---Conexão Com BD foi um sucesso---');
export default con;