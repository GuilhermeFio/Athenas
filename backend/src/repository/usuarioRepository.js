import con from "./connection.js";

export async function consultarUsuario(){

const comando= `

    select
            nm_nome          nome,
            nm_genero        genero,
            dt_nascimento    nascimento,
            nm_estado        estado

    from db_athenas.tb_usuario
    inner join tb_genero
    on tb_usuario.genero_id = tb_genero.genero_id

    inner join tb_estado
    on tb_usuario.UF_id = tb_estado.UF_id

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
       UF_id=?
   where usuario_id= ?;

           `

 let resposta= await con.query(comando, [usuario.nome, usuario.genero, usuario.nascimento, usuario.UF, id]);
 let registros= resposta[0];
 return registros.affectedRows; 
    }


    export async function alterarimagem(id, caminho){

        const comando= `
        
        update tb_usuario
           set img_perfil = ?
        where usuario_id = ?;
        
        `
        let resposta= await con.query(comando, [caminho, id] )
        
        let registros= resposta [0]
        let linhasAfetadas= registros.affectedRows
        return linhasAfetadas;
        
        }