import './index.scss'
import {Link} from 'react-router-dom'
export default function Menu (){

    return(

        <div className='menu'>

            <i id='user' class="fa-solid fa-user"></i>

            <div className='barra'/> 

            <div className='opcoes'>
                <Link to = {'/horariosTreinos'}><i class="fa-solid fa-calendar-days"> Horário dos Treinos </i></Link>
                <Link to = {'/treinosFinalPend'}><i class="fa-regular fa-calendar-check"> Treinos Concluídos/Pendentes </i></Link>
                <Link to = {'/loginUsuario'}><i class="fa-solid fa-right-from-bracket"> Sair </i></Link>
            </div>

        </div>
      
    )

}