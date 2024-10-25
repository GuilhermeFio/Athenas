import './index.scss';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react';

export default function InfosUser(){
    const [token, setToken] = useState(null);

    const {id} = useParams();

    const navigate = useNavigate()

    
    const[email, setEmail] = useState('');
    const[dtnasc, setDtnasc] = useState('');
    const[cidade, setCidade] = useState('');
    const[gen, setGen] = useState('');
    const[idade, setIdade] = useState('');
    const[uf, setUf] = useState('');


    async function salvar(){
        let paramCorpo = {
                 
            "ds_email" : email,      
            "dt_nascimento" : dtnasc, 
            "ds_cidade" : cidade,     
            "ds_genero" : gen,     
            "ds_UF"   : uf       
            /*img_usuario*/    
        }

        const url = `http://localhost:4000/usuario/atualizar/${id}?x-access-token=${token}`;
        let resp = await axios.put(url, paramCorpo);
        alert('Informação alterada');
    }

    async function consultar(){
        if(id != undefined){
            const url = `http://localhost:4000/usuario/consultar/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;


            setEmail(dados.email)
            setDtnasc(dados.nascimento)
            setCidade(dados.cidade)
            setGen(dados.genero)
            setIdade(dados.idade)
            setUf(dados.uf)

        }
    }

    useEffect(() =>{
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)

        if(usu == undefined) {
            navigate('/loginUsuario')
        }

        consultar();
    }, [])




    return(
        <div className="pagina-infos-usuario">
            <div className="secaomae">

                <div className="menu">
                    <Link to={'/horariosTreinos'}><img className='seta' src='/assets/images/'/></Link>
                    <h1>Informações do Usuário</h1>
                </div>

                <div className="secaoinfos">
                    <label>Email Atual:</label>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <label>Data de Nascimento:</label>
                    <input type='text' value={dtnasc} onChange={e => setDtnasc(e.target.value)}/>

                    <label>Cidade:</label>
                    <input type='text' value={cidade} onChange={e => setCidade(e.target.value)}/>

                    <label>Gênero:</label>
                    <input type='text' value={gen} onChange={e => setGen(e.target.value)}/>

                    <label>Idade</label>
                    <input type='text' value={idade} onChange={e => setIdade(e.target.value)}/>

                    <label>UF (Estado)</label>
                    <input type='text' value={uf} onChange={e => setUf(e.target.value)}/>
                </div>

                <div className="logout">
                    <button onClick={salvar}><Link to={'/loginUsuario'}> Encerrar Sessão <i class="fa-solid fa-arrow-right-from-bracket"></i> </Link></button>
                </div>

                <div className="rodape">
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                </div>
            </div>
        </div>
    )
}