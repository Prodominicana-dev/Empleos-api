import { getConnection, querysReferenciasLaborales, sql } from "../database/index.js";
//import querys from "../database/querys";

export const getReferenciasLaborales = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysReferenciasLaborales.getAllReferenciasLaborales);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewReferenciasLaborales = async(req,res)=>{

    const {IdSuscripcion, NombreCompleto, Telefono, Profesion, Relacion} = req.body;

    let FechaRegistro = new Date();

    // if( IdSuscripcion == null || NombreCompleto == null || Telefono == null || Profesion == null || Relacion == null){
    //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    // }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("IdSuscripcion", sql.Int, IdSuscripcion)
        .input("NombreCompleto", sql.VarChar, NombreCompleto)
        .input("Telefono", sql.VarChar, Telefono)
        .input("Profesion", sql.VarChar, Profesion)
        .input("Relacion", sql.VarChar, Relacion)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysReferenciasLaborales.createNewReferenciasLaborales);

        res.json({IdSuscripcion, NombreCompleto, Telefono, Profesion, Relacion, FechaRegistro});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getReferenciasLaboralesId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysReferenciasLaborales.getReferenciasLaboralesById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const deleteReferenciasLaboralesById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysReferenciasLaborales.deleteReferenciasLaborales)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
   // res.send(result.recordsets);
};

export const getTotalReferenciasLaborales = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysReferenciasLaborales.getTotalReferenciasLaborales)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateReferenciasLaboralesById = async (req, res) => {

    const {IdSuscripcion, NombreCompleto, Telefono, Profesion, Relacion} = req.body;
    const {Id} = req.params;

    if( IdSuscripcion == null || NombreCompleto == null || Telefono == null || Profesion == null || Relacion == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    } 
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("NombreCompleto", sql.VarChar, NombreCompleto)
                .input("Telefono", sql.VarChar, Telefono)
                .input("Profesion", sql.VarChar, Profesion)
                .input("Relacion", sql.VarChar, Relacion)
                .input("Id",sql.Int,Id)
                .query(querysReferenciasLaborales.updateReferenciasLaboralesById);
        
                res.json({IdSuscripcion, NombreCompleto, Telefono, Profesion, Relacion});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};