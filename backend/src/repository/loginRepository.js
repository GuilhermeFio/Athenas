import con from "./connection.js";

export async function consultarLogin(){

    const comando= `
    
          select
                ds_email      email,
                ds_senha      senha
                
          from db_athenas.tb_login;

                   `
    
    let resposta= await con.query(comando);
    let registros= resposta[0];
    return registros
    
    }