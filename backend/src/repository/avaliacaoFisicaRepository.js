import con from "./connection.js";



export async function adicionarAvaliacao(info){

    const comando=  `

insert into db_athenas.tb_avaliacaoFisica (ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal)

values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
           `

 let resposta= await con.query(comando, [info.peso, info.massaLivreGordura, info.imc, info.massaMuscular, info.frequenciaCardiaca, info.massaMuscularEsqueletica, info.indiceCoracao, info.massaOssea, info.taxaMuscular, info.gorduraCorporal, info.idadeMetabolica, info.gorduraSubcutanea, info.taxaMetabolicaBassal, info.gorduraVisceral, info.proteina, info.aguaCorporal]);

 let registros= resposta[0];
 return registros.insertId;
    
    }



export async function atualizarAvaliacao(id,info){

    const comando=  `

    
    update db_athenas.tb_avaliacaoFisica
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
        ds_peso   peso,
        ds_massa_livre_gordura           massa livre de gordura,
        ds_imc                           imc,
        ds_massa_muscular                massa muscular,
        ds_frequencia_cardiaca           frequencia caridaca,
        ds_massa_muscular_esqueletica    massa muscular esqueletica,
        ds_indice_coracao                indice coracao,
        ds_massa_ossea                   massa ossea,
        ds_taxa_muscular                 taxa muscular,
        ds_gordura_corporal              gordura corporal,
        ds_idade_metabolica              gordura metabolica,
        ds_gordura_subcutanea            gordura subcutanea,
        ds_taxa_metabolica_basal         taxa metabolica basal,
        ds_gordura_visceral              gordura visceral,
        ds_proteina                      proteina,
        ds_agua_corporal                 agua corporal

    from db_athenas.tb_avaliacaoFisica; 
                        `
    
     let resposta= await con.query(comando);
     let registros= resposta[0];
     return registros;
        
        }