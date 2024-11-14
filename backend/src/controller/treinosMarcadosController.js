import * as db from '../repository/treinosMarcadosRepository.js'
import * as cliente from '../repository/clienteRepository.js'
import multer from 'multer'
import { Router } from 'express'

import{autenticar} from '../utils/jwt.js'

const Endpoints= Router();





Endpoints.get('/treinos/:id', autenticar, async (req, resp) => {
    try {
        const id = req.params.id;
        
        const registro = await cliente.treinosMarcadosId(id);
        
        resp.send(registro);
    } catch (err) {
       
        resp.status(404).send({ erro: err.message });
    }
});


Endpoints.get('/treinos', autenticar, async (req, resp) => {
    try {
       
        const registro = await cliente.treinosMarcados();
        resp.send(registro);

    } catch (err) {
        resp.status(404).send({ erro: err.message });
    }
});
 

Endpoints.post('/treinos/adicionar', autenticar, async (req,resp) => {

    try {

       let treinos = req.body
       treinos.idUsuario= req.user.id
       let registro = await db.adicionarTreino(treinos)
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

/*
Endpoints.get('/treinos/:id', async (req,resp) => {

    try {
       let id= req.params.id
       let idUsuario= req.user.id
       let registro = await db.consultarTreino(id,idUsuario)
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

*/


 
 Endpoints.put('/treinos/atualizar/:id',autenticar, async (req,resp) => {
 
    try {
       let id = req.params.id
       let treinos = req.body
 
       let linhasAfetadas = await db.marcarTreinoConcluido(id,treinos);
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

 Endpoints.put('/treinos/atualizarInfo/:id',autenticar, async (req,resp) => {
 
    try {
       let id = req.params.id
       let treinos = req.body
 
       let linhasAfetadas = await db.atualizarTreino(id, treinos);
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

 Endpoints.put('/treinos/atualizardtrev/:id',autenticar, async (req,resp) => {
 
    try {
       let id = req.params.id
       let treinos = req.body
 
       let linhasAfetadas = await db.atualizarDtRevTreino(id, treinos);
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


 

 Endpoints.delete('/treinos/deletar/:id', autenticar, async (req, resp) => {
    try {
        let id = req.params.id;
    

        let linhasAfetadas = await db.deletarTreino(id);
        

        if (linhasAfetadas >= 1) {
            resp.send(); 
        } else {
            resp.status(404).send({ erro: "Treino não encontrado ou já deletado" });
        }
        
    } catch (err) {
        
        resp.status(400).send({ erro: err.message });
    }
});


 export default Endpoints;