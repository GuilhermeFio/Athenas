import { Link } from 'react-router-dom'
import './index.scss'


export default function Login() {

    return (
  
      <div className="login-page pagina">
  
     <main>
  <section className="secao1 secao" >

  <Link to={'/'}><i id='voltar' className="fa-solid fa-arrow-left"> </i> </Link>  
  
     <img className='fundo' src='/assets/images/fundoLogin.jpg'/>
  
     <div className='login'>
  <h1> Acesse sua área de trabalho abaixo: </h1>

<div className='informacoes'>

<input type='text' placeholder='E-mail' />

<input type='text' placeholder='Senha' />

<button> Fazer login </button>

</div>


     </div>
  
            
  
  </section>
  </main>
  
      </div>
    );
  }