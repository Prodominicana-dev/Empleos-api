import { Router } from 'express';
import { Correo } from "../controllers/Correo.controller.js";

const routerCorreo = Router();


routerCorreo.post('/Correo',Correo);

 

export default routerCorreo