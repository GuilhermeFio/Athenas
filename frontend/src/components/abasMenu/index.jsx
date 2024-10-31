import './index.scss'
import {Link, useNavigate} from 'react-router-dom'

export default function Menu (){

    const navigate = useNavigate()

    async function sair() {
        localStorage.setItem('USUARIO', undefined)
        
        navigate('/loginUsuario')
    }

    return(
        <div className='menu'>
            <div className='opcoes'>
                <div className="usuario">
                    <img className='user' src='/assets/images/logo_1.png'/>
                </div>

                <div className="horarios">
                    <img className='horas' src='/assets/images/relogio.png'/>
                    <Link to = {'/horariosTreinos'}><p>Treinos Marcados</p></Link>
                </div>

                <div className="finalpends">
                    <img className='finpends' src='/assets/images/finpends.png'/>
                    <Link to = {'/treinosFinalPend'}><p>Treinos Concluídos/Pendentes</p></Link>
                </div>
                
                <div className="logout">
                    <img onClick={sair} className='sair' src='/assets/images/sair.png'/>
                    <p>Sair</p>
                </div>
            </div>
        </div>
    )
}