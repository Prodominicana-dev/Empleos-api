import { Router } from 'express';
import { MostrarPdf,VerPdf } from "../controllers/MostrarPdf.controller.js";

const routerMostrarPdf = Router();


routerMostrarPdf.get('/MostrarPdf/:IdSuscripcion',MostrarPdf);
routerMostrarPdf.get('/VerPdf/:nombre',VerPdf);
 

export default routerMostrarPdf