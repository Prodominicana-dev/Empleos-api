 import { getConnection, querysIdioma, sql } from "../database/index.js";
// // //import querys from "../database/querys";

export const getIdioma = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysIdioma.getAllIdioma);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewIdioma = async(req,res)=>{

    const {IdSuscripcion, Idioma, NombreInstitucion, NivelConversacion, NivelLectura, NivelEscritura, CapacidadTraducir} = req.body;

    let FechaRegistro = new Date();

    if( IdSuscripcion == null || Idioma == null || NombreInstitucion == null || NivelConversacion == null || NivelLectura == null || NivelEscritura == null || CapacidadTraducir == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("IdSuscripcion", sql.Int, IdSuscripcion)
        .input("Idioma", sql.VarChar, Idioma)
        .input("NombreInstitucion", sql.VarChar, NombreInstitucion)
        .input("NivelConversacion", sql.VarChar, NivelConversacion)
        .input("NivelLectura", sql.VarChar, NivelLectura)
        .input("NivelEscritura", sql.VarChar, NivelEscritura)
        .input("CapacidadTraducir", sql.VarChar, CapacidadTraducir)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysIdioma.createNewIdioma);

        res.json({IdSuscripcion, Idioma, NombreInstitucion, NivelConversacion, NivelLectura, NivelEscritura, CapacidadTraducir});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getIdiomaId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysIdioma.getIdiomaById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteIdiomaById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysIdioma.deleteIdioma)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalIdioma = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysIdioma.getTotalIdioma)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateIdiomaById = async (req, res) => {

    const {IdSuscripcion, Idioma, NombreInstitucion, NivelConversacion, NivelLectura, NivelEscritura, CapacidadTraducir} = req.body;
    const {Id} = req.params;

    if( IdSuscripcion == null || Idioma == null || NombreInstitucion == null || NivelConversacion == null || NivelLectura == null || NivelEscritura == null || CapacidadTraducir == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("Idioma", sql.VarChar, Idioma)
                .input("NombreInstitucion", sql.VarChar, NombreInstitucion)
                .input("NivelConversacion", sql.VarChar, NivelConversacion)
                .input("NivelLectura", sql.VarChar, NivelLectura)
                .input("NivelEscritura", sql.VarChar, NivelEscritura)
                .input("CapacidadTraducir", sql.VarChar, CapacidadTraducir)
                .input("Id",sql.Int,Id)
                .query(querysIdioma.updateIdiomaById);
        
                res.json({IdSuscripcion, Idioma, NombreInstitucion, NivelConversacion, NivelLectura, NivelEscritura, CapacidadTraducir});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};