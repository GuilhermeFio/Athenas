import { BrowserRouter, Routes, Route} from "react-router-dom"

import Landing from './pages/landing';
import Login from './pages/login';

export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Landing />}> </Route>
                <Route path='/Login' element={<Login />}> </Route>
            
            </Routes>
        </BrowserRouter>


    )


}