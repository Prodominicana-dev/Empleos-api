import { Router } from 'express';
import { createNewEducacion, deleteEducacionById, getTotalEducacion, getEducacionId, getEducacion, updateEducacionById } from "../controllers/Educacion.controller.js";

const routerEducacion = Router();

routerEducacion.get('/Educacion', getEducacion);
routerEducacion.post('/Educacion',createNewEducacion);
routerEducacion.get('/Educacion/count',getTotalEducacion);
routerEducacion.get('/Educacion/:Id',getEducacionId);
routerEducacion.delete('/Educacion/:Id',deleteEducacionById);
routerEducacion.put('/Educacion/:Id',updateEducacionById);
 

export default routerEducacion