import con from "./connection.js";
/****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
export async function inserirReavaliacaoFisica(info){
    const comando= `
        insert into athenasdb.reavaliacao_fisica(ds_peso, ds_massa_livre_gordura, ds_imc, ds_massa_muscular, ds_frequencia_cardiaca, ds_massa_muscular_esqueletica, ds_indice_coracao, ds_massa_ossea, ds_taxa_muscular, ds_gordura_corporal, ds_idade_metabolica, ds_gordura_subcutanea, ds_taxa_metabolica_basal, ds_gordura_visceral, ds_proteina, ds_agua_corporal, id_login)
        values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);
    `
    
    let resposta= await con.query(comando, [info.peso, info.massaLivreGordura, info.imc, info.massaMuscular, info.frequenciaCardiaca, info.massaMuscularEsqueletica, info.indiceCoracao, info.massaOssea, info.taxaMuscular, info.gorduraCorporal, info.idadeMetabolica, info.gorduraSubcutanea, info.taxaMetabolicaBasal, info.gorduraVisceral, info.proteina, info.aguaCorporal, info.idUsuario])
    let registros = resposta[0]
    return registros.insertId
}















