import './index.scss'
import {Link} from 'react-router-dom'

export default function Menu (){
    return(
        <div className='menu'>
            <div className='opcoes'>
                <Link to={'/infosUsuario'}><i id='user' class="fa-solid fa-user"></i></Link>
                <Link to = {'/horariosTreinos'}><i id='treinos' class="fa-solid fa-calendar-days"> Horário dos Treinos </i></Link>
                <Link to = {'/treinosFinalPend'}><i id='finpends' class="fa-regular fa-calendar-check"> Treinos Concluídos/Pendentes </i></Link>
                <Link to = {'/loginUsuario'}><i id='logout' class="fa-solid fa-right-from-bracket"> Sair </i></Link>
            </div>
        </div>
    )
}