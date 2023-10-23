import { Router } from 'express';
import { createNewIdioma, deleteIdiomaById, getTotalIdioma, getIdiomaId, getIdioma, updateIdiomaById } from "../controllers/Idioma.controller.js";

const routerIdioma = Router();

routerIdioma.get('/Idioma', getIdioma);
routerIdioma.post('/Idioma',createNewIdioma);
routerIdioma.get('/Idioma/count',getTotalIdioma);
routerIdioma.get('/Idioma/:Id',getIdiomaId);
routerIdioma.delete('/Idioma/:Id',deleteIdiomaById);
routerIdioma.put('/Idioma/:Id',updateIdiomaById);
 

export default routerIdioma