// frontend - components/cardsTreino/index.jsx
import { Link } from 'react-router-dom';
import './index.scss';

function CardTreinos(props) {
    console.log("Imagem recebida no CardTreinos:", props.item.perfil);

    return (
        <Link className='comp-card-treinos-atuais' to={`/treinoCliente`}>
            <div className='cartao'>
                {props.item.perfil ? (
                    <img src={props.item.perfil} alt="Foto do Cliente"/>
                ) : (
                    <p>Imagem não disponível</p>
                )}
                <div className='infosCliente'>
                    <div>
                        <h3>Nome do Cliente:</h3>
                        <h3>{props.item.nome}</h3>
                    </div>
                    <div>
                        <h3>Data do Treino:</h3>
                        <h3>{new Date(props.item.dataTreino).toLocaleDateString()}</h3>
                    </div>
                    <div>
                        <h3>Telefone do Cliente:</h3>
                        <h3>{props.item.telefone}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default CardTreinos;
