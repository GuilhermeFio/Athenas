import { useNavigate } from 'react-router-dom'
import './index.scss'
import Menu from '../../components/abasMenu'
import axios from 'axios'
import { useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

export default function ClienteConcluido(){

    const[token, setToken] = useState(null);

    const navigate = useNavigate();  

    //INFOCLIENTE
    const[nomeCliente, setNomeCliente] = useState('');
    const[dataNascimento, setDataNascimento] = useState('');
    const[idadeCliente, setIdadeCliente] = useState('');
    const[numCliente, setNumCliente] = useState('');
    const[diaAvaliacao, setDiaAvaliacao] = useState('');
    const[diaReavaliacao, setDiaReavaliacao] = useState('');
    const[imagem, setImagem] = useState('')

    //AVALIAÇÃO | 
    const[peso, setPeso] = useState('');
    const[imc, setImc] = useState('');
    const[freqCard, setFreqCard] = useState('');
    const[indcCoracao, setIndcCoracao] = useState('');
    const[taxaMuscular, setTaxaMuscular] = useState('');
    const[iddMetabolica, setIddMetabolica] = useState('');
    const[taxaMetBasal, setTaxaMetBasal] = useState('');
    const[proteina, setProteina] = useState('');
    const[massaLivGord, setMassaLivGord] = useState('');
    const[massaMusc, setMassaMusc] = useState('');
    const[massaMuscEsq, setMassaMuscEsq] = useState('');
    const[massaOssea, setMassaOssea] = useState('');
    const[gordCorp, setGordCorp] = useState('');
    const[gordSub, setGordSub] = useState('');
    const[gordVis, setGordVis] = useState('');
    const[aguaCorp, setAguaCorp] = useState('');

    //REAVALIAÇÃO
    const[peso2, setPeso2] = useState('');
    const[imc2, setImc2] = useState('');
    const[freqCard2, setFreqCard2] = useState('');
    const[indcCoracao2, setIndcCoracao2] = useState('');
    const[taxaMuscular2, setTaxaMuscular2] = useState('');
    const[iddMetabolica2, setIddMetabolica2] = useState('');
    const[taxaMetBasal2, setTaxaMetBasal2] = useState('');
    const[proteina2, setProteina2] = useState('');
    const[massaLivGord2, setMassaLivGord2] = useState('');
    const[massaMusc2, setMassaMusc2] = useState('');
    const[massaMuscEsq2, setMassaMuscEsq2] = useState('');
    const[massaOssea2, setMassaOssea2] = useState('');
    const[gordCorp2, setGordCorp2] = useState('');
    const[gordSub2, setGordSub2] = useState('');
    const[gordVis2, setGordVis2] = useState('');
    const[aguaCorp2, setAguaCorp2] = useState('');

    const[objetivos, setObjetivos] = useState('');
    const[exercicios, setExercicios] = useState('');

    

   

    const {id} = useParams();
    
    useEffect(() =>{
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)
        
        if(usu == 'undefined' || usu == 'null' || !usu) {
            navigate('/loginUsuario')
        }
    }, [])

    useEffect(() => {
        if(token && id){
            consultar();
        
        }
    }, [token, id]);

  

    async function consultar(){
        
            const url = `http://4.172.207.208:5008/cliente/concluido/${id}?x-access-token=${token}`;
            const resp = await axios.get(url);
            const cliente = resp.data;


            setNomeCliente(cliente.nome);
            setDataNascimento(new Date(cliente.nascimento).toLocaleDateString());
            setIdadeCliente(cliente.idade);
            setNumCliente(cliente.telefone);
            setDiaAvaliacao(new Date(cliente.dataAvaliacao).toLocaleDateString());
            setDiaReavaliacao(new Date(cliente.dataReavaliacao).toLocaleDateString());
            setImagem(cliente.perfil)

            setPeso (cliente.peso);
            setImc (cliente.imc);
            setFreqCard (cliente.frequenciaCardiaca);
            setIndcCoracao (cliente.indiceCoracao);
            setTaxaMuscular (cliente.taxaMuscular);
            setIddMetabolica (cliente.idadeMetabolica);
            setTaxaMetBasal (cliente.taxaMetabolicaBasal);
            setProteina (cliente.proteina);
            setMassaLivGord (cliente.massaLivreGordura);
            setMassaMusc (cliente.massaMuscular);
            setMassaMuscEsq (cliente.massaMuscularEsqueletica);
            setMassaOssea (cliente.massaOssea);
            setGordCorp (cliente.gorduraCorporal);
            setGordSub  (cliente.gorduraSubcutanea);
            setGordVis (cliente.gorduraVisceral);
            setAguaCorp (cliente.aguaCorporal);


            setPeso2 (cliente.pesoReavaliacao);
            setImc2 (cliente.imcReavaliacao);
            setFreqCard2 (cliente.frequenciaCardiacaReavaliacao);
            setIndcCoracao2 (cliente.indiceCoracaoReavaliacao);
            setTaxaMuscular2 (cliente.taxaMuscularReavaliacao);
            setIddMetabolica2 (cliente.idadeMetabolicaReavaliacao);
            setTaxaMetBasal2 (cliente.taxaMetabolicaBasalReavaliacao);
            setProteina2 (cliente.proteinaReavaliacao);
            setMassaLivGord2 (cliente.massaLivreGorduraReavaliacao);
            setMassaMusc2 (cliente.massaMuscularReavaliacao);
            setMassaMuscEsq2 (cliente.massaMuscularEsqueleticaReavaliacao);
            setMassaOssea2 (cliente.massaOsseaReavaliacao);
            setGordCorp2 (cliente.gorduraCorporalReavaliacao);
            setGordSub2  (cliente.gorduraSubcutaneaReavaliacao);
            setGordVis2 (cliente.gorduraVisceralReavaliacao);
            setAguaCorp2 (cliente.aguaCorporalReavaliacao);

            setObjetivos (cliente.objetivos);
            setExercicios (cliente.exercicios);
    }


    

    return (
        <div className="pagina-cliente-concluido">

            <Menu/>
            
            <div className='secaomae'>

                <h2 className='titulo'>TREINO DE {nomeCliente.toUpperCase()}</h2> 
            
                <div className='secaoCliente'>
                    <img className= 'avatar' src={imagem}/>

                    <div className="infosCliente">
                        <div className='nome'>
                            <h2>Nome do Cliente:</h2>
                            <input type='text' placeholder='Nome do cliente' value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} readOnly />
                        </div>

                        <div className="datidade">
                            <div className='nascimento'>
                                <h2>Data de Nascimento:</h2>
                                <input type='text' placeholder='Data de nascimento' value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} readOnly/>
                            </div>
                        
                            <div className='idade'>
                                <h2>Idade do Cliente:</h2>
                                <input type='text' placeholder='Idade do cliente' value={idadeCliente} onChange={e => setIdadeCliente(e.target.value)} readOnly/>
                            </div>
                        </div>
                        
                        
                        <div className='telefone'>
                            <h2>Telefone do Cliente:</h2>
                            <input type='text' placeholder='Telefone do cliente' value={numCliente} onChange={e => setNumCliente(e.target.value)} readOnly/>
                        </div>
                        
                        <div className="avas">
                            <div className='dataava'> 
                                <h2>Data da Avaliação:</h2>
                                <input type='text' placeholder='Data da Avaliação' value={diaAvaliacao} onChange={e => setDiaAvaliacao(e.target.value)} readOnly/>
                            </div>

                            <div className='datareava'>
                                <h2>Data da Reavaliação:</h2>
                                <input type='text' placeholder='Data da Reavaliação' value={diaReavaliacao} onChange={e => setDiaReavaliacao(e.target.value)} readOnly/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="detalhesTreino">
                    <div className="objetivosTreino">
                        <h2>OBJETIVOS DO CLIENTE:</h2>
                        <input className='objetivos' type='text' placeholder='Objetivos do Cliente' value={objetivos} onChange={e => setObjetivos(e.target.value)} readOnly/>
                    </div>
                    <div className="exerciciosTreino">
                        <h2>EXERCÍCIOS SELECIONADOS:</h2>
                        <input className='exercicios' type='text' placeholder='Exercícios Selecionados' value={exercicios} onChange={e => setExercicios(e.target.value)} readOnly/>
                    </div>
                </div>

                <div className="tabela">
                    <table>
                        <thead className='nomes'>
                            <tr>
                                <td>ATRIBUTO</td>
                                <td>AVALIAÇÃO</td>
                                <td>REAVALIAÇÃO</td>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>Peso</td>
                                <td>{peso}</td>
                                <td>{peso2}</td>
                            </tr>

                            <tr>
                                <td>IMC</td>
                                <td>{imc} </td>
                                <td>{imc2}</td>
                            </tr>

                            <tr>
                                <td>Frequência Cardíaca</td>
                                <td>{freqCard}</td>
                                <td>{freqCard2}</td>
                            </tr>

                            <tr>
                                <td>Índice de Coração</td>
                                <td >{indcCoracao}</td>
                                <td>{indcCoracao2}</td>
                            </tr>

                            <tr>
                                <td>Taxa Muscular</td>
                                <td>{taxaMuscular}</td> 
                                <td>{taxaMuscular2}</td>
                            </tr>

                            <tr>
                                <td>Idade Metabólica</td>
                                <td>{iddMetabolica}</td>
                                <td>{iddMetabolica2}</td>
                            </tr>

                            <tr>
                                <td>Taxa Metabólica Basal</td>
                                <td>{taxaMetBasal}</td>
                                <td>{taxaMetBasal2}</td>
                            </tr>

                            <tr>
                                <td>Proteína</td>
                                <td>{proteina}</td>
                                <td>{proteina2}</td>
                            </tr>

                            <tr>
                                <td>Massa Livre de Gordura</td>
                                <td>{massaLivGord}</td>
                                <td>{massaLivGord2}</td>
                            </tr>

                            <tr>
                                <td>Massa Muscular</td>
                                <td>{massaMusc}</td>
                                <td>{massaMusc2}</td>
                            </tr>

                            <tr>
                                <td>Massa Muscular Esquelética</td>
                                <td>{massaMuscEsq}</td>
                                <td>{massaMuscEsq2}</td>
                            </tr>

                            <tr>
                                <td>Massa Óssea</td>
                                <td>{massaOssea}</td>
                                <td>{massaOssea2}</td>
                            </tr>

                            <tr>
                                <td>Gordura Corporal</td>
                                <td>{gordCorp}</td>
                                <td>{gordCorp2}</td>
                            </tr>

                            <tr>
                                <td>Gordura Subcutânea</td>
                                <td>{gordSub}</td>
                                <td>{gordSub2}</td>
                            </tr>

                            <tr>
                                <td>Gordura Visceral</td>
                                <td>{gordVis}</td>
                                <td>{gordVis2}</td>
                            </tr>

                            <tr>
                                <td>Água Corporal</td>
                                <td>{aguaCorp}</td>
                                <td>{aguaCorp2}</td>
                            </tr>
                        </tbody>
                    </table>    
                </div>
            </div>      
        </div>
    )
}