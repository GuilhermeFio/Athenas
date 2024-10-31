import * as db from '../repository/clienteRepository.js'

import multer from 'multer'
import { Router } from 'express'

const Endpoints= Router();


Endpoints.post('/cliente/adicionar', async (req,resp)=>{

try {
    
    let clienteObj= req.body
    let registro= await db.inserirCliente(clienteObj)
    resp.send({registro})

} catch (err) {
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
    
    } catch (err) {
        resp.status(404).send({
            erro : err.message
        })
    }
    })

    
Endpoints.put('/cliente/atualizar/:id', async (req,resp)=>{

    try {
        let id = req.params.id;
        let clienteObj = req.body;

        let linhasAfetadas = await db.atualizarCliente(id, clienteObj);
        if (linhasAfetadas >= 1) {
            resp.send();
        }
        else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    })
    
export default Endpoints;