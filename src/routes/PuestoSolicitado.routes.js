import { Router } from 'express';
import { createNewPuestoSolicitado,getPuestoSolicitadoId,getPuestoSolicitado01,getPuestoSolicitadoByIdVacante,deletePuestoSolicitadoByIdVacante, deletePuestoSolicitadoById, getTotalPuestoSolicitado, getPuestoSolicitadoById, getPuestoSolicitado, updatePuestoSolicitadoById } from "../controllers/PuestoSolicitado.controller.js";

const routerPuestoSolicitado = Router();

routerPuestoSolicitado.get('/PuestoSolicitado', getPuestoSolicitado);
routerPuestoSolicitado.get('/PuestoSolicitado01', getPuestoSolicitado01);
routerPuestoSolicitado.post('/PuestoSolicitado',createNewPuestoSolicitado);
routerPuestoSolicitado.post('/PuestoSolicitado1',getPuestoSolicitadoId);
routerPuestoSolicitado.get('/PuestoSolicitado/count',getTotalPuestoSolicitado);
routerPuestoSolicitado.get('/PuestoSolicitado/:Id',getPuestoSolicitadoById);
routerPuestoSolicitado.delete('/PuestoSolicitado/:Id',deletePuestoSolicitadoById);
routerPuestoSolicitado.get('/PuestoSolicitado3/:Id',getPuestoSolicitadoByIdVacante);

routerPuestoSolicitado.delete('/PuestoSolicitado2/:Id',deletePuestoSolicitadoByIdVacante);

routerPuestoSolicitado.put('/PuestoSolicitado/:Id',updatePuestoSolicitadoById);
 

export default routerPuestoSolicitado