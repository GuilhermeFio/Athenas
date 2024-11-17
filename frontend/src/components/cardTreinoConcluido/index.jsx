import { Link } from 'react-router-dom';
import './index.scss';
import {format} from 'date-fns'

function CardTreinoConcluido(props) {

    
    let div = 0
    if(props.item.concluido == true){
        div = 0
    }
    else{
        div = 1
    }


    return (

       
            <div className={'cartao'+div}>

                {props.item.concluido == true && (

                <Link className='comp-card-treino-concluido' to={`/clienteConcluido/${props.item.id_cliente}`}>
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
                        <p>{format(props.item.dataAvaliacao, 'dd/MM/yyyy HH:mm')}</p>
                    </div>
                   
                    <div>
                        <h3>Data da Reavaliação:</h3>
                        <p>{format(props.item.dataReavaliacao, 'dd/MM/yyyy HH:mm')}</p>
                    </div>
                </div>
                </Link>) }

                
            </div>
        
    );
}

export default CardTreinoConcluido;