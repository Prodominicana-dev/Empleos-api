import { Router } from 'express';
import { createNewInformePerfil, deleteInformePerfilById, getTotalInformePerfil, getInformePerfilId, getInformePerfil, updateInformePerfilById } from "../controllers/InformePerfil.controller.js";

const routerInformePerfil = Router();

routerInformePerfil.get('/InformePerfil', getInformePerfil);
routerInformePerfil.post('/InformePerfil',createNewInformePerfil);
routerInformePerfil.get('/InformePerfil/count',getTotalInformePerfil);
routerInformePerfil.get('/InformePerfil/:Id',getInformePerfilId);
routerInformePerfil.delete('/InformePerfil/:Id',deleteInformePerfilById);
routerInformePerfil.put('/InformePerfil/:Id',updateInformePerfilById);


export default routerInformePerfil