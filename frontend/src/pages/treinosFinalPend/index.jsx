import './index.scss';
import { Link } from 'react-router-dom'
import Menu from '../../components/abasMenu'

export default function TreinosFinalPend(){
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