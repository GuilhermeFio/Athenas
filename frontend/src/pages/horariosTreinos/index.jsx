import './index.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Menu from '../../components/abasMenu';
import CardTreinoMarcado from '../../components/cardTreinoMarcado';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function HorarioTreinos() {
    const [token, setToken] = useState(null);
    const [listaTreinos, setListaTreinos] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const constatoken = {
        headers: {
          'x-access-token': token
          
        }
      };

    useEffect(() =>{
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)
        
        if(usu == 'undefined' || usu == 'null' || !usu) {
            navigate('/loginUsuario')
        }
    }, [])

    useEffect(() => {
        if (token) {
            consultar();
        }
    }, [token]);

    async function consultar() {
       
            const url = `http://localhost:4000/treinos`;
            const resp = await axios.get(url, constatoken);
            setListaTreinos(resp.data);
           
    }

    return (
        <div className="pagina-horarios-treinos">
            <Menu />
            <div className="secaomae">
                <div className="secao1">
                    <h1>TREINOS MARCADOS</h1>
                    <div className="irAddTreino">
                        <h2>Adicionar Novo Treino</h2>
                        <Link to={'/novoTreino'}>
                            <img className='add' src='/assets/images/adicionar.png' alt="Adicionar Treino"/>
                        </Link>
                    </div>
                </div>
                <div className="secaotreinos">
                    <div className="treinosMarcados">
                        {listaTreinos.length === 0 ? (
                            <p>Os treinos marcados aparecerão aqui.</p>
                        ) : (
                            listaTreinos.map(item => (
                                <CardTreinoMarcado item={item} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
