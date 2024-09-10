import mysql from 'mysql2/promise.js'

const con = await mysql.createConnection({

   /*info do bd*/

})

console.log('---Conexão Com BD foi um sucesso---');
export default con;