import { getConnection, querysPuestoSolicitado, sql } from "../database/index.js";
// //import querys from "../database/querys";

export const getPuestoSolicitado = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysPuestoSolicitado.getAllPuestoSolicitado);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getPuestoSolicitado01 = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysPuestoSolicitado.getAllquerysPuestoSolicitado01);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewPuestoSolicitado = async(req,res)=>{

    const {IdSuscripcion, IdVacante} = req.body;
    let Estado='None';
    let FechaRegistro = new Date();

    if( IdSuscripcion == null || IdVacante == null ){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("IdSuscripcion", sql.Int, IdSuscripcion)
        .input("IdVacante", sql.Int, IdVacante)
        .input("Estado", sql.VarChar, Estado)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysPuestoSolicitado.createNewPuestoSolicitado);

        res.json({IdSuscripcion, IdVacante, FechaRegistro});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getPuestoSolicitadoById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysPuestoSolicitado.getPuestoSolicitadoById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const getPuestoSolicitadoByIdVacante = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysPuestoSolicitado.getPuestoSolicitadoByIdVacante)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const getPuestoSolicitadoId = async (req,res) => {

    const {IdSuscripcion, IdVacante} = req.body;
    
    //let FechaRegistro = new Date();

    if( IdSuscripcion == null || IdVacante == null ){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
    
    try {
        const pool = await getConnection();

        const result =await pool
        .request()
        .input("IdSuscripcion", sql.Int, IdSuscripcion)
        .input("IdVacante", sql.Int, IdVacante)
        //.input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysPuestoSolicitado.getPuestoSolicitadoId);

        res.send(result.recordset[0]);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    
}

export const deletePuestoSolicitadoById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysPuestoSolicitado.deletePuestoSolicitado)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const deletePuestoSolicitadoByIdVacante = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysPuestoSolicitado.deletePuestoSolicitadoIdVacante)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalPuestoSolicitado = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysPuestoSolicitado.getTotalPuestoSolicitado)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updatePuestoSolicitadoById = async (req, res) => {

    const {IdSuscripcion, IdVacante, Estado} = req.body;
    const {Id} = req.params;

    if( IdSuscripcion == null || IdVacante == null|| Estado == null ){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("IdVacante", sql.Int, IdVacante)
                .input("Estado", sql.VarChar, Estado)
                .input("Id",sql.Int,Id)
                .query(querysPuestoSolicitado.updatePuestoSolicitadoById);
        
                res.json({IdSuscripcion, IdVacante});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};