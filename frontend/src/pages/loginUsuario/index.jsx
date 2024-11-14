import { Link } from 'react-router-dom'
import './index.scss'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, {Toaster} from 'react-hot-toast';

export default function Login() {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const navigate = useNavigate()

  async function entrar(){
    const usuario = {
      "usuario": email,
      "senha": senha
    }

    const url = 'http://localhost:5008/entrar/'
    let resp = await axios.post(url,usuario)

    if (resp.data.erro != undefined){
      toast.error(resp.data.erro)
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
          
          <div className='login'>
            <h1> Acesse sua área de trabalho abaixo: </h1>

            <div className='informacoes'>

              <input id='email' type='text' placeholder='Usuário' value={email} onChange={(e) =>setEmail(e.target.value)}/>

              <input id='senha' type='text' placeholder='Senha' value={senha} onChange={(e) =>setSenha(e.target.value)} />

              <button onClick={entrar}> Fazer login </button>

            </div>

          </div>

        </section>
        
      </main>
      
      <Toaster/>

    </div>
  );
}