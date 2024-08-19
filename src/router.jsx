import { BrowserRouter, Routes, Route} from "react-router-dom"

import Landing from './pages/landing';
import Cadastro from './pages/cadastro';

export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Landing />}> </Route>
                <Route path='/Cadastro' element={<Cadastro />}> </Route>
            
            </Routes>
        </BrowserRouter>


    )


}