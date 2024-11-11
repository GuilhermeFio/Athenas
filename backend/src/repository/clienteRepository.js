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
			athenasdb.cliente.treino_id,
    		athenasdb.cliente.avaliacao_id,

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

/*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/

export async function clienteConcluido(idCliente){
    const comando = `
	select
		c.nome,
		c.nascimento,
		c.idade,
		c.telefone,
		c.treino_id,
		c.avaliacao_id,
		tm.dt_avaliacao 					 dataAvaliacao,
		tm.dt_reavaliacao 	 				 dataReavaliacao,
		c.img_cliente AS perfil,

		a.ds_peso 							 peso,
		a.ds_imc 							 imc,
		a.ds_frequencia_cardiaca   			 frequenciaCardiaca,
		a.ds_indice_coracao 	 			 indiceCoracao,
		a.ds_taxa_muscular 					 taxaMuscular,
		a.ds_idade_metabolica 		 		 idadeMetabolica,
		a.ds_taxa_metabolica_basal 	 		 taxaMetabolicaBasal,
		a.ds_proteina 						 proteina,
		a.ds_massa_livre_gordura 			 massaLivreGordura,
		a.ds_massa_muscular 				 massaMuscular,
		a.ds_massa_muscular_esqueletica 	 massaMuscularEsqueletica,
		a.ds_massa_ossea 					 massaOssea,
		a.ds_gordura_corporal 				 gorduraCorporal,
		a.ds_gordura_subcutanea 			 gorduraSubcutanea,
		a.ds_gordura_visceral 				 gorduraVisceral,
		a.ds_agua_corporal 					 aguaCorporal,

		tm.ds_objetivos_cliente 			 objetivos,
		tm.exercicios_escolhidos 			 exercicios,

		r.ds_peso  							 pesoReavaliacao,
		r.ds_imc  							 imcReavaliacao,
		r.ds_frequencia_cardiaca 		     frequenciaCardiacaReavaliacao,
		r.ds_indice_coracao 				 indiceCoracaoReavaliacao,
		r.ds_taxa_muscular 					 taxaMuscularReavaliacao,
		r.ds_idade_metabolica 				 idadeMetabolicaReavaliacao,
		r.ds_taxa_metabolica_basal 			 taxaMetabolicaBasalReavaliacao,
		r.ds_proteina 						 proteinaReavaliacao,
		r.ds_massa_livre_gordura 			 massaLivreGorduraReavaliacao,
		r.ds_massa_muscular 				 massaMuscularReavaliacao,
		r.ds_massa_muscular_esqueletica 	 massaMuscularEsqueleticaReavaliacao,
		r.ds_massa_ossea 					 massaOsseaReavaliacao,
		r.ds_gordura_corporal 				 gorduraCorporalReavaliacao,
		r.ds_gordura_subcutanea 			 gorduraSubcutaneaReavaliacao,
		r.ds_gordura_visceral 				 gorduraVisceralReavaliacao,
		r.ds_agua_corporal 					 aguaCorporalReavaliacao

	from athenasdb.cliente c
	inner join athenasdb.treinos_marcados tm on c.treino_id = tm.treino_id
	inner join athenasdb.avaliacao_fisica a on c.avaliacao_id = a.avaliacao_id
	inner join athenasdb.reavaliacao_fisica r on c.reavaliacao_id = r.reavaliacao_id
	where c.id_cliente = ?;
	`

	let resposta= await con.query(comando, [idCliente])
	let registros = resposta[0][0]

	registros.perfil=registros.perfil?.toString();

	return registros;
}
/********************************************************************************************************************************************************************************************************************************************/
export async function atualizarCliente(id, clienteObj){
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
}
/********************************************************************************************************************************************************************************************************************************************/
export async function atualizarClienteIdReavaliacao(id, reavaliacaoid){
	const comando = `
	   update athenasdb.cliente
	   set reavaliacao_id = ?
	   where id_cliente = ?;
	`
	let resposta = await con.query(comando, [reavaliacaoid.reavaliacao_id, id])
	let info = resposta[0];
	return info.affectedRows;
}

/********************************************************************************************************************************************************************************************************************************************/
export async function atualizarImg(id, clienteObj){
	const comando = `
	   update athenasdb.cliente
	   set img_cliente = ?
	   where id_cliente = ?;
	`
	let resposta = await con.query(comando, [clienteObj.imagem, id])
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