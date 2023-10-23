import { Router } from 'express';
import { getAplicantesId} from "../controllers/Aplicantes.controller.js";

const routerAplicantes = Router();

routerAplicantes.get('/Aplicantes/:Id',getAplicantesId);;

 

export default routerAplicantes