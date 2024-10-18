import { Link } from 'react-router-dom'
import './index.scss'


export default function Login() {

  return (

    <div className="login-page pagina">

      <main>
        <section className="secao1 secao" >

          <Link to={'/'}><i id='voltar' className="fa-solid fa-arrow-left"> </i> </Link>

          <div className='login'>
            <h1> Acesse sua área de trabalho abaixo: </h1>

            <div className='informacoes'>

              <input type='text' placeholder='E-mail' />

              <input type='text' placeholder='Senha' />

              <button><Link to={'/horariosTreinos'}> Fazer login </Link></button>

            </div>


          </div>



        </section>
      </main>

    </div>
  );
}