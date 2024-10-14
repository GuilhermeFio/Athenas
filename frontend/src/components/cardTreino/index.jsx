import './index.scss';

function CardTreino(){
    return(
        <div className='comp-card-treino'>
            <div className='cartao'>
                <img src='/assets/images/avatarfoto.png'/>
                <div className='infos'>
                    <h2>Nome: Lucas Sousa</h2>
                    <h2>Data do Treino: 21/10/2024 - 15:00</h2>
                    <h2>Celular: (11) 94002-8922</h2>
                </div>
            </div>
        </div>
    )
}

export default CardTreino