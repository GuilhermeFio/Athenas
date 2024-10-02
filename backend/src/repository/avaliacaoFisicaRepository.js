import con from "./connection.js";



export async function adicionarAvaliacao(info){

    const comando=  `

insert into db_athenas.tb_avaliacao_fisica (ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal)

values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
           `

 let resposta= await con.query(comando, [info.peso, info.massaLivreGordura, info.imc, info.massaMuscular, info.frequenciaCardiaca, info.massaMuscularEsqueletica, info.indiceCoracao, info.massaOssea, info.taxaMuscular, info.gorduraCorporal, info.idadeMetabolica, info.gorduraSubcutanea, info.taxaMetabolicaBassal, info.gorduraVisceral, info.proteina, info.aguaCorporal]);

 let registros= resposta[0];
 return registros.insertId;
    
    }





export async function atualizarAvaliacao(id,info){

    const comando=  `

    
    update db_athenas.tb_avaliacao_fisica
       set  ds_peso= ?,
            ds_massa_livre_gordura=?,
            ds_imc=?,
            ds_massa_muscular=?,
            ds_frequencia_cardiaca=?,
            ds_massa_muscular_esqueletica=?,
            ds_indice_coracao=?,
            ds_massa_ossea=?,
            ds_taxa_muscular=?,
            ds_gordura_corporal=?,
            ds_idade_metabolica=?,
            ds_gordura_subcutanea=?,
            ds_taxa_metabolica_basal=?,
            ds_gordura_visceral=?,
            ds_proteina=?,
            ds_agua_corporal=?
   where avaliacao_id= ?;

           `

 let resposta= await con.query(comando, [info.peso, info.massaLivreGordura, info.imc, info.massaMuscular, info.frequenciaCardiaca, info.massaMuscularEsqueletica, info.indiceCoracao, info.massaOssea, info.taxaMuscular, info.gorduraCorporal, info.idadeMetabolica, info.gorduraSubcutanea, info.taxaMetabolicaBassal, info.gorduraVisceral, info.proteina, info.aguaCorporal, id]);

 let registros= resposta[0];
 return registros.affectedRows;
 
    }


    export async function consultarAvaliacao(){

        const comando=  `
    
    select 
        ds_peso                          peso,
        ds_massa_livre_gordura           massaLivreGordura,
        ds_imc                           imc,
        ds_massa_muscular                massaMuscular,
        ds_frequencia_cardiaca           frequenciaCaridaca,
        ds_massa_muscular_esqueletica    massaMuscularEsqueletica,
        ds_indice_coracao                indiceCoracao,
        ds_massa_ossea                   massaOssea,
        ds_taxa_muscular                 taxaMuscular,
        ds_gordura_corporal              gorduraCorporal,
        ds_idade_metabolica              gorduraMetabolica,
        ds_gordura_subcutanea            gorduraSubcutanea,
        ds_taxa_metabolica_basal         taxaMetabolicaBasal,
        ds_gordura_visceral              gorduraVisceral,
        ds_proteina                      proteina,
        ds_agua_corporal                 aguaCorporal

    from db_athenas.tb_avaliacao_fisica; 
                        `
    
     let resposta= await con.query(comando);
     let registros= resposta[0];
     return registros;
        
        }