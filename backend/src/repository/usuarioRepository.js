import con from "./connection.js";

export async function consultarUsuario(){

const comando= `

    select
            nm_nome          nome,
            genero_id        genero,
            dt_nascimento    nascimento,
            UF_id            estado,
            img_perfil       imagem

    from db_athenas.tb_usuario;


`

let resposta= await con.query(comando);
let registros= resposta[0];
return registros

}


export async function atualizarUsuario(id,usuario){

    const comando=  `

    
    update db_athenas.tb_usuario
       set nm_nome= ?,
       genero_id=?,
       dt_nascimento=?,
       UF_id=?,
       img_perfil= ?
   where usuario_id= ?;

           `

 let resposta= await con.query(comando, [usuario.nome, usuario.genero, usuario.nascimento, usuario.UF, id]);
 let registros= resposta[0];
 return registros.affectedRows;
    
    }