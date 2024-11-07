import './index.scss';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Menu from '../../components/abasMenu'
import CardTreinoConcluido from '../../components/cardTreinoConcluido'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TreinosConcluidos() {
        const [token, setToken] = useState(null);
        const [listaTC, setListaTC] = useState([]);
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
                setListaTC(resp.data);
               
        }


    useEffect(() =>{
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)
        
        if(usu == 'undefined' || usu == 'null') {
            navigate('/loginUsuario')
        }
    }, [])


    return(
        <div className="pagina-treinos-concluidos">
             <Menu />
            <div className="secaomae">
                <div className="secao1">
                    <h1>TREINOS CONCLUÍDOS</h1>
                   
                </div>
                <div className="secaotreinos">
                    <div className="treinosConcluídos">
                        {listaTC.length === 0 ? (
                            <p>Os treinos Concluídos aparecerão aqui.</p>
                        ) : (
                            listaTC.map(item => (
                                <CardTreinoConcluido item={item} />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}