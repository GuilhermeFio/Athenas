import 'dotenv/config.js'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

import AdicionarRotas from './rotas.js'

const servidor= express();

servidor.use(bodyParser.json({ limit: '10mb' }));
servidor.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

servidor.use(cors())
servidor.use(express.json())

AdicionarRotas(servidor)

servidor.listen(process.env.PORTA, () => console.log(`A API SUBIU NA ${process.env.PORTA}` ));