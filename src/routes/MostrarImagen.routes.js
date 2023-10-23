import { Router } from 'express';
import { MostrarImagen, VerImagen } from '../controllers/MostrarImagen.controller.js';

const routerMostrarImagen = Router();


routerMostrarImagen.get('/MostrarImagen/:IdSuscripcion',MostrarImagen);
routerMostrarImagen.get('/VerImagen/:nombre',VerImagen);
 

export default routerMostrarImagen