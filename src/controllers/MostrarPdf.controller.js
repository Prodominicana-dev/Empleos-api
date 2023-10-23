import { getConnection, querysCurriculum, sql } from "../database/index.js"; 
import fs from "fs";
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);

// Obtener el directorio del archivo actual
const __dirname = dirname(__filename);


export const MostrarPdf = async(req, res)=>{
   

    try {
        const {IdSuscripcion} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",IdSuscripcion)
        .query(querysCurriculum.getCurriculumById)


    console.log(result.recordset);
    res.send(result.recordset);


    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const VerPdf = async(req, res)=>{
        const {nombre} = req.params;
        console.log(nombre)
  
       
        const filePath = join(__dirname, '../uploads', nombre);

    
    if (fs.existsSync(filePath)) {
        // Establecer las cabeceras del archivo PDF en la respuesta
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `inline; filename=${nombre}`);
    
        // Leer el archivo y enviarlo al cliente
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
      } else {
        // Si el archivo no existe, enviar una respuesta de error al cliente
        res.status(404).send('El archivo no existe.');
      }
}
 