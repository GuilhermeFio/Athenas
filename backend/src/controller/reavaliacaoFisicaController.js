import * as db from '../repository/reavaliacaoFisicaRepository.js'

import multer from 'multer'
import { Router } from 'express'

import{autenticar} from '../utils/jwt.js'

const Endpoints= Router();

Endpoints.get('/reavaliacao/consultar/:id', autenticar, async (req,resp) => {

    try {
        
       let idCliente = req.params.id
       let registro = await db.consultarReavaliacao(idCliente)
       resp.send (registro) 
      
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })


 Endpoints.post('/reavaliacao/adicionar', autenticar, async (req,resp) => {

    try {
        

       let info = req.body
        info.idUsuario = req.user.id;

       let registro = await db.adicionarReavaliacao(info)
       resp.send ({
        novoId: registro
       })
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })
 
 /*Endpoints.put('/avaliacao/atualizar/:id', async (req,resp) => {
 
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
*/


 export default Endpoints;