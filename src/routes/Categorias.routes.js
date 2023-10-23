import { Router } from 'express';
import { createNewCategoria, deleteCategoriaById, getTotalCategoria, getCategoriaId, getCategoria, updateCategoriaById } from "../controllers/Categoria.controller.js";

const routerCategoria = Router();

routerCategoria.get('/Categoria', getCategoria);
routerCategoria.post('/Categoria',createNewCategoria);
routerCategoria.get('/Categoria/count',getTotalCategoria);
routerCategoria.get('/Categoria/:Id',getCategoriaId);
routerCategoria.delete('/Categoria/:Id',deleteCategoriaById);
routerCategoria.put('/Categoria/:Id',updateCategoriaById);
 

export default routerCategoria