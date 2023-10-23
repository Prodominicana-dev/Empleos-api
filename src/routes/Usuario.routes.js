import { Router } from 'express';



 import { createNewUsuario,loginUsuario, deleteUsuarioById, getTotalUsuario, getUsuarioId, getUsuario, updateUsuarioById } from "../controllers/Usuario.controller.js";

const routerUsuario = Router();

routerUsuario.get('/Usuario',getUsuario);

routerUsuario.post('/loginUsuario',loginUsuario)



routerUsuario.post('/Usuario',createNewUsuario);
routerUsuario.get('/Usuario/count',getTotalUsuario);
routerUsuario.get('/Usuario/:Id',getUsuarioId);
routerUsuario.delete('/Usuario/:Id',deleteUsuarioById);
routerUsuario.put('/Usuario/:Id',updateUsuarioById);
 

export default routerUsuario