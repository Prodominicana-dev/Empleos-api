import { Router } from 'express';
import { createNewReferenciasPersonales, deleteReferenciasPersonalesById, getTotalReferenciasPersonales, getReferenciasPersonalesId, getReferenciasPersonales, updateReferenciasPersonalesById } from "../controllers/ReferenciasPersonales.controller.js";

const routerReferenciasPersonales = Router();

routerReferenciasPersonales.get('/ReferenciasPersonales', getReferenciasPersonales);
routerReferenciasPersonales.post('/ReferenciasPersonales',createNewReferenciasPersonales);
routerReferenciasPersonales.get('/ReferenciasPersonales/count',getTotalReferenciasPersonales);
routerReferenciasPersonales.get('/ReferenciasPersonales/:Id',getReferenciasPersonalesId);
routerReferenciasPersonales.delete('/ReferenciasPersonales/:Id',deleteReferenciasPersonalesById);
routerReferenciasPersonales.put('/ReferenciasPersonales/:Id',updateReferenciasPersonalesById);


export default routerReferenciasPersonales