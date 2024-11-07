import con from "./connection.js";
/*****************************************************************************/
export async function inserirUsuario(pessoa) {
    const comando = `
        insert into athenasdb.login (ds_usuario, ds_senha) 
		values (?,?)
    `
    
    let resposta = await con.query(comando, [pessoa.usuario, pessoa.senha])
    let info = resposta[0];
    return info.insertId;
}
/*****************************************************************************/
/*export async function consultarLogin(){
    const comando= `
        select
            ds_email      email,
            ds_senha      senha
        from athenasdb.login;
    `
    
    let resposta= await con.query(comando);
    let registros= resposta[0];
    return registros
}*/
/*****************************************************************************/
/*export async function inserirUsuario(pessoa) {
    const comando = `
        insert into athenasdb.usuario (nm_usuario, ds_senha) 
        values (?, ?)
    `;
      
    let resposta = await con.query(comando, [pessoa.nome, pessoa.senha])
    let info = resposta[0];
    return info.insertId;
}*/
/**************************************************************************/
/*export async function validarUsuario(pessoa) {
    const comando = `
        select 
            id_usuario id,
            nm_usuario nome
        from athenasdb.usuario

        inner join athenasdb.login on athenasdb.login.id_login = athenasdb.usuario.login_id
        where ds_email = ? and ds_senha = ?
    `
    
    let registros = await con.query(comando, [pessoa.nome, pessoa.senha])
    return registros[0][0];
}*/
/*****************************************************************************/
export async function validarUsuario(pessoa)/*FUNCIONA*/{
    const comando = `
        select 
            id_login id,
            ds_usuario nome
        from athenasdb.login 
        where ds_usuario = ? and ds_senha = ?
    `;
    
    let registros = await con.query(comando, [pessoa.usuario, pessoa.senha])
    return registros[0][0];
}