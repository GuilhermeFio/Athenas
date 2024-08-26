import { Link } from 'react-router-dom'


export default function Login() {

    return (
  
      <div className="login-page pagina">
  
     <main>
  <section className="secao1 secao" >
     <img className='fundo' src='/assets/images/portrait-young-sportive-girl-training-with-dumbbells-isolated-blue-background-neon.jpg'/>
  
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