import con from "./connection.js";
/********************************************************************************************************************************************************************************************************************************************/
export async function inserirCliente(clienteObj){
	const comando= `
		insert into athenasdb.cliente(nome, nascimento, idade, telefone, treino_id, avaliacao_id, reavaliacao_id, img_cliente, id_login)
		values(?,?,?,?,?,?,?,?,?);
	`

	console.log(clienteObj);
	let resposta= await con.query(comando, [clienteObj.nome, clienteObj.nascimento, clienteObj.idade, clienteObj.telefone, clienteObj.treinoid, clienteObj.avaliacaoid, clienteObj.reavaliacaoid, clienteObj.imagem, clienteObj.idUsuario])
	let registros = resposta[0]
	return registros.insertId
}
/********************************************************************************************************************************************************************************************************************************************/
export async function treinosMarcados(){
    const comando = `
        select 
            id_cliente,
            nome,
			dt_avaliacao	dataAvaliacao,
			dt_reavaliacao	dataReavaliacao,
            telefone,
            img_cliente		perfil,
			bt_concluido    concluido
        from athenasdb.cliente

        inner join athenasdb.treinos_marcados on athenasdb.cliente.treino_id = athenasdb.treinos_marcados.treino_id
		order by dataAvaliacao
    `
	
    let resposta = await con.query(comando);
	let registro = resposta [0]

	for(let i in registro){
		registro[i].perfil=registro[i].perfil?.toString();
	}

    return registro;
}
/********************************************************************************************************************************************************************************************************************************************/
export async function treinosMarcadosId(id) {
    const comando = `
        select 
            id_cliente id,
            nome,
            dt_avaliacao as dataAvaliacao,
			dt_reavaliacao as dataReavaliacao,
            telefone,
            img_cliente as perfil
        from athenasdb.cliente
        inner join athenasdb.treinos_marcados on athenasdb.cliente.treino_id = athenasdb.treinos_marcados.treino_id
        "where id_cliente = ?"
    `;
    
    let resposta = await con.query(comando, [id]);
	let registros = resposta[0][0]

	registros.perfil=registros.perfil?.toString();

    return registros;
}
/********************************************************************************************************************************************************************************************************************************************/
export async function infoCliente(idCliente){
    const comando = `
		select 
			nome,
			nascimento,
			idade,
			telefone,
			dt_avaliacao                    dataAvaliacao,
			dt_reavaliacao                  dataReavaliacao,
			img_cliente                     perfil,
				
			ds_peso    				  		peso,
			ds_imc     				  		imc,
			ds_frequencia_cardiaca    		frequenciaCardiaca,				
			ds_indice_coracao         		indiceCoracao,
			ds_taxa_muscular          		taxaMuscular,
			ds_idade_metabolica       		idadeMetabolica,
			ds_taxa_metabolica_basal  		taxaMetabolicaBasal,
			ds_proteina               		proteina,
			ds_massa_livre_gordura    		massaLivreGordura,
			ds_massa_muscular         		massaMuscular,
			ds_massa_muscular_esqueletica   massaMuscularEsqueletica,
			ds_massa_ossea                  massaOssea,
			ds_gordura_corporal             gorduraCorporal,
			ds_gordura_subcutanea           gorduraSubcutanea,
			ds_gordura_visceral             gorduraVisceral,
			ds_agua_corporal                aguaCorporal,
				
			ds_objetivos_cliente            objetivos,
			exercicios_escolhidos           exercicios
		from athenasdb.cliente

		inner join athenasdb.treinos_marcados on athenasdb.cliente.treino_id = athenasdb.treinos_marcados.treino_id
		inner join athenasdb.avaliacao_fisica on athenasdb.cliente.avaliacao_id = athenasdb.avaliacao_fisica.avaliacao_id
		where id_cliente=?;
	`

	let resposta= await con.query(comando, [idCliente])
	let registros = resposta[0][0]

	registros.perfil=registros.perfil?.toString();

	return registros;
}
/********************************************************************************************************************************************************************************************************************************************/
/*export async function atualizarCliente(id, clienteObj){
	const comando = `
	   update athenasdb.cliente
	   set nome = ?,
		   nascimento= ?,
		   idade = ?,
		   telefone = ?
	   where id_cliente = ?;
	`
	let resposta = await con.query(comando, [clienteObj.nome, clienteObj.nascimento, clienteObj.idade, clienteObj.telefone, id])
	let info = resposta[0];
	return info.affectedRows;
}*/
/********************************************************************************************************************************************************************************************************************************************/
export async function atualizarClienteIdReavaliacao(id, cli){
	const comando = `
	   update athenasdb.cliente
	   set reavaliacao_id = ?
	   where id_cliente = ?;
	`
	let resposta = await con.query(comando, [cli.reavaliacaoid, id])
	let info = resposta[0];
	return info.affectedRows;
}
/********************************************************************************************************************************************************************************************************************************************/
export async function deletarCliente(id){
	const comando = `
		delete from athenasdb.cliente
		where id_cliente = ?
	`

	let resposta = await con.query(comando,[id])
	let info = resposta[0]
	return info.affectedRows;
}