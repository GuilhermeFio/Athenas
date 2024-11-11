export function validarReavaliacao(reavaliacaoData){

    if (!reavaliacaoData.peso || !reavaliacaoData.massaLivreGordura || !reavaliacaoData.imc || !reavaliacaoData.massaMuscular || !reavaliacaoData.frequenciaCardiaca || !reavaliacaoData.massaMuscularEsqueletica || !reavaliacaoData.indiceCoracao || !reavaliacaoData.massaOssea || !reavaliacaoData.taxaMuscular || !reavaliacaoData.gorduraCorporal || !reavaliacaoData.idadeMetabolica || !reavaliacaoData.gorduraSubcutanea || !reavaliacaoData.taxaMetabolicaBasal || !reavaliacaoData.gorduraVisceral || !reavaliacaoData.proteina || !reavaliacaoData.aguaCorporal) {              
        throw new Error('Houve um erro na inserção dos dados da reavaliação. Por favor, revise-os e insirá-os novamente.')
     }
}