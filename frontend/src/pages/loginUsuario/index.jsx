import { Link } from 'react-router-dom'
import './index.scss'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()

  async function entrar(){
    const usuario = {
      "nome": email,
      "senha": senha
    }

    const url = 'http://localhost:4000/entrar/'
    let resp = await axios.post(url,usuario)

    if (resp.data.erro != undefined){
      alert(resp.data.erro)
    }
    else {
      localStorage.setItem('USUARIO', resp.data.token)
      navigate('/horariosTreinos')
    }
  }

  return (

    <div className="login-page pagina">

      <main>
        <section className="secao1 secao" >

          <Link to={'/'}><i id='voltar' className="fa-solid fa-arrow-left"> </i> </Link>

          <div className='login'>
            <h1> Acesse sua área de trabalho abaixo: </h1>

            <div className='informacoes'>

              <input id='email' type='text' placeholder='E-mail' value={email} onChange={(e) =>setEmail(e.target.value)}/>

              <input id='senha' type='text' placeholder='Senha' value={senha} onChange={(e) =>setSenha(e.target.value)} />

              <button onClick={entrar}> Fazer login</button>

            </div>


          </div>



        </section>
      </main>

    </div>
  );
}