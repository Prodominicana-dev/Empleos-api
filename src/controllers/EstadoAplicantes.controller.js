import { getConnection, querysEstadoAplicantes, sql } from "../database/index.js";
//import querys from "../database/querys";

export const getEstadoAplicantes = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysEstadoAplicantes.getAllEstadoAplicantes);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewEstadoAplicantes = async(req,res)=>{

    const {IdSuscripcion,IdVacante,Estado} = req.body;

    let FechaRegistro = new Date();

    if(IdSuscripcion == null || IdVacante == null || Estado == null){
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
        .query(querysEstadoAplicantes.createNewEstadoAplicantes);

        res.json({IdSuscripcion,IdVacante,FechaRegistro});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getEstadoAplicantesId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysEstadoAplicantes.getEstadoAplicantesById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteEstadoAplicantesById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysEstadoAplicantes.deleteEstadoAplicantes)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalEstadoAplicantes = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysEstadoAplicantes.getTotalEstadoAplicantes)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateEstadoAplicantesById = async (req, res) => {

    const {IdSuscripcion,IdVacante,Estado} = req.body;
    const {Id} = req.params;

    if(IdSuscripcion== null || IdVacante == null || Estado == null){
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
                .query(querysEstadoAplicantes.updateEstadoAplicantesById);
        
                res.json({IdSuscripcion,IdVacante,Estado});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};