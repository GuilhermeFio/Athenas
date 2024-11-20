// frontend - components/cardsTreino/index.jsx
import { Link } from 'react-router-dom';
import './index.scss';
import {format} from 'date-fns'

function CardTreinoMarcado(props) {

    let div = 0
    if(props.item.concluido == false){
        div = 0
    }
    else{
        div = 1
    }

    


    return (
            <div className={'cartao'+div}>
                {props.item.concluido == false && ( 
                

                <Link className='comp-card-treino-marcado' to={`/treinoCliente/${props.item.id_cliente}`}>
                {props.item.perfil ? (
                    <img src={props.item.perfil} alt="Foto do Cliente"/>
                ) : (
                    <img src='/assets/images/avatarfoto.png'/>
                )}
                <div className='infosCliente'>
                    <div>
                        <h3>Nome do Cliente:</h3>
                        <p>{props.item.nome}</p>
                    </div>
                    <div>
                        <h3>Data da Avaliação:</h3>
                        <p>{format(props.item.dataAvaliacao, 'dd/MM/yyyy')}</p>
                    </div>
                    <div>
                        <h3>Data da Reavaliação:</h3>
                        <p>{format(props.item.dataReavaliacao, 'dd/MM/yyyy')}</p>
                    </div>
                    <div>
                        <h3>Telefone do Cliente:</h3>
                        <p>{props.item.telefone}</p>
                    </div>
                </div>
                </Link>

                )}
                
            </div>
        
    );
}

export default CardTreinoMarcado;