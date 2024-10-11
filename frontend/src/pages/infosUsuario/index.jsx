import './index.scss';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';

export default function InfosUser(){

    const[email, setEmail] = useState('');
    const[dtnasc, setDtnasc] = useState('');
    const[cidade, setCidade] = useState('');
    const[gen, setGen] = useState('');
    const[idade, setIdade] = useState('');
    const[uf, setUf] = useState('');

    return(
        <div className="pagina-infos-usuario">
            <div className="secaomae">

                <div className="menu">
                    <Link to={'/horariosTreinos'}><i id='voltar' class="fa-solid fa-circle-arrow-left"></i></Link>
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
                    <button><Link to={'/loginUsuario'}> Encerrar Sessão <i class="fa-solid fa-arrow-right-from-bracket"></i> </Link></button>
                </div>

                <div className="rodape">
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                </div>
            </div>
        </div>
    )
}