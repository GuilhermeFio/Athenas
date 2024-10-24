import './index.scss'
import {Link} from 'react-router-dom'

export default function Menu (){
    return(
        <div className='menu'>
            <div className='opcoes'>
                <div className="usuario">
                    <Link to={'/infosUsuario'}><img className='user' src='/assets/images/user.png'/></Link>
                </div>

                <div className="horarios">
                    <img className='horas' src='/assets/images/relogio.png'/>
                    <Link to = {'/horariosTreinos'}><p>Horário dos Treinos</p></Link>
                </div>

                <div className="finalpends">
                    <img className='finpends' src='/assets/images/finpends.png'/>
                    <Link to = {'/treinosFinalPend'}><p>Treinos Concluídos/Pendentes</p></Link>
                </div>
                
                <div className="sair">
                    <img className='user' src='/assets/images/user.png'/>
                    <Link to = {'/loginUsuario'}><p>Sair</p></Link>
                </div>
            </div>
        </div>
    )
}