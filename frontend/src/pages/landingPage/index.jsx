import './index.scss';
import { Link } from 'react-router-dom'
import Footer from '../../components/footer';

function Landing() {
  return (

    <div className="landing-page pagina">

      <header className='cabecalho'>

        <img className='logo' src='/assets/images/logo_1.png' />

        <div className='opcoes'>
          <p> Personal Trainer  </p>
          <p> Sobre o Athenas   </p>
          <p>  Contato </p>
        </div>
      </header>

      <main>
        <section className="secao1 secao" >
          <img className='fundo' src='/assets/images/young-happy-sportswoman-getting-ready-workout-tying-shoelace-fitness-center.jpg' />

          <div className='texto1'>
            <h1> Bem-vinda à Athenas</h1>
            <p> Um ajudante pessoal para todas as suas necessidades </p>

            <button className='Login-button'> <Link to={'/loginUsuario'}> <p className='Acesse'> Acesse sua conta </p> </Link> </button>
          </div>



        </section>

        <section className='secao2 secao'>

          <img className='img2' src='/assets/images/Img-secao2.jpg' />

          <div className='texto2'>

            <h2> Personal, seu trabalho é importante!</h2>
            <h3> Aqui vai um pouco de suas atiribuições como profissional:</h3>

            <ul className='tarefasPersonal'>

              <li> Aumentar o conhecimento do cliente sobre condicionamento físico em geral;</li>
              <li> Ajudar no aperfeiçoamento da execução de exercícios;</li>
              <li>Indicar profissionais para orientações nutricionais;</li>
              <li> Aumentar a confiança e a motivação do cliente durante os treinos.</li>

            </ul>


          </div>

        </section>

        <section className='secao3 secao'>


          <div className='infoPersonal'>
            <img className='ImgPersonal' src='assets/images/Autonomo.jpg' />
            <h2> Nome completo </h2>
            <h2> Atuando desde 2011</h2>

            <div className='SobreAutonomo'>

              <p> Um pouco sobre o autônomo; desejos; sonhos; porque quis atuar como tal </p>

            </div>

          </div>


          <div className='Formacoes'>

            <h2> Minhas formações: </h2>

            <div>
              <h2> Graduação em Educação Física
                UNIBAM </h2>
            </div>

            <div>
              <h2> Formação em Treinamento Funcional
                Core 360 </h2>
            </div>

            <div>
              <h2> Pós-Graduação em Fisiologia
                Exercício CEFIT </h2>
            </div>

            <i id='award' class="fa-solid fa-award"></i>

          </div>




        </section>



        <section className='secao4 secao'>

          <div className='container'>

          <h1> Sobre o Athenas </h1>
          <p className='olhada'> Dê uma olhada no que podemos oferecer para você antes de embarcar nessa aventura conosco!</p>


          <div className='tasks'>

          <div className='Planejamento'>
              <div className='titulo1'>   <i class="fa-solid fa-pen"></i> <h2> Planejamento de treinos</h2> </div>
              
              <i id='relogio' class="fa-regular fa-clock"></i>

              <p> Ferramentas próprias para a organização de seus treinos. </p>
            </div>


            <div className='Suporte'>
              <div className='titulo2'> <i class="fa-solid fa-check"></i> <h2> Suporte para avaliação física </h2> </div>
              
              <i id='prencheta' class="fa-regular fa-clipboard"></i>

              <p> Análise dos atributos físicos do cliente para melhor auxílio aos objetivos dele. </p>
            </div>


            <div className='Segurança'>
              <div className='titulo3'> <i class="fa-regular fa-thumbs-up"></i> <h2> Segurança de dados dedicada </h2> </div>
              
              <i id='escudo' class="fa-solid fa-shield"></i>

              <p> Proteção assegurada para seus dados e informações de seus clientes. </p>
            </div>
          </div>
           


          </div>




        </section>

        <section className='secao5 secao'>

    <h1> Escolha a opção que mais lhe agrada para nos contatar
    caso tenha alguma dúvida em relação ao seu site: </h1>

    <div className='OpcoesContato'>

<div className='Whatsapp'>

<div className='titulo1'> 
<i id='whats' class="fa-brands fa-whatsapp"></i> <h2> WhatsApp:</h2> </div>
<h3> +55 11 95775-0999</h3>

</div>

<div className='Email'>

<div className='titulo2'> 
<i id='email' class="fa-solid fa-envelope"></i> <h2> E-Mail:</h2> </div>
<h3> suportedevfox@gmail.com </h3>

</div>

<div className='Web'>

<div className='titulo3'> 
<i id='globo' class="fa-solid fa-globe"></i> <h2> Website:</h2> </div>
<h3> www.devfox.com </h3>

</div>

    </div>

    <h1 className='atend'> Atendimento: De segunda à sábado, das 9:30 às 18:30 </h1>
        </section>
    </main>

      <Footer />

    </div>
  );
}

export default Landing;