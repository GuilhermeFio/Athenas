import './index.scss';
import { Link } from 'react-router-dom'

function Landing() {
  return (

    <div className="landing-page pagina">

        <header className='cabecalho'> 

         <img className='logo' src='/assets/images/athenas-logo.webp' />

          <div className='opcoes'>
         <p> <Link to={'/Instruções'}> Como usar  </Link> </p>
         <p> <Link to={'/Serviços'}> Serviços  </Link> </p>
           <div className='login'>
           <i id='user' class="fa-regular fa-circle-user"></i>
           <p> <Link to={'/Home'}> Log-in </Link> </p>
           </div>
     
         </div>
  

       <i id='config' class="fa-solid fa-gear"> <Link to={'/configurações'}> </Link> </i>
   

</header>

<main>
<section className="secao1 secao" >
   <img className='fundo' src='/assets/images/young-happy-sportswoman-getting-ready-workout-tying-shoelace-fitness-center.jpg'/>

   <div className='texto1'>
<h1> Bem-vindo à Athenas</h1>
<p> Um ajudante pessoal para todas as suas necessidades </p>

<button> <Link to={'/cadastro'}> Junte-se </Link> </button> 
   </div>

          

</section>
</main>

    </div>
  );
}

export default Landing;
