import { getConnection, querysDiplCurSeminSert, sql } from "../database/index.js";
// //import querys from "../database/querys";

export const getDiplCurSeminSert = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysDiplCurSeminSert.getAllDiplCurSeminSert);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewDiplCurSeminSert = async(req,res)=>{

    const {IdSuscripcion, Certificado, EstadoCerti, FechaInicio, FechaFinal} = req.body;

    let FechaRegistro = new Date();

    // if( IdSuscripcion == null || Certificacion == null || FechaInicio == null || FechaTermino == null){
    //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    // }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("IdSuscripcion", sql.Int, IdSuscripcion)
        .input("Certificado", sql.VarChar, Certificado)
        .input("EstadoCerti", sql.VarChar, EstadoCerti)
        .input("FechaInicio", sql.VarChar, FechaInicio)
        .input("FechaFinal", sql.VarChar, FechaFinal)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysDiplCurSeminSert.createNewDiplCurSeminSert);

        res.json({IdSuscripcion, Certificado, EstadoCerti, FechaInicio, FechaFinal, FechaRegistro});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getDiplCurSeminSertId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysDiplCurSeminSert.getDiplCurSeminSertById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const deleteDiplCurSeminSertById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysDiplCurSeminSert.deleteDiplCurSeminSert)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalDiplCurSeminSert = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysDiplCurSeminSert.getTotalDiplCurSeminSert)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateDiplCurSeminSertById = async (req, res) => {

    const {IdSuscripcion, Certificado, EstadoCerti, FechaInicio, FechaFinal} = req.body;
    const {Id} = req.params;

    // if( IdSuscripcion == null || Certificacion == null || FechaInicio == null || FechaTermino == null){
    //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    // }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("Certificado", sql.VarChar, Certificado)
                .input("EstadoCerti", sql.VarChar, EstadoCerti)
                .input("FechaInicio", sql.VarChar, FechaInicio)
                .input("FechaFinal", sql.VarChar, FechaFinal)
                .input("Id",sql.Int,Id)
                .query(querysDiplCurSeminSert.updateDiplCurSeminSertById);
        
                res.json({IdSuscripcion, Certificado, EstadoCerti, FechaInicio, FechaFinal});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};