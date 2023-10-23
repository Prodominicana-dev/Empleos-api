import { Router } from 'express';
import { createNewEstadoAplicantes, deleteEstadoAplicantesById, getTotalEstadoAplicantes, getEstadoAplicantesId, getEstadoAplicantes, updateEstadoAplicantesById } from "../controllers/EstadoAplicantes.controller.js";

const routerEstadoAplicantes = Router();

routerEstadoAplicantes.get('/EstadoAplicantes', getEstadoAplicantes);
routerEstadoAplicantes.post('/EstadoAplicantes',createNewEstadoAplicantes);
routerEstadoAplicantes.get('/EstadoAplicantes/count',getTotalEstadoAplicantes);
routerEstadoAplicantes.get('/EstadoAplicantes/:Id',getEstadoAplicantesId);
routerEstadoAplicantes.delete('/EstadoAplicantes/:Id',deleteEstadoAplicantesById);
routerEstadoAplicantes.put('/EstadoAplicantes/:Id',updateEstadoAplicantesById);
 

export default routerEstadoAplicantes