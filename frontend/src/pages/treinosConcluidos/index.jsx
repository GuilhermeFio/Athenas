import './index.scss';
import { useNavigate} from 'react-router-dom'
import Menu from '../../components/abasMenu'
import CardTreinoConcluido from '../../components/cardTreinoConcluido'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TreinosConcluidos() {
        const [token, setToken] = useState(null);
        const [listaTC, setListaTC] = useState([]);
        const navigate = useNavigate();

    
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
           
                const url = `http://4.172.207.208:5008/treinos?x-access-token=${token}`;
                const resp = await axios.get(url);
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
                            <p className='cond'>Os treinos concluídos aparecerão aqui.</p>
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