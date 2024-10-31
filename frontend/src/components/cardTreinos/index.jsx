import { Link } from 'react-router-dom';
import './index.scss';

function CardTreinos(props){

    return(
        <Link className='comp-card-treinos-atuais' to = {`/treinoCliente`}>
            <div className='cartao'>
                <img src={props.item.perfil}/>
                <div className='infosCliente'>
                    <div>
                        <h3>Nome do Cliente:</h3>
                        <h3>{props.item.nome}</h3>
                    </div>
                    <div>
                        <h3>Data do Treino:</h3>
                        <h3>{props.item.dataTreino}</h3>
                    </div>
                    <div>
                        <h3>Telefone do Cliente:</h3>
                        <h3>{props.item.telefone}</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default CardTreinos;