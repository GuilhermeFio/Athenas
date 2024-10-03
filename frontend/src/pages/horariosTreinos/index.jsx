import './index.scss';
import { Link } from 'react-router-dom'
import Menu from '../../components/abasMenu'

import axios from 'axios'

export default function HorarioTreinos (){

    return(
        <div className="pagina-horarios-treinos">

            <Menu/>

            <div className="secao">
                <h1>HORÁRIOS DOS TREINOS</h1>

                <div className="irAddTreino">
                    <h3>Adicionar novo treino</h3>
                    <Link to={'/adicionarTreino'}></Link>
                </div>
            </div>
        </div>
    
    )
}