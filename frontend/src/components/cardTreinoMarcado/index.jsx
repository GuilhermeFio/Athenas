// frontend - components/cardsTreino/index.jsx
import { Link } from 'react-router-dom';
import './index.scss';

function CardTreinoMarcado(props) {


    return (
            <div className='cartao'>
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
                        <p>{new Date(props.item.dataAvaliacao).toLocaleString()}</p>
                    </div>
                    <div>
                        <h3>Data da Reavaliação:</h3>
                        <p>{new Date(props.item.dataReavaliacao).toLocaleString()}</p>
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