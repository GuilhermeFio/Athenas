import { Link, useNavigate } from 'react-router-dom'
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
    const[dataTreino, setDataTreino] = useState('');

    //AVALIAÇÃO | 
    const[peso, setPeso] = useState(0);
    const[imc, setImc] = useState(0);
    const[freqCard, setFreqCard] = useState(0);
    const[indcCoracao, setIndcCoracao] = useState(0);
    const[taxaMuscular, setTaxaMuscular] = useState(0);
    const[iddMetabolica, setIddMetabolica] = useState(0);
    const[taxaMetBasal, setTaxaMetBasal] = useState(0);
    const[proteina, setProteina] = useState(0);
    const[massaLivGord, setMassaLivGord] = useState(0);
    const[massaMusc, setMassaMusc] = useState(0);
    const[massaMuscEsq, setMassaMuscEsq] = useState(0);
    const[massaOssea, setMassaOssea] = useState(0);
    const[gordCorp, setGordCorp] = useState(0);
    const[gordSub, setGordSub] = useState(0);
    const[gordVis, setGordVis] = useState(0);
    const[aguaCorp, setAguaCorp] = useState(0);

    //REAVALIAÇÃO
    const[peso2, setPeso2] = useState(0);
    const[imc2, setImc2] = useState(0);
    const[freqCard2, setFreqCard2] = useState(0);
    const[indcCoracao2, setIndcCoracao2] = useState(0);
    const[taxaMuscular2, setTaxaMuscular2] = useState(0);
    const[iddMetabolica2, setIddMetabolica2] = useState(0);
    const[taxaMetBasal2, setTaxaMetBasal2] = useState(0);
    const[proteina2, setProteina2] = useState(0);
    const[massaLivGord2, setMassaLivGord2] = useState(0);
    const[massaMusc2, setMassaMusc2] = useState(0);
    const[massaMuscEsq2, setMassaMuscEsq2] = useState(0);
    const[massaOssea2, setMassaOssea2] = useState(0);
    const[gordCorp2, setGordCorp2] = useState(0);
    const[gordSub2, setGordSub2] = useState(0);
    const[gordVis2, setGordVis2] = useState(0);
    const[aguaCorp2, setAguaCorp2] = useState(0);

    const[objetivos, setObjetivos] = useState('');
    const[exercicios, setExercicios] = useState('');

    const {id} = useParams();


    useEffect(() =>{
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)
        
        if(usu == 'undefined' || usu == 'null') {
            navigate('/loginUsuario')
        }
    }, [])

    useEffect(() => {

    });

    const verifyClient = () => {    
    }

    return (
        <div className="pagina-treino-cliente">
  
          <Menu/>
  
          <div className='secaomae'>
  
            <h2>TREINO DE {nomeCliente}</h2> 
         
            <div className='secaoCliente'>
                <img className='avatar' src='/assets/images/avatarfoto.png'/>
                <div className="infosCliente">
                      <h3>Nome do cliente: <h4 value={nomeCliente} onChange={e => setNomeCliente(e.target.value)}/> </h3>
                      <h3>Data de nascimento: <h4 value={dataNascimento} onChange={e => setDataNascimento(e.target.value)}/></h3>
                      <h3>Idade do cliente: <h4 value={idadeCliente} onChange={e => setIdadeCliente(e.target.value)}/></h3>
                      <h3>Telefone/Celular do cliente: <h4 value={numCliente} onChange={e => setNumCliente(e.target.value)}/></h3>
                      <h3>Data e horário do treino: <h4 value={dataTreino} onChange={e => setDataTreino(e.target.value)}/></h3>
                </div>
            </div>
  
            <div className="tabAvaliacao">
                <h2>AVALIAÇÃO FÍSICA DO CLIENTE</h2>
  
                <div className="dadosFisicos">
                    <div className="dados1">
                        <h3>Peso:</h3>
                        <input type='text' value={peso} onChange={e => setPeso(e.target.value)}/>
  
                        <h3>IMC:</h3>
                        <input type='text' placeholder='Índice de Massa Corporal' value={imc} onChange={e => setImc(e.target.value)}/>
  
                        <h3>Frequência Cardíaca:</h3>
                        <input type='text' placeholder='Frequência Cardíaca' value={freqCard} onChange={e => setFreqCard(e.target.value)}/>
  
                        <h3>Índice de Coração:</h3>
                        <input type='text' placeholder='Índice de Coração' value={indcCoracao} onChange={e => setIndcCoracao(e.target.value)}/>
  
                        <h3>Taxa Muscular:</h3>
                        <input type='text' placeholder='Taxa Muscular' value={taxaMuscular} onChange={e => setTaxaMuscular(e.target.value)}/>
  
                        <h3>Idade Metabólica:</h3>
                        <input type='text' placeholder='Idade Metabólica' value={iddMetabolica} onChange={e => setIddMetabolica(e.target.value)}/>
  
                        <h3>TMB:</h3>
                        <input type='text' placeholder='Taxa Metabólica Basal (TMB)' value={taxaMetBasal} onChange={e => setTaxaMetBasal(e.target.value)}/>
  
                        <h3>Proteína:</h3>
                        <input type='text' placeholder='' value={proteina} onChange={e => setProteina(e.target.value)}/>
                    </div>
  
                    <div className="dados2">
                        <h3>Massa Livre de Gordura:</h3>
                        <input type='text' placeholder='Massa Livre de Gordura' value={massaLivGord} onChange={e => setMassaLivGord(e.target.value)}/>
  
                        <h3>Massa Muscular:</h3>
                        <input type='text' placeholder='Massa Muscular' value={massaMusc} onChange={e => setMassaMusc(e.target.value)}/>
  
                        <h3>Massa Muscular Esquelética:</h3>
                        <input type='text' placeholder='Massa Muscular Esquelética' value={massaMuscEsq} onChange={e => (setMassaMuscEsq.target.value)}/>
  
                        <h3>Massa Óssea:</h3>
                        <input type='text' placeholder='Massa Óssea' value={massaOssea} onChange={e => setMassaOssea(e.target.value)}/>
  
                        <h3>Gordura Corporal:</h3>
                        <input type='text' placeholder='Gordura Corporal' value={gordCorp} onChange={e => setGordCorp(e.target.value)}/>
  
                        <h3>Gordura Subcutânea:</h3>
                        <input type='text' placeholder='Gordura Subcutânea' value={gordSub} onChange={e => setGordSub(e.target.value)}/>
  
                        <h3>Gordura Visceral:</h3>
                        <input type='text' placeholder='Gordura Visceral' value={gordVis} onChange={e => setGordVis(e.target.value)}/>
  
                        <h3>Água Corporal:</h3>
                        <input type='text' placeholder='Água Corporal' value={aguaCorp} onChange={e => setAguaCorp(e.target.value)}/>
                    </div>
                </div>
            </div>
  
            <div className="detalhesTreino">
                <div className="objetivosTreino">
                    <h2>OBJETIVOS DO CLIENTE:</h2>
                    <input type='text' placeholder='Objetivos do Cliente' value={objetivos} onChange={e => setObjetivos(e.target.value)}/>
                </div>
                <div className="exerciciosTreino">
                    <h2>EXERCÍCIOS SELECIONADOS:</h2>
                    <input type='text' placeholder='Exercícios Selecionados' value={exercicios} onChange={e => setExercicios(e.target.value)}/>
                </div>
            </div>  


            <div className="tabReavaliacao">
                <h2>REAVALIAÇÃO FÍSICA DO CLIENTE</h2>
  
                <div className="dadosFisicos">
                    <div className="dados1">
                        <h3>Peso:</h3>
                        <input type='text' value={peso2} onChange={e => setPeso2(e.target.value)}/>
  
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
                        <input type='text' placeholder='' value={proteina2} onChange={e => setProteina2(e.target.value)}/>
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
                    <button className='concluir'> Concluir treino </button>
                    <button className='excluir'> Excluir treino </button>
                    </div>
                        
          </div>      
        </div>
      );
}