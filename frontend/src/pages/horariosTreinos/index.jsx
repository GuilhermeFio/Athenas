import './index.scss';
import { Link } from 'react-router-dom'
import Menu from '../../components/abasMenu'
import CardTreinosAtuais from '../../components/cardTreinosAtuais';
import CardTreinosProxs from '../../components/cardTreinosProxs';
import axios from 'axios'

export default function HorarioTreinos (){

    return(
        <div className="pagina-horarios-treinos">

            <Menu/>

            <div className="secaomae">

                <div className="secao1">
                    <h1>HORÁRIOS DOS TREINOS</h1>

                    <div className="irAddTreino">
                        <h2>Adicionar Novo Treino</h2>
                        <Link to={'/adicionarTreino'}><i id='adicionar' className="fa-solid fa-circle-plus"></i></Link>
                    </div>
                </div>

                <div className="secaotreinos">

                    <div className="atualSemana">
                        <div className="titulo">
                            <h3>Esta Semana</h3>
                            <i class="fa-solid fa-arrow-right"></i>
                        </div>

                        <div className="treinosatuais">
                                <CardTreinosAtuais id={1}/>
                            <CardTreinosAtuais id={2}/>
                            <CardTreinosAtuais/>
                        </div>
                    </div>

                    <div className="proxSemanas">
                        <div className="titulo">
                            <h3>Nas Próximas Semanas</h3>
                            <i class="fa-solid fa-arrow-right"></i>
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