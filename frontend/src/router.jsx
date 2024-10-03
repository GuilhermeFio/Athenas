import { BrowserRouter, Routes, Route} from "react-router-dom"

import Landing from './pages/landingPage';
import Login from './pages/loginUsuario';
import AdicionarTreino from './pages/adicionarTreino';
import HorarioTreinos from "./pages/horariosTreinos";
import InfoClientes from "./pages/treinoCliente";
import TreinosFinalizados from "./pages/treinosFinalizados";


export default function Navegacao(){

    return (

        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Landing />}> </Route>
                <Route path='/loginUsuario' element={<Login />}> </Route>
                <Route path='/adicionarTreino' element={<AdicionarTreino />}> </Route>
                <Route path='/horariosTreinos' element={<HorarioTreinos />}> </Route>
                <Route path='/treinoCliente' element={<InfoClientes />}> </Route>
                <Route path='/treinosFinalizados' element={<TreinosFinalizados />}> </Route>

            </Routes>
        </BrowserRouter>


    )


}