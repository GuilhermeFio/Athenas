import './index.scss'
import Menu from '../../components/abasMenu'
import axios from 'axios'
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export default function AdicionarTreino() {



    const [token, setToken] = useState(null);

    const [imgCliente, setImgCliente] = useState(null);
    const [nomeCliente, setNomeCliente] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [idadeCliente, setIdadeCliente] = useState('');
    const [numCliente, setNumCliente] = useState('');
    const [dataTreino, setDataTreino] = useState('');

    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState('');
    const [freqCard, setFreqCard] = useState('');
    const [indcCoracao, setIndcCoracao] = useState('');
    const [taxaMuscular, setTaxaMuscular] = useState('');
    const [iddMetabolica, setIddMetabolica] = useState('');
    const [taxaMetBasal, setTaxaMetBasal] = useState('');
    const [proteina, setProteina] = useState('');
    const [massaLivGord, setMassaLivGord] = useState('');
    const [massaMusc, setMassaMusc] = useState('');
    const [massaMuscEsq, setMassaMuscEsq] = useState('');
    const [massaOssea, setMassaOssea] = useState('');
    const [gordCorp, setGordCorp] = useState('');
    const [gordSub, setGordSub] = useState('');
    const [gordVis, setGordVis] = useState('');
    const [aguaCorp, setAguaCorp] = useState('');

    const [objetivos, setObjetivos] = useState('');
    const [exercicios, setExercicios] = useState('');

    const navigate = useNavigate()

    const constatoken = {
        headers: {
            'x-access-token': token

        }
    };


    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)

        if (usu == 'undefined' || usu == 'null') {
            navigate('/loginUsuario')
        }
    }, [])



    function alterarImg(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImgCliente(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }


    async function salvar() {
        try {

            const avaliacaoData = {
                "peso": peso,
                "massaLivreGordura": massaLivGord,
                "imc": imc,
                "massaMuscular": massaMusc,
                "frequenciaCardiaca": freqCard,
                "massaMuscularEsqueletica": massaMuscEsq,
                "indiceCoracao": indcCoracao,
                "massaOssea": massaOssea,
                "taxaMuscular": taxaMuscular,
                "gorduraCorporal": gordCorp,
                "idadeMetabolica": iddMetabolica,
                "gorduraSubcutanea": gordSub,
                "taxaMetabolicaBasal": taxaMetBasal,
                "gorduraVisceral": gordVis,
                "proteina": proteina,
                "aguaCorporal": aguaCorp,

            };
            const respAvaliacao = await axios.post(`http://localhost:4000/avaliacao/adicionar`, avaliacaoData, constatoken);
            const avaliacaoId = respAvaliacao.data.novoId;



            const treinoData = {
                "objetivos": objetivos,
                "data": dataTreino,
                "exercicios": exercicios,
                "concluido": false

            };
            const respTreino = await axios.post(`http://localhost:4000/treinos/adicionar`, treinoData, constatoken);
            const treinoId = respTreino.data.novoId;



            const clienteData = {
                "nome": nomeCliente,
                "nascimento": dataNascimento,
                "idade": idadeCliente,
                "telefone": numCliente,
                "treinoid": treinoId,
                "avaliacaoid": avaliacaoId,
                "imagem": imgCliente,
            };
            const respCliente = await axios.post(`http://localhost:4000/cliente/adicionar`, clienteData, constatoken);
            const clienteId = respCliente.data.novoId;

            alert('Dados adicionados com sucesso!  Id:' + clienteId);
            navigate('/horariosTreinos')

        } catch (error) {
            alert('Erro ao adicionar os dados: ' + error.message);
        }
    }





    return (
        <div className="pagina-add-treino">

            <Menu />

            <div className='secaomae'>

                <h2 className='titulo'>ADICIONAR NOVO TREINO</h2>

                <div className='secaoCliente'>

                    <div className='avatar'>
                      
                            <div className='imagem'>
                                <img id='cliente' src={imgCliente} alt="Foto" />
                            </div>
                        

                        <div className="sobreimg">

                            <input type='file' accept='image/*' onChange={alterarImg} />
                            <p>REMOVER IMAGEM <i class='fa-solid fa-trash botao' onClick={() => setImgCliente(null)} /></p>
                        </div>
                    </div>

                    <div className="infosCliente">
                        <div className='nome'>
                            <input type='text' placeholder='Nome do cliente' value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} />
                        </div>

                        <div className='nascimento'>
                            <input type='date' placeholder='Data de nascimento (YYYY-MM-DD)' value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
                        </div>

                        <div className='idade'>
                            <input type='text' placeholder='Idade do cliente' value={idadeCliente} onChange={e => setIdadeCliente(e.target.value)} />
                        </div>

                        <div className='telefone' >
                            <input type='text' placeholder='Número do cliente' value={numCliente} onChange={e => setNumCliente(e.target.value)} />
                        </div>

                        <div className='data'>
                            <input type='datetime-local' placeholder='Data e horário do treino' value={dataTreino} onChange={e => setDataTreino(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className="tabAvaliacao">
                    <h2>AVALIAÇÃO FÍSICA DO CLIENTE</h2>

                    <div className="dadosFisicos">
                        <div className="dados1">
                            <h3>Peso:</h3>
                            <input type='text' placeholder='Peso' value={peso} onChange={e => setPeso(e.target.value)} />

                            <h3>IMC:</h3>
                            <input type='text' placeholder='Índice de Massa Corporal' value={imc} onChange={e => setImc(e.target.value)} />

                            <h3>Frequência Cardíaca:</h3>
                            <input type='text' placeholder='Frequência Cardíaca' value={freqCard} onChange={e => setFreqCard(e.target.value)} />

                            <h3>Índice de Coração:</h3>
                            <input type='text' placeholder='Índice de Coração' value={indcCoracao} onChange={e => setIndcCoracao(e.target.value)} />

                            <h3>Taxa Muscular:</h3>
                            <input type='text' placeholder='Taxa Muscular' value={taxaMuscular} onChange={e => setTaxaMuscular(e.target.value)} />

                            <h3>Idade Metabólica:</h3>
                            <input type='text' placeholder='Idade Metabólica' value={iddMetabolica} onChange={e => setIddMetabolica(e.target.value)} />

                            <h3>TMB:</h3>
                            <input type='text' placeholder='Taxa Metabólica Basal (TMB)' value={taxaMetBasal} onChange={e => setTaxaMetBasal(e.target.value)} />

                            <h3>Proteína:</h3>
                            <input type='text' placeholder='Proteína' value={proteina} onChange={e => setProteina(e.target.value)} />
                        </div>

                        <div className="dados2">
                            <h3>Massa Livre de Gordura:</h3>
                            <input type='text' placeholder='Massa Livre de Gordura' value={massaLivGord} onChange={e => setMassaLivGord(e.target.value)} />

                            <h3>Massa Muscular:</h3>
                            <input type='text' placeholder='Massa Muscular' value={massaMusc} onChange={e => setMassaMusc(e.target.value)} />

                            <h3>Massa Muscular Esquelética:</h3>
                            <input type='text' placeholder='Massa Muscular Esquelética' value={massaMuscEsq} onChange={e => setMassaMuscEsq(e.target.value)} />

                            <h3>Massa Óssea:</h3>
                            <input type='text' placeholder='Massa Óssea' value={massaOssea} onChange={e => setMassaOssea(e.target.value)} />

                            <h3>Gordura Corporal:</h3>
                            <input type='text' placeholder='Gordura Corporal' value={gordCorp} onChange={e => setGordCorp(e.target.value)} />

                            <h3>Gordura Subcutânea:</h3>
                            <input type='text' placeholder='Gordura Subcutânea' value={gordSub} onChange={e => setGordSub(e.target.value)} />

                            <h3>Gordura Visceral:</h3>
                            <input type='text' placeholder='Gordura Visceral' value={gordVis} onChange={e => setGordVis(e.target.value)} />

                            <h3>Água Corporal:</h3>
                            <input type='text' placeholder='Água Corporal' value={aguaCorp} onChange={e => setAguaCorp(e.target.value)} />
                        </div>
                    </div>
                </div>

                <div className="detalhesTreino">
                    <div className="objetivosTreino">
                        <h2>OBJETIVOS DO CLIENTE:</h2>
                        <input type='text' placeholder='Objetivos do Cliente' value={objetivos} onChange={e => setObjetivos(e.target.value)} />
                    </div>
                    <div className="exerciciosTreino">
                        <h2>EXERCÍCIOS SELECIONADOS:</h2>
                        <input type='text' placeholder='Exercícios Selecionados' value={exercicios} onChange={e => setExercicios(e.target.value)} />
                    </div>
                </div>

                <button onClick={salvar} className='botaoAdd'>ADICIONAR TREINO</button>

            </div>
        </div>
    );
}