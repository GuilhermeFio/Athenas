import './index.scss';
import { Link, useNavigate, useParams } from 'react-router-dom'
import Menu from '../../components/abasMenu'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TreinosFinalPend(){

    const [token, setToken] = useState(null);
    const navigate = useNavigate()
    const{id} = useParams()


    useEffect(() =>{
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)

        if(usu == undefined) {
            navigate('/loginUsuario')
        }


    }, [])


    return(
        <div className="pagina-treinos-finpen">

            <Menu />
            
            <div className="secaomae">

                <div className="secaoConcluidos">
                    <div className="titulo">
                        <h1>Treinos Concluídos</h1>
                        <img className='final' src='/assets/images/final.png'/>
                    </div>
                </div>
            
                <div className="secaoPendentes">
                    <div className="titulo">
                        <h1>Treinos Pendentes</h1>
                        <img className='pend' src='/assets/images/pend.png'/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}