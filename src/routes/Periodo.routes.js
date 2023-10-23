import { Router } from 'express';
import { createNewPeriodo, deletePeriodoById, getTotalPeriodo, getPeriodoId, getPeriodo, updatePeriodoById } from "../controllers/Periodo.controller.js";

const routerPeriodo = Router();

routerPeriodo.get('/Periodo', getPeriodo);
routerPeriodo.post('/Periodo',createNewPeriodo);
routerPeriodo.get('/Periodo/count',getTotalPeriodo);
routerPeriodo.get('/Periodo/:Id',getPeriodoId);
routerPeriodo.delete('/Periodo/:Id',deletePeriodoById);
routerPeriodo.put('/Periodo/:Id',updatePeriodoById);
 

export default routerPeriodo