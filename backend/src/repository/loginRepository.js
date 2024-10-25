import con from "./connection.js";


export async function inserirUsuario(pessoa) {
    const comando = `
        insert into Login (ds_usuario, ds_senha) 
					        values (?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.nome, pessoa.senha])
    let info = resposta[0];
    
    return info.insertId;
}

/*export async function consultarLogin(){

    const comando= `
    
          select
                ds_email      email,
                ds_senha      senha
                
          from AthenasDB.Login;

                   `
    
    let resposta= await con.query(comando);
    let registros= resposta[0];
    return registros
    
    }
*/


   /* export async function inserirUsuario(pessoa) {
      const comando = `
          insert into tb_usuario (nm_usuario, ds_senha) 
                                        values (?, ?)
      `;
      
      let resposta = await con.query(comando, [pessoa.nome, pessoa.senha])
      let info = resposta[0];
      
      return info.insertId;
  }*/
  
  /*export async function validarUsuario(pessoa) {
      const comando = `
          select 
              id_usuario id,
              nm_usuario nome
          from AthenasDB.Usuario 
          inner join AthenasDB.Login
          on Login.id_login = Usuario.login_id
          where 
              ds_email = ?
              and ds_senha = ?
      `;
      
      let registros = await con.query(comando, [pessoa.nome, pessoa.senha])
      return registros[0][0];
  }  */
  
  
  export async function validarUsuario(pessoa) {
    const comando = `
        select 
            id_login id,
            ds_usuario nome
        from Login 
        where 
            ds_usuario = ?
            and ds_senha = ?
    `;
    
    let registros = await con.query(comando, [pessoa.nome, pessoa.senha])
    return registros[0][0];
}