import { BrowserRouter, Routes, Route} from "react-router-dom"

import Landing from './pages/landing';
import Login from './pages/login';
import AdicionarTreino from "./pages/AdicionarTreino";
import HorarioTreinos from "./pages/HorarioTreinos";
import InfoClientes from "./pages/InfoClientes";
import TreinosFinalizados from "./pages/TreinosFinalizados";


export default function Navegacao(){

    return (

        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Landing />}> </Route>
                <Route path='/Login' element={<Login />}> </Route>
                <Route path='/AdicionarTreino' element={<AdicionarTreino />}> </Route>
                <Route path='/HorarioTreinos' element={<HorarioTreinos />}> </Route>
                <Route path='/InfoClientes' element={<InfoClientes />}> </Route>
                <Route path='/TreinosFinalizados' element={<TreinosFinalizados />}> </Route>

            </Routes>
        </BrowserRouter>


    )


}