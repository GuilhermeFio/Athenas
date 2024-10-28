import * as db from '../repository/avaliacaoFisicaRepository.js'

import multer from 'multer'
import { Router } from 'express'

const Endpoints= Router();

Endpoints.get('/avaliacao/consultar/:idCliente', async (req,resp) => {

    try {

       let idCliente = req.params.idCliente
       let registro = await db.consultarAvaliacao(idCliente)
       resp.send (registro) 
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })


 Endpoints.post('/avaliacao/adicionar', async (req,resp) => {

    try {

       let info = req.body
       let registro = await db.adicionarAvaliacao(info)
       resp.send ({registro})
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })

 
 Endpoints.put('/avaliacao/atualizar/:id', async (req,resp) => {
 
    try {
       let id = req.params.id
       let info = req.body
 
       let linhasAfetadas = await db.atualizarAvaliacao(id,info);
       if (linhasAfetadas >=1){
           resp.send();
       }
       else {
           resp.status(404).send({erro: 'Nenhum registro encontrado'})
       }
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })



 export default Endpoints;