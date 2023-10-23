import { getConnection, querysCurriculum, sql } from "../database/index.js"; 
//import multer from "multer";
// const express = require('express');
// const app = express();

// //import querys from "../database/querys";

export const getCurriculum = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysCurriculum.getAllCurriculum);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};
//file storage confing
// const storage = multer.diskStorage({
//     destination:(req,file,callback)=>{
//         callback(null,'./src/uploads');
//     },
//     filename:(req,file,callback)=>{
//         callback(null,`file-${Date.now()}.${file.originalname}`);
//     }
// })
// // file filter
// const isFile =(req,file,callback)=>{
//     if(file.mimetype.startsWith("file")){
//        callback(null,true)
//     }else{
//         callback(null,Error("solo archivo es permitido"))

//     }

// }

// const upload = multer({
//     storage:storage
    
// });

// const upload = multer({ storage }); // Reemplaza con la ruta de la carpeta donde deseas guardar los archivos

// export const uploadFile = (req, res, next) => {
//   upload.single('archivo')(req, res, (error) => {
//     if (error instanceof multer.MulterError) {
//       // Manejar errores de Multer
//       //return res.status(400).json({ error: 'Error al subir el archivo' });
//     } else if (error) {
//       // Manejar otros errores
//       //return res.status(500).json({ error: 'Error del servidor' });
//     }
    
//     // El archivo se ha subido exitosamente
//     next();
//   });
// };



export const createNewCurriculum = async(req,res)=>{
        const {IdSuscripcion} = req.body;
        const Nombre = req.file.filename;
        const Size = req.file.size;

        let FechaRegistro = new Date();

        // // if( IdSuscripcion == null || Nombre == null || Size == null ||  FechaCreacion == null ){
        // //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
        // // }
        
        try {
            const pool = await getConnection(); 

            await pool
            .request()
            .input("IdSuscripcion", sql.Int, IdSuscripcion)
            .input("Nombre", sql.VarChar,Nombre)
            .input("Size", sql.VarChar, Size.toString())
            .input("FechaCreacion", sql.DateTime, null)
            .input("FechaRegistro",sql.DateTime, FechaRegistro)
            .query(querysCurriculum.createNewCurriculum);

            res.json({ message: 'Archivo guardado exitosamente'});
            console.log(req.file);
        } catch (error) {
            res.status(500); 
            res.send(error.message);
        }

};

export const getCurriculumId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysCurriculum.getCurriculumById)

        console.log(result);

        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteCurriculumById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysCurriculum.deleteCurriculum)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalCurriculum = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysCurriculum.getTotalCurriculum)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateCurriculumById = async (req, res) => {

    const {IdSuscripcion, Nombre, Size, FechaCreacion } = req.body;
    const {Id} = req.params;

    if( IdSuscripcion == null || Nombre == null || Size == null ||  FechaCreacion == null ){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("Nombre", sql.VarChar, Nombre)
                .input("Size", sql.VarChar, Size)
                .input("FechaCreacion", sql.DateTime, FechaCreacion)
                .input("Id",sql.Int,Id)
                .query(querysCurriculum.updateCurriculumById);
        
                res.json({IdSuscripcion, Nombre, Size, FechaCreacion});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};