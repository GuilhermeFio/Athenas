import { Link } from 'react-router-dom';
import './index.scss';

function CardTreinosAtuais(){
    return(
        <Link className='comp-card-treinos-atuais' to = {`/treinoCliente`}>
            <div className='cartao'>
                <img src='/assets/images/avatarfoto.png'/>
                <div className='infosCliente'>
                    <div>
                        <h3>Nome do Cliente:</h3>
                        <h3>Lucas da Silva Pereira Sousa</h3>
                    </div>
                    <div>
                        <h3>Data do Treino:</h3>
                        <h3>21/10/2024 - 15:00</h3>
                    </div>
                    <div>
                        <h3>Telefone do Cliente:</h3>
                        <h3>(11) 94002-8922</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardTreinosAtuais