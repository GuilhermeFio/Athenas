import * as db from '../repository/reavaliacaoFisicaRepository.js'

import multer from 'multer'
import { Router } from 'express'

const Endpoints= Router();

Endpoints.post('/reavaliacao', async (req,resp) =>{

try {
let info= req.body;

let registro = await db.inserirReavaliacaoFisica(info)
resp.send(registro);
    
} catch (error) {
    resp.status(404).send({
        erro : err.message
    })
}
})

export default Endpoints;