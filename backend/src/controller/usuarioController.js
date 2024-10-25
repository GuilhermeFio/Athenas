   /*endpoints*/

   import * as db from '../repository/usuarioRepository.js'

   import multer from 'multer'
   import { Router } from 'express'
   
   const Endpoints= Router();
   
   
   Endpoints.get('/usuario/consultar/', async (req,resp) => {
   
      try {
         let registro = await db.consultarUsuario()
         resp.send (registro)
         
     }
      catch (err) {
         resp.status(404).send({
             erro : err.message
         })
     }
   })
   
   Endpoints.put('/usuario/atualizar/:id', async (req,resp) => {
   
      try {
         let id = req.params.id
         let usuario = req.body
   
         let linhasAfetadas = await db.atualizarUsuario(id,usuario);
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
   
   
   
   let uploadimagem = multer({dest: './storage/imagem'})
   
   Endpoints.put ('/usuario/:id/imagem', uploadimagem.single('imagem'), async (req,resp) => {
   
       try {
           let id = req.params.id
           let caminhoimagem = req.file.path
   
           let linhasAfetadas = await db.alterarimagem (id, caminhoimagem);
           if (linhasAfetadas == 0)
               throw new Error('Nenhuma imagem encontrada')
           resp.status(200).send()
       }
        catch (err) {
           resp.status(404).send({
               erro : err.message
           })
       }
   })
   
   export default Endpoints;