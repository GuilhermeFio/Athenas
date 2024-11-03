import con from "./connection.js";

export async function inserirCliente(clienteObj){

const comando= `

insert into Cliente(nome, nascimento, idade, telefone, treino_id, avaliacao_id, reavaliacao_id, img_cliente, id_login)
values(?,?,?,?,?,?,?,?,?);
`
console.log(clienteObj);
let resposta= await con.query(comando, [clienteObj.nome, clienteObj.nascimento, clienteObj.idade, clienteObj.telefone, clienteObj.treinoid, clienteObj.avaliacaoid, clienteObj.reavaliacaoid, clienteObj.imagem, clienteObj.idUsuario])
let registros = resposta[0]
return registros.insertId
}




export async function treinosMarcados() {
    const comando = `
        select 
            id_cliente,
            nome,
            dt_treino  dataTreino,
            telefone,
            img_cliente  perfil
        from Cliente
        inner join Treinos_marcados
            on Cliente.treino_id = Treinos_marcados.treino_id
			order by dataTreino
    `;
	
    
    let resposta = await con.query(comando);
	let registro = resposta [0]

    return registro;
}

/*export async function treinosMarcadosId(idCliente) {
    const comando = `
        select 
            id_cliente,
            nome,
            dt_treino as dataTreino,
            telefone,
            img_cliente as perfil
        from Cliente
        inner join Treinos_marcados
            on Cliente.treino_id = Treinos_marcados.treino_id
        "where id_cliente = ?"
    `;
    const params = idCliente ? [idCliente] : [];
    const [registros] = await con.query(comando, params);

    const registrosComImagem = registros.map(registro => ({
        ...registro,
        perfil: registro.perfil ? `data:image/jpeg;base64,${Buffer.from(registro.perfil).toString('base64')}` : null
    }));

    return registrosComImagem;
}
*/




export async function infoCliente(idCliente){
    
    const comando = `

    select 
			nome,
			nascimento,
			idade,
			telefone,
			dt_treino                       dataTreino,
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
			
			ds_objetivos_cliente            Objetivos,
			exercicios_escolhidos           exercicios

	from Cliente

	inner join Treinos_marcados
	on Cliente.treino_id = Treinos_marcados.treino_id

	inner join Avaliacao_fisica
	on Cliente.avaliacao_id = Avaliacao_fisica.avaliacao_id
	
	where id_cliente=?;
`

let resposta= await con.query(comando, [idCliente])
let registros = resposta[0]
return registros;
}

export async function atualizarCliente(id, clienteObj){

	const comando = `

	   update Cliente
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