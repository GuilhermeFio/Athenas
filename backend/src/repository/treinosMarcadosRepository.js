import con from "./connection.js";



export async function adicionarTreino(treinos){

    const comando=  `

insert into db_athenas.tb_avaliacaoFisica (ds_objetivos_cliente, dt_treino)
values(?,?)
           `

 let resposta= await con.query(comando, [treinos.objetivos, treinos.treino]);

 let registros= resposta[0];
 return registros.insertId;  
    }



export async function consultarTreino(){

    const comando= `
    
        select
                ds_objetivos         objetivos,
                dt_treino            treino,
    
        from db_athenas.tb_treino;
    
    `
    
    let resposta= await con.query(comando);
    let registros= resposta[0];
    return registros   
    }
    

    
    export async function atualizarTreino(id,treinos){
    
        const comando=  `
    
        
        update db_athenas.tb_treino
                        set ds_objetivos= ?,
                            dt_treino=?,
        where treino_id= ?;
    
               `
    
     let resposta= await con.query(comando, [treinos.objetivos, treinos.treino, id]);
     let registros= resposta[0];
     return registros.affectedRows;
        
        } 

        export async function deletarTreino(id){

            const comando= `
            
            delete from tb_treinosMarcados
                   where treino_id = ?;
                  
                  `
            
                  let resposta= await con.query(comando, [id])
                  let registros= resposta[0]
                  return registros.affectedRows;
            
            }

