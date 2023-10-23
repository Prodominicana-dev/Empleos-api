import { getConnection, querysReferenciasPersonales, sql } from "../database/index.js";
//import querys from "../database/querys";

export const getReferenciasPersonales = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysReferenciasPersonales.getAllReferenciasPersonales);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewReferenciasPersonales = async(req,res)=>{

    const {IdSuscripcion, NombreCompleto, Telefono, Ocupacion} = req.body;

    let FechaRegistro = new Date();

    if( IdSuscripcion == null || NombreCompleto == null || Telefono == null || Ocupacion == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("IdSuscripcion", sql.Int, IdSuscripcion)
        .input("NombreCompleto", sql.VarChar, NombreCompleto)
        .input("Telefono", sql.VarChar, Telefono)
        .input("Ocupacion", sql.VarChar, Ocupacion)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysReferenciasPersonales.createNewReferenciasPersonales);

        res.json({IdSuscripcion, NombreCompleto, Telefono, Ocupacion, FechaRegistro});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getReferenciasPersonalesId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysReferenciasPersonales.getReferenciasPersonalesById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const deleteReferenciasPersonalesById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysReferenciasPersonales.deleteReferenciasPersonales)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalReferenciasPersonales = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysReferenciasPersonales.getTotalReferenciasPersonales)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateReferenciasPersonalesById = async (req, res) => {

    const {IdSuscripcion, NombreCompleto, Telefono, Ocupacion} = req.body;
    const {Id} = req.params;

    if( IdSuscripcion == null || NombreCompleto == null || Telefono == null || Ocupacion == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("NombreCompleto", sql.VarChar, NombreCompleto)
                .input("Telefono", sql.VarChar, Telefono)
                .input("Ocupacion", sql.VarChar, Ocupacion)
                .input("Id",sql.Int,Id)
                .query(querysReferenciasPersonales.updateReferenciasPersonalesById);
        
                res.json({IdSuscripcion, NombreCompleto, Telefono, Ocupacion});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};