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
                    <Link className='treinosmarcados' to = {'/horariosTreinos'}><p>Treinos Marcados</p></Link>
                </div>

                <div className="conclu">
                    <img className='check' src='/assets/images/finpends.png'/>
                    <Link className='finalizados' to = {'/treinosConcluidos'}><p>Treinos Concluídos</p></Link>
                </div>
                
                <div className="logout">
                    <img onClick={sair} className='sair' src='/assets/images/sair.png'/>
                    <p>Sair</p>
                </div>
            </div>
        </div>
    )
}