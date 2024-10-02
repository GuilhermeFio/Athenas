import * as db from '../repository/loginRepository.js'

import multer from 'multer'
import { Router } from 'express'

const Endpoints= Router();


Endpoints.get('/login/consultar', async (req,resp) => {

    try {
       let registro = await db.consultarLogin()
       resp.send (registro)
       
   }
    catch (err) {
       resp.status(404).send({
           erro : err.message
       })
   }
 })

 export default Endpoints;