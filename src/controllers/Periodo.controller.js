import { getConnection, querysPeriodo, sql } from "../database/index.js";
//import querys from "../database/querys";

export const getPeriodo = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysPeriodo.getAllPeriodo);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewPeriodo = async(req,res)=>{

    const {IdVacante,Estado} = req.body;

    let FechaRegistro = new Date();

    if( IdVacante == null || Estado == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("IdVacante", sql.Int, IdVacante)
        .input("Estado", sql.VarChar, Estado)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysPeriodo.createNewPeriodo);

        res.json({IdVacante,Estado,FechaRegistro});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getPeriodoId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysPeriodo.getPeriodoById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deletePeriodoById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysPeriodo.deletePeriodo)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalPeriodo = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysPeriodo.getTotalPeriodo)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updatePeriodoById = async (req, res) => {

    const {IdVacante,Estado} = req.body;
    const {Id} = req.params;

    if( IdVacante == null || Estado == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdVacante", sql.Int, IdVacante)
                .input("Estado", sql.VarChar, Estado)
                .input("Id",sql.Int,Id)
                .query(querysPeriodo.updatePeriodoById);
        
                res.json({IdVacante,Estado});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};