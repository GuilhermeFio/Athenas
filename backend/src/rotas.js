import usuarioController from './controller/usuarioController.js'
import loginController from './controller/loginController.js'
import avaliacaoFisicaController from './controller/avaliacaoFisicaController.js'
import treinosMarcadosController from './controller/treinosMarcadosController.js'
import reavaliacaoFisicaController from './controller/reavaliacaoFisicaController.js'
import clienteController from './controller/clientesController.js'

export default function AdicionarRotas(servidor){
    servidor.use(usuarioController, loginController, avaliacaoFisicaController, treinosMarcadosController, reavaliacaoFisicaController, clienteController)
    }