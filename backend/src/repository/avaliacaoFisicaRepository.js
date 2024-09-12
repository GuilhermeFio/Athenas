import con from "./connection.js";



export async function adicionarAvaliacao(usuario){

    const comando=  `

insert into db_athenas.tb_avaliacaoFisica (ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal)

values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
           `

 let resposta= await con.query(comando, [usuario.peso, usuario.massaLivreGordura, usuario.imc, usuario.massaMuscular, usuario.frequenciaCardiaca, usuario.massaMuscularEsqueletica, usuario.indiceCoracao, usuario.massaOssea, usuario.taxaMuscular, usuario.gorduraCorporal, usuario.idadeMetabolica, usuario.gorduraSubcutanea, usuario.taxaMetabolicaBassal, usuario.gorduraVisceral, usuario.proteina, usuario.aguaCorporal]);

 let registros= resposta[0];
 return registros.insertId;
    
    }



export async function atualizarAvaliacao(id,usuario){

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

 let resposta= await con.query(comando, [usuario.peso, usuario.massaLivreGordura, usuario.imc, usuario.massaMuscular, usuario.frequenciaCardiaca, usuario.massaMuscularEsqueletica, usuario.indiceCoracao, usuario.massaOssea, usuario.taxaMuscular, usuario.gorduraCorporal, usuario.idadeMetabolica, usuario.gorduraSubcutanea, usuario.taxaMetabolicaBassal, usuario.gorduraVisceral, usuario.proteina, usuario.aguaCorporal, id]);

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