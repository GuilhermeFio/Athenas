import './index.scss';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Menu from '../../components/abasMenu'
import CardTreinosAtuais from '../../components/cardTreinosAtuais';
import CardTreinosProxs from '../../components/cardTreinosProxs';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function HorarioTreinos (){

    const[token, setToken] = useState(null);

    const navigate = useNavigate();

    const {id} = useParams();

    async function consultar(){
        if(id != undefined){
            const url = `http://localhost:4000//treinos/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;

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
        <div className="pagina-horarios-treinos">

            <Menu/>

            <div className="secaomae">

                <div className="secao1">
                    <h1>HORÁRIOS DOS TREINOS</h1>

                    <div className="irAddTreino">
                        <h2>Adicionar Novo Treino</h2>
                        <Link to={'/adicionarTreino'}><img className='add' src='/assets/images/adicionar.png'/></Link>
                    </div>
                </div>

                <div className="secaotreinos">

                    <div className="atualSemana">
                        <div className="titulo">
                            <h3>Esta Semana</h3>
                            <img className='seta' src='/assets/images/seta.png'/>
                        </div>

                        <div className="treinosatuais">
                                <CardTreinosAtuais/>
                            <CardTreinosAtuais/>
                            <CardTreinosAtuais/>
                        </div>
                    </div>

                    <div className="proxSemanas">
                        <div className="titulo">
                            <h3>Nas Próximas Semanas</h3>
                            <img className='seta' src='/assets/images/seta.png'/>
                        </div>

                        <div className="treinosproxs">
                            <CardTreinosProxs/>
                            <CardTreinosProxs/>
                            <CardTreinosProxs/>
                            <CardTreinosProxs/>
                            <CardTreinosProxs/>
                            <CardTreinosProxs/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}