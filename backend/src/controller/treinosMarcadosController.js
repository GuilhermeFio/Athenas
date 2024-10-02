import * as db from '../repository/treinosMarcadosRepository.js'

import multer from 'multer'
import { Router } from 'express'

const Endpoints= Router();


Endpoints.get('/treinos/consultar/', async (req,resp) => {

    try {
       let registro = await db.consultarTreino()
       resp.send (registro)
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })
 
 
 Endpoints.put('/treinos/atualizar/:id', async (req,resp) => {
 
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


 Endpoints.post('/treinos/adicionar/', async (req,resp) => {

    try {

        let treinos = req.body

       let registro = await db.adicionarTreino(treinos)
       resp.send (registro)
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })


 Endpoints.delete('/treinos/deletar/:id', async (req,resp) => {

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