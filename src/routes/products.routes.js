import { Router } from 'express';
import { createNewProduct, getProducts, getProductId, deleteProductById, getTotalProducts, updateProductById } from "../controllers/products.controller.js";
//import {  getVacantes } from "../controllers/Vacantes.controller";

const router = Router();

router.get('/products',getProducts);
router.post('/products',createNewProduct);
router.get('/products/count',getTotalProducts);
router.get('/products/:Id',getProductId);
router.delete('/products/:Id',deleteProductById);
router.put('/products/:Id',updateProductById);

//Vacantes
//router.get('/Vacantes',getVacantes); 

export default router