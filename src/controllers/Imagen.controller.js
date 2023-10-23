import { getConnection, querysImagen, sql } from "../database/index.js"; 


export const getImagen = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysImagen.getAllImagen);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};




export const createNewImagen = async(req,res)=>{
        const {IdSuscripcion} = req.body;
        const Nombre = req.file.filename;

        let FechaRegistro = new Date();

        try {
            const pool = await getConnection(); 

            await pool
            .request()
            .input("IdSuscripcion", sql.Int, IdSuscripcion)
            .input("Nombre", sql.VarChar,Nombre)
            .input("FechaRegistro",sql.DateTime, FechaRegistro)
            .query(querysImagen.createNewImagen);

            res.json({ message: 'Imagen guardado exitosamente'});
            console.log(req.file);
        } catch (error) {
            res.status(500); 
            res.send(error.message);
        }

};

export const getImagenId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysImagen.getImagenById)

        console.log(result);

        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteImagenById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysImagen.deleteImagen)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const getTotalImagen = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysImagen.getTotalImagen)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateImagenById = async (req, res) => {

    const {IdSuscripcion, Nombre} = req.body;
    const {Id} = req.params;

    if( IdSuscripcion == null || Nombre == null ){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("Nombre", sql.VarChar, Nombre)
                .input("Id",sql.Int,Id)
                .query(querysImagen.updateImagenById);
        
                res.json({IdSuscripcion, Nombre});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};