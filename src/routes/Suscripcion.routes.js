 import { Router } from 'express';


 import { createNewSuscripcion,login, deleteSuscripcionById, getTotalSuscripcion, getSuscripcionId, getSuscripcion, updateSuscripcionById } from "../controllers/Suscripcion.controller.js";

const routerSuscripcion = Router();

routerSuscripcion.get('/Suscripcion',getSuscripcion);

routerSuscripcion.post('/login',login)



routerSuscripcion.post('/Suscripcion',createNewSuscripcion);
routerSuscripcion.get('/Suscripcion/count',getTotalSuscripcion);
routerSuscripcion.get('/Suscripcion/:Id',getSuscripcionId);
routerSuscripcion.delete('/Suscripcion/:Id',deleteSuscripcionById);
routerSuscripcion.put('/Suscripcion/:Id',updateSuscripcionById);
 

export default routerSuscripcion