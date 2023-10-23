import { Router } from 'express';
import multer from "multer";
import { createNewImagen, deleteImagenById, getImagen, getImagenId, getTotalImagen, updateImagenById } from '../controllers/Imagen.controller.js';


const routerImagen = Router();
//archivo.......................


const uploadImagen=()=>{

    const storage = multer.diskStorage({
        destination:(req,file,callback)=>{
            
            callback(null,`./src/Imagen`);
        },
        filename:(req,file,callback)=>{
            callback(null,`Imagen-${Date.now()}.${file.originalname}`);
        } 
    })

    const upload = multer({
        storage:storage
    }).single('imagen');

    return upload;
}


routerImagen.get('/Imagen', getImagen);
routerImagen.post('/Imagen',uploadImagen(),async(req, res) => {createNewImagen(req, res)});
routerImagen.get('/Imagen/count',getTotalImagen);
routerImagen.get('/Imagen/:Id',getImagenId);
routerImagen.delete('/Imagen/:Id',deleteImagenById);
routerImagen.put('/Imagen/:Id',updateImagenById);


export default routerImagen