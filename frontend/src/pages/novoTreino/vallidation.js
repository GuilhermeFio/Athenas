export function validarCliente(clienteData){

    if(!clienteData.nome || !clienteData.nascimento || !clienteData.idade || !clienteData.telefone){
        throw new Error('Houve um erro na inserção dos dados do cliente. Por favor, revise-os e insirá-os novamente.')
    }
}

export function validarTreino(treinoData){

    if (!treinoData.objetivos) {
        throw new Error('É necessário informar os objetivos do cliente.')
    }

    if (!treinoData.dataAvaliacao) {
        throw new Error('É necessário informar o dia do qual será feita a avaliação do cliente.')
    }

    if (!treinoData.dataReavaliacao) {
        throw new Error('É necessário informar o dia do qual será feita a reavaliação do cliente.')
    }

    if (!treinoData.exercicios) {
        throw new Error('É necessário informar os exercícios selecionados para o cliente.')
    }
}

export function validarAvaliacao(avaliacaoData){

    if (!avaliacaoData.peso || !avaliacaoData.massaLivreGordura || !avaliacaoData.imc || !avaliacaoData.massaMuscular || !avaliacaoData.frequenciaCardiaca || !avaliacaoData.massaMuscularEsqueletica || !avaliacaoData.indiceCoracao || !avaliacaoData.massaOssea || !avaliacaoData.taxaMuscular || !avaliacaoData.gorduraCorporal || !avaliacaoData.idadeMetabolica || !avaliacaoData.gorduraSubcutanea || !avaliacaoData.taxaMetabolicaBasal || !avaliacaoData.gorduraVisceral || !avaliacaoData.proteina || !avaliacaoData.aguaCorporal) {              
        throw new Error('Houve um erro na inserção dos dados. Por favor, revise-os e insirá-os novamente.')
     }
}