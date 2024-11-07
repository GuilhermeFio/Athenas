import { useNavigate } from 'react-router-dom'
import './index.scss'
import Menu from '../../components/abasMenu'
import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export default function InfoClientes (){

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

    const constatoken = {
        headers: {
          'x-access-token': token
        }
      };

    const {id} = useParams();
    
    useEffect(() =>{
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)
        
        if(usu == 'undefined' || usu == 'null') {
            navigate('/loginUsuario')
        }
    }, [])

    useEffect(() => {
        if(token && id){
            consultar();
        
        }
    }, [token, id]);

    async function consultar(){
        
            const url = `http://localhost:4000/cliente/${id}`;
            const resp = await axios.get(url, constatoken);
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

            setObjetivos (cliente.objetivos);
            setExercicios (cliente.exercicios);
    }

    async function excluir(){
        await axios.delete(`http://localhost:4000/cliente/deletar/${id}`, constatoken);
        alert(`Treino de ${nomeCliente} excluido com sucesso!`);
        navigate('/horariosTreinos')
    }

    async function addRev(){
        try {
            const reavaliacaoData = {
                "peso": peso2,
                "massaLivreGordura": massaLivGord2,
                "imc": imc2,
                "massaMuscular": massaMusc2,
                "frequenciaCardiaca": freqCard2,
                "massaMuscularEsqueletica": massaMuscEsq2,
                "indiceCoracao": indcCoracao2,
                "massaOssea": massaOssea2,
                "taxaMuscular": taxaMuscular2,
                "gorduraCorporal": gordCorp2,
                "idadeMetabolica": iddMetabolica2,
                "gorduraSubcutanea": gordSub2,
                "taxaMetabolicaBasal": taxaMetBasal2,
                "gorduraVisceral": gordVis2,
                "proteina": proteina2,
                "aguaCorporal": aguaCorp2,

            };

            const respReavaliacao = await axios.post(`http://localhost:4000/reavaliacao/adicionar`, reavaliacaoData, constatoken);
            const reavaliacaoId = respReavaliacao.data.novoId;
           
            const clienteData = {
                "reavaliacao_id": reavaliacaoId,
            };

            await axios.put(`http://localhost:4000/cliente/atualizaridrev/${id}`, clienteData, constatoken);
           
            const treinoData = {
                "concluido": true,
            };
            await axios.put(`http://localhost:4000/treinos/atualizar/${id}`, treinoData, constatoken);

            alert('Reavaliação adicionada com sucesso!  IdReavaliacao:' + reavaliacaoId);
            navigate('/horariosTreinos')

        } catch (error) {
            alert('Erro ao adicionar os dados: ' + error.message); 
        }
    }

    return (
        <div className="pagina-treino-cliente">
  
          <Menu/>
  
          <div className='secaomae'>
  
            <h2>TREINO DE {nomeCliente.toUpperCase()}</h2> 
         
            <div className='secaoCliente'>
                <img className= 'avatar' src={imagem}/>

                <div className="infosCliente">
                    <div className='nome'>
                        <h2>Nome do Cliente:</h2>
                        <input type='text' placeholder='Nome do cliente' value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} readOnly/>
                    </div>

                    <div className='nascimento'>
                        <h2>Data de Nascimento do Cliente:</h2>
                        <input type='text' placeholder='Data de nascimento' value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} readOnly/>
                    </div>
                    
                    <div className='idade'>
                        <h2>Idade do Cliente:</h2>
                        <input type='text' placeholder='Idade do cliente' value={idadeCliente} onChange={e => setIdadeCliente(e.target.value)} readOnly/>
                    </div>
                     
                     <div className='telefone'>
                        <h2>Telefone do Cliente:</h2>
                        <input type='text' placeholder='Telefone do cliente' value={numCliente} onChange={e => setNumCliente(e.target.value)} readOnly/>
                     </div>
                     
                     <div className="avas">
                        <div className='dataava'> 
                            <h2>Data da Avaliação:</h2>
                            <input type='text' placeholder='Data da Avaliação Física' value={diaAvaliacao} onChange={e => setDiaAvaliacao(e.target.value)} readOnly/>
                        </div>

                        <div className='datareava'>
                            <h2>Data da Reavaliação:</h2>
                            <input type='text' placeholder='Data da Reavaliação Física' value={diaReavaliacao} onChange={e => setDiaReavaliacao(e.target.value)} readOnly/>
                        </div>
                     </div>

                </div>
            </div>
  
            <div className="tabAvaliacao">
                <h2>AVALIAÇÃO FÍSICA DO CLIENTE</h2>
  
                <div className="dadosFisicos">
                    <div className="dados1">
                        <h3>Peso:</h3>
                        <input type='text' placeholder='Peso' value={peso} onChange={e => setPeso(e.target.value)} readOnly/>
  
                        <h3>IMC:</h3>
                        <input type='text' placeholder='Índice de Massa Corporal' value={imc} onChange={e => setImc(e.target.value)} readOnly/>
  
                        <h3>Frequência Cardíaca:</h3>
                        <input type='text' placeholder='Frequência Cardíaca' value={freqCard} onChange={e => setFreqCard(e.target.value)} readOnly/>
  
                        <h3>Índice de Coração:</h3>
                        <input type='text' placeholder='Índice de Coração' value={indcCoracao} onChange={e => setIndcCoracao(e.target.value)} readOnly/>
  
                        <h3>Taxa Muscular:</h3>
                        <input type='text' placeholder='Taxa Muscular' value={taxaMuscular} onChange={e => setTaxaMuscular(e.target.value)} readOnly/>
  
                        <h3>Idade Metabólica:</h3>
                        <input type='text' placeholder='Idade Metabólica' value={iddMetabolica} onChange={e => setIddMetabolica(e.target.value)} readOnly/>
  
                        <h3>TMB:</h3>
                        <input type='text' placeholder='Taxa Metabólica Basal (TMB)' value={taxaMetBasal} onChange={e => setTaxaMetBasal(e.target.value)} readOnly/>
  
                        <h3>Proteína:</h3>
                        <input type='text' placeholder='Proteína' value={proteina} onChange={e => setProteina(e.target.value)} readOnly/>
                    </div>
  
                    <div className="dados2">
                        <h3>Massa Livre de Gordura:</h3>
                        <input type='text' placeholder='Massa Livre de Gordura' value={massaLivGord} onChange={e => setMassaLivGord(e.target.value)} readOnly/>
  
                        <h3>Massa Muscular:</h3>
                        <input type='text' placeholder='Massa Muscular' value={massaMusc} onChange={e => setMassaMusc(e.target.value)} readOnly/>
  
                        <h3>Massa Muscular Esquelética:</h3>
                        <input type='text' placeholder='Massa Muscular Esquelética' value={massaMuscEsq} onChange={e => setMassaMuscEsq (e.target.value)} readOnly/>
  
                        <h3>Massa Óssea:</h3>
                        <input type='text' placeholder='Massa Óssea' value={massaOssea} onChange={e => setMassaOssea(e.target.value)} readOnly/>
  
                        <h3>Gordura Corporal:</h3>
                        <input type='text' placeholder='Gordura Corporal' value={gordCorp} onChange={e => setGordCorp(e.target.value)} readOnly/>
  
                        <h3>Gordura Subcutânea:</h3>
                        <input type='text' placeholder='Gordura Subcutânea' value={gordSub} onChange={e => setGordSub(e.target.value)} readOnly/>
  
                        <h3>Gordura Visceral:</h3>
                        <input type='text' placeholder='Gordura Visceral' value={gordVis} onChange={e => setGordVis(e.target.value)} readOnly/>
  
                        <h3>Água Corporal:</h3>
                        <input type='text' placeholder='Água Corporal' value={aguaCorp} onChange={e => setAguaCorp(e.target.value)} readOnly/>
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


            <div className="tabReavaliacao">
                <h2>REAVALIAÇÃO FÍSICA DO CLIENTE</h2>
  
                <div className="dadosFisicos">
                    <div className="dados1">
                        <h3>Peso:</h3>
                        <input type='text' placeholder='Peso' value={peso2} onChange={e => setPeso2(e.target.value)}/>
  
                        <h3>IMC:</h3>
                        <input type='text' placeholder='Índice de Massa Corporal' value={imc2} onChange={e => setImc2(e.target.value)}/>
  
                        <h3>Frequência Cardíaca:</h3>
                        <input type='text' placeholder='Frequência Cardíaca' value={freqCard2} onChange={e => setFreqCard2(e.target.value)}/>
  
                        <h3>Índice de Coração:</h3>
                        <input type='text' placeholder='Índice de Coração' value={indcCoracao2} onChange={e => setIndcCoracao2(e.target.value)}/>
  
                        <h3>Taxa Muscular:</h3>
                        <input type='text' placeholder='Taxa Muscular' value={taxaMuscular2} onChange={e => setTaxaMuscular2(e.target.value)}/>
  
                        <h3>Idade Metabólica:</h3>
                        <input type='text' placeholder='Idade Metabólica' value={iddMetabolica2} onChange={e => setIddMetabolica2(e.target.value)}/>
  
                        <h3>TMB:</h3>
                        <input type='text' placeholder='Taxa Metabólica Basal (TMB)' value={taxaMetBasal2} onChange={e => setTaxaMetBasal2(e.target.value)}/>
  
                        <h3>Proteína:</h3>
                        <input type='text' placeholder='Proteína' value={proteina2} onChange={e => setProteina2(e.target.value)}/>
                    </div>
  
                    <div className="dados2">
                        <h3>Massa Livre de Gordura:</h3>
                        <input type='text' placeholder='Massa Livre de Gordura' value={massaLivGord2} onChange={e => setMassaLivGord2(e.target.value)}/>
  
                        <h3>Massa Muscular:</h3>
                        <input type='text' placeholder='Massa Muscular' value={massaMusc2} onChange={e => setMassaMusc2(e.target.value)}/>
  
                        <h3>Massa Muscular Esquelética:</h3>
                        <input type='text' placeholder='Massa Muscular Esquelética' value={massaMuscEsq2} onChange={e => setMassaMuscEsq2(e.target.value)}/>
  
                        <h3>Massa Óssea:</h3>
                        <input type='text' placeholder='Massa Óssea' value={massaOssea2} onChange={e => setMassaOssea2(e.target.value)}/>
  
                        <h3>Gordura Corporal:</h3>
                        <input type='text' placeholder='Gordura Corporal' value={gordCorp2} onChange={e => setGordCorp2(e.target.value)}/>
  
                        <h3>Gordura Subcutânea:</h3>
                        <input type='text' placeholder='Gordura Subcutânea' value={gordSub2} onChange={e => setGordSub2(e.target.value)}/>
  
                        <h3>Gordura Visceral:</h3>
                        <input type='text' placeholder='Gordura Visceral' value={gordVis2} onChange={e => setGordVis2(e.target.value)}/>
  
                        <h3>Água Corporal:</h3>
                        <input type='text' placeholder='Água Corporal' value={aguaCorp2} onChange={e => setAguaCorp2(e.target.value)}/>
                    </div>
                </div>
            </div>
                    <div className='botoes'>
                    <button onClick={addRev} className='concluir'> Concluir treino </button>
                    <button onClick={excluir} className='excluir'> Excluir treino </button>
                    </div>
                        
          </div>      
        </div>
      );
}