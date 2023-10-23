import { Router } from 'express';
import { createNewPdf } from "../controllers/CrearPdf.controller.js";

const routerCrearPdf = Router();


routerCrearPdf.post('/CrearPdf',createNewPdf);

 

export default routerCrearPdf