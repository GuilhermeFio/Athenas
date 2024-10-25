import * as db from '../repository/clienteRepository.js'

import multer from 'multer'
import { Router } from 'express'

const Endpoints= Router();


Endpoints.post('/cliente/adicionar', async (req,resp)=>{

try {
    
    let clienteObj= req.body
    let registro= await db.inserirCliente(clienteObj)
    resp.send(registro)

} catch (error) {
    resp.status(404).send({
        erro : err.message
    })
}
})


Endpoints.get('/cliente/:id', async (req,resp)=>{

    try {
        
        let idCliente= req.params.idCliente;
        let registro= await db.infoCliente(idCliente);
        resp.send(registro);
    
    } catch (error) {
        resp.status(404).send({
            erro : err.message
        })
    }
    })
export default Endpoints;