import './index.scss';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Menu from '../../components/abasMenu'
import CardTreinos from '../../components/cardTreinos';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function HorarioTreinos (){

    const [token, setToken] = useState(null);
    const navigate = useNavigate();
    const [listaTreinos, setListaTreinos] = useState([]);

    /*const {id} = useParams();/*

    /*async function consultar(){
        if(id != undefined){
            const url = `http://localhost:4000/treinos/${id}?x-access-token=${token}`;
            let resp = await axios.get(url);
            let dados = resp.data;

        }
    }*/

async function treinos() {
    const url = `http://localhost:4000/treinos?x-access-token=${token}`;
    let resp= await axios.get(url);
    setListaTreinos(resp.data)
 }

    /*useEffect(() =>{
        treinos()
    })*/

    useEffect(() =>{
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)
        
        if(usu == 'undefined' || usu == 'null') {
            navigate('/loginUsuario')
        }
    }, [])

    

    return(
        <div className="pagina-horarios-treinos">

            <Menu/>

            <div className="secaomae">

                <div className="secao1">
                    <h1>TREINOS MARCADOS</h1>

                    <div className="irAddTreino">
                        <h2>Adicionar Novo Treino</h2>
                        <Link to={'/novoTreino'}><img className='add' src='/assets/images/adicionar.png'/></Link>
                    </div>
                </div>

                <div className="secaotreinos">

                    <div className="treinosMarcados">
                        {listaTreinos.map(item =>
                            <CardTreinos item={item}/>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}