import * as db from '../repository/treinosMarcadosRepository.js'
import * as cliente from '../repository/clienteRepository.js'
import multer from 'multer'
import { Router } from 'express'

import{autenticar} from '../utils/jwt.js'

const Endpoints= Router();




Endpoints.get('/treinos/:id', autenticar, async (req,resp) => {

    try {
         let idCliente= req.params.idCliente

       let registro = await cliente.treinosMarcados(idCliente)
       resp.send (registro)
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })
 

Endpoints.post('/treinos/adicionar',autenticar, async (req,resp) => {

    try {

       let treinos = req.body
       treinos.idUsuario= req.user.id
       let registro = await db.adicionarTreino(treinos)
       resp.send ({registro})
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })


Endpoints.get('/treinos', async (req,resp) => {

    try {

       let idUsuario= req.user.id
       let registro = await db.consultarTreino(idUsuario)
       resp.send (registro)
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })

 Endpoints.get('/treinos', async (req,resp) => {

    try {

         let id= req.params.id
         let registro = await db.consultarTreinoPorId(id)
         resp.send (registro)
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })




 
 Endpoints.put('/treinos/atualizar/:id',autenticar, async (req,resp) => {
 
    try {
       let id = req.params.id
       let treinos = req.body
 
       let linhasAfetadas = await db.atualizarTreino(id,treinos);
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


 


 Endpoints.delete('/treinos/deletar/:id',autenticar, async (req,resp) => {

    try {

        let id = req.params.id

       let registro = await db.deletarTreino(id)
       resp.send (registro)
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })

 export default Endpoints;