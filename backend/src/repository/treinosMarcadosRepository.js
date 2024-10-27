import con from "./connection.js";


export async function adicionarTreino(treinos){

    const comando=  `

insert into AthenasDB.Treinos_marcados (ds_objetivos_cliente, dt_treino, ds_exercicios_escolhidos, bt_concluido)
values(?,?,?,?)
           `

 let resposta= await con.query(comando, [treinos.objetivos, treinos.data, treinos.exercicios, treinos.concluido]);

 let registros= resposta[0];
 return registros.insertId;  
    }  //sem autorização para adicionar//


export async function consultarTreino(idUsuario){

    const comando= `
    
        select
                ds_objetivos_cliente         objetivos,
                dt_treino                    data,
                ds_exercicios_escolhidos     exercicios
    
        from AthenasDB.Treinos_marcados
        where id_usuario=?;
    
    `
    
    let resposta= await con.query(comando, [idUsuario]);
    let registros= resposta[0];
    return registros   
    }
    
    export async function consultarTreinoPorId(id){

        const comando= `
        
            select
                    ds_objetivos_cliente         objetivos,
                    dt_treino                    data,
                    ds_exercicios_escolhidos     exercicios
        
            from AthenasDB.Treinos_marcados;
            where treino_id
        
        `
        
        let resposta= await con.query(comando, [id]);
        let registros= resposta[0];
        return registros   
        }
    
    export async function atualizarTreino(id,treinos){
    
        const comando=  `
    
        
        update AthenasDB.Treinos_marcados
                        set ds_objetivos_cliente= ?,
                            dt_treino=?,
                            ds_exercicios_escolhidos=?
                            bt_concluido =?
        where treino_id= ?;
    
               `
    
     let resposta= await con.query(comando, [treinos.objetivos, treinos.data, treinos.exercicios, id]);
     let registros= resposta[0];
     return registros.affectedRows; 
        } 


        export async function deletarTreino(id){

            const comando= `
            
            delete from Treinos_marcados
                   where treino_id = ?;
                  
                  `
            
                  let resposta= await con.query(comando, [id])
                  let registros= resposta[0]
                  return registros.affectedRows;
            
            }

