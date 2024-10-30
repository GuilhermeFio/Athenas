import { BrowserRouter, Routes, Route} from "react-router-dom"
import Landing from './pages/landingPage';
import Login from './pages/loginUsuario';
import AdicionarTreino from './pages/AdicionarTreino';
import HorarioTreinos from "./pages/horariosTreinos";
import InfoClientes from "./pages/treinoCliente";
import TreinosFinalPend from "./pages/treinosFinalPend";

export default function Navegacao(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing/>}></Route>
                <Route path='/loginUsuario' element={<Login/>}></Route>
                <Route path='/adicionarTreino' element={<AdicionarTreino/>}></Route>
                <Route path='/horariosTreinos' element={<HorarioTreinos/>}></Route>
                <Route path='/treinoCliente' element={<InfoClientes/>}></Route>
                <Route path='/treinoCliente/:id' element={<InfoClientes/>}></Route>
                <Route path='/treinosFinalPend' element={<TreinosFinalPend/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}