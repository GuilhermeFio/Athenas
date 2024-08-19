import { Link } from 'react-router-dom'


export default function Cadastro() {

    return (
  
      <div className="cadastro-page pagina">
  
     <main>
  <section className="secao1 secao" >
     <img className='fundo' src='/assets/images/portrait-young-sportive-girl-training-with-dumbbells-isolated-blue-background-neon.jpg'/>
  
     <div className='cadastro'>
  <h1> Inscreva-se e comece a aproveitar nossos serviços </h1>

<div className='informacoes'>

<input type='text' placeholder='E-mail' />

<input type='text' placeholder='E-mail' />

<input type='text' placeholder='E-mail' />

<button> Cadastrar-se </button>
<button> Já tem uma conta conosco? Faça login </button>

</div>


     </div>
  
            
  
  </section>
  </main>
  
      </div>
    );
  }