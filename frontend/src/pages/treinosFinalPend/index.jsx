import './index.scss';
import { Link } from 'react-router-dom'
import Menu from '../../components/abasMenu'

export default function TreinosFinalPend(){
    return(
        <div className="pagina-treinos-finpen">
            <Menu />
            <div className="secaomae">
                <h1>Treinos Concluídos</h1>
                <h1>Treinos Pendentes</h1>
            </div>
        </div>
    )
}