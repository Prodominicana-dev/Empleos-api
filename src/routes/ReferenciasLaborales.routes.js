import { Router } from 'express';
import { createNewReferenciasLaborales, deleteReferenciasLaboralesById, getTotalReferenciasLaborales, getReferenciasLaboralesId, getReferenciasLaborales, updateReferenciasLaboralesById } from "../controllers/ReferenciasLaborales.controller.js";

const routerReferenciasLaborales = Router();

routerReferenciasLaborales.get('/ReferenciasLaborales', getReferenciasLaborales);
routerReferenciasLaborales.post('/ReferenciasLaborales',createNewReferenciasLaborales);
routerReferenciasLaborales.get('/ReferenciasLaborales/count',getTotalReferenciasLaborales);
routerReferenciasLaborales.get('/ReferenciasLaborales/:Id',getReferenciasLaboralesId);
routerReferenciasLaborales.delete('/ReferenciasLaborales/:Id',deleteReferenciasLaboralesById);
routerReferenciasLaborales.put('/ReferenciasLaborales/:Id',updateReferenciasLaboralesById);


export default routerReferenciasLaborales