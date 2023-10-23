import { Router } from 'express';
import { createNewExperienciaLaboralExterna, deleteExperienciaLaboralExternaById, getTotalExperienciaLaboralExterna, getExperienciaLaboralExternaId, getExperienciaLaboralExterna, updateExperienciaLaboralExternaById } from "../controllers/ExperienciaLaboralExterna.controller.js";

const routerExperienciaLaboralExterna = Router();

routerExperienciaLaboralExterna.get('/ExperienciaLaboralExterna', getExperienciaLaboralExterna);
routerExperienciaLaboralExterna.post('/ExperienciaLaboralExterna',createNewExperienciaLaboralExterna);
routerExperienciaLaboralExterna.get('/ExperienciaLaboralExterna/count',getTotalExperienciaLaboralExterna);
routerExperienciaLaboralExterna.get('/ExperienciaLaboralExterna/:Id',getExperienciaLaboralExternaId);
routerExperienciaLaboralExterna.delete('/ExperienciaLaboralExterna/:Id',deleteExperienciaLaboralExternaById);
routerExperienciaLaboralExterna.put('/ExperienciaLaboralExterna/:Id',updateExperienciaLaboralExternaById);
 

export default routerExperienciaLaboralExterna