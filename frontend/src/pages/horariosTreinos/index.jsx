import './index.scss';
import { Link } from 'react-router-dom'
import Menu from '../../components/abasMenu'
import CardTreino from '../../components/cardTreino';
import axios from 'axios'

export default function HorarioTreinos (){

    return(
        <div className="pagina-horarios-treinos">

            <Menu/>

            <div className="secao">
                <h1>HORÁRIOS DOS TREINOS</h1>

                <div className="irAddTreino">
                    <h2>Adicionar Novo Treino</h2>
                    <Link to={'/adicionarTreino'}><i id='adicionar' className="fa-solid fa-circle-plus"></i></Link>
                </div>

                <div className="atualSemana">
                    <div className="titulo">
                        <h3>Esta Semana</h3>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>

                    <CardTreino/>
                </div>

                <div className="proxSemanas">
                    <div className="titulo">
                        <h3>Nas Próximas Semanas</h3>
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                </div>
            </div>
        </div>
    
    )
}