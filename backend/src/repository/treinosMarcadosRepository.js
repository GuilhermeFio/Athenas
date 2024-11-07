import con from "./connection.js";
/**************************************************************************************************************************************************************************/
export async function adicionarTreino(treinos){
    const comando=  `
        insert into athenasdb.treinos_marcados (ds_objetivos_cliente, dt_avaliacao, dt_reavaliacao, exercicios_escolhidos, bt_concluido, id_login)
        values(?,?,?,?,?,?)
    `

    let resposta= await con.query(comando, [treinos.objetivos, treinos.dataAvaliacao, treinos.dataReavaliacao,treinos.exercicios, treinos.concluido, treinos.idUsuario]);
    let registros= resposta[0];
    return registros.insertId;  
}
/**************************************************************************************************************************************************************************/
export async function consultarTreino(id, idUsuario){

    const comando= `
        select
            ds_objetivos_cliente         objetivos,
            dt_avaliacao                 dataAvaliacao,
            dt_reavaliacao               dataReavaliacao,
            ds_exercicios_escolhidos     exercicios
        from athenasdb.treinos_marcados
        where treino_id = ?;
    `
    
    let resposta= await con.query(comando, [id, idUsuario]);
    let registros= resposta[0];
    return registros   
}
/**************************************************************************************************************************************************************************/
export async function consultarTreinoPorId(id){
    const comando= `
        select
            ds_objetivos_cliente         objetivos,
            dt_avaliacao                 dataAvaliacao,
            dt_reavaliacao               dataReavaliacao,
            ds_exercicios_escolhidos     exercicios
        from athenasdb.treinos_marcados;
        where treino_id
    `

    let resposta= await con.query(comando, [id]);
    let registros= resposta[0];
    return registros   
}
/**************************************************************************************************************************************************************************/
export async function marcarTreinoConcluido(id, treinos){
    const comando=  `
        update athenasdb.treinos_marcados
        set bt_concluido = ?
        where treino_id= ?;
    `
    
    let resposta= await con.query(comando, [treinos.concluido, id]);
    let registros= resposta[0];
    return registros.affectedRows; 
} 
/**************************************************************************************************************************************************************************/
export async function deletarTreino(id){
    const comando= `
        delete from athenasdb.treinos_marcados
        where treino_id = ?;
    `
        
    let resposta = await con.query(comando, [id])
    let registros= resposta[0]
    return registros.affectedRows;
}