import { Router } from 'express';
import {getVacanteIdCategoria, createNewVacantes,getVacanteId01, deleteVacanteById, getTotalVacantes, getVacanteId, getVacantes, updateVacanteById } from "../controllers/Vacantes.controller.js";

const routerVacantes = Router();

routerVacantes.get('/Vacantes', getVacantes);
routerVacantes.post('/Vacantes',createNewVacantes);
routerVacantes.get('/Vacantes/count',getTotalVacantes);
routerVacantes.get('/Vacantes/:Id',getVacanteId);
routerVacantes.get('/Vacantes01/:Id',getVacanteId01);
routerVacantes.get('/Vacantes/Categoria/:Id',getVacanteIdCategoria);
routerVacantes.delete('/Vacantes/:Id',deleteVacanteById);
routerVacantes.put('/Vacantes/:Id',updateVacanteById);
 

export default routerVacantes