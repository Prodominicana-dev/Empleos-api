import { getConnection, querysImagen } from "../database/index.js"; 
import fs from "fs";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);

// Obtener el directorio del archivo actual
const __dirname = dirname(__filename);


export const MostrarImagen = async(req, res)=>{
   

    try {
        const {IdSuscripcion} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",IdSuscripcion)
        .query(querysImagen.getImagenById)


    console.log(result.recordset);
    res.send(result.recordset);
    
    // const ImagenPath = join(__dirname,'../Imagen/'+nombre);
    //     res.sendFile(ImagenPath);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const VerImagen = async(req, res)=>{
        const {nombre} = req.params;
        console.log(nombre)
  
       
        const ImagenPath = join(__dirname,'../Imagen/'+nombre);
        res.sendFile(ImagenPath);
    
    
}
