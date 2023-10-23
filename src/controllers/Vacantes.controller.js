import { getConnection, querysVacantes, sql } from "../database/index.js";
//import querys from "../database/querys";

export const getVacantes = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysVacantes.getAllVacantes);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewVacantes = async(req,res)=>{

    const { NombreVacante, Responsabilidades, PerfilPuesto , Condicion, IdCategoria} = req.body;

    let FechaRegistro = new Date();

    if( NombreVacante == null || Responsabilidades == null || PerfilPuesto == null || IdCategoria == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("NombreVacante", sql.VarChar, NombreVacante)
        .input("Responsabilidades", sql.Text, Responsabilidades)
        .input("PerfilPuesto", sql.Text, PerfilPuesto)
        .input("Condicion", sql.VarChar, Condicion)
        .input("IdCategoria",sql.Int, IdCategoria)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysVacantes.createNewVacantes);

        res.json({NombreVacante, Responsabilidades, PerfilPuesto, Condicion, IdCategoria, FechaRegistro});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getVacanteId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysVacantes.getVacantesById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const getVacanteId01 = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysVacantes.getVacantesById)

        console.log(result);

        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const getVacanteIdCategoria = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysVacantes.getVacantesByIdCategoria)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteVacanteById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysVacantes.deleteVacantes)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalVacantes = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysVacantes.getTotalVacantes)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateVacanteById = async (req, res) => {

    const {NombreVacante, Responsabilidades, PerfilPuesto, Condicion, IdCategoria} = req.body;
    const {Id} = req.params;

    if(NombreVacante == null || Responsabilidades == null || PerfilPuesto == null || IdCategoria == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("NombreVacante", sql.VarChar, NombreVacante)
                .input("Responsabilidades", sql.Text, Responsabilidades)
                .input("PerfilPuesto", sql.Text, PerfilPuesto)
                .input("Condicion", sql.VarChar, Condicion)
                .input("IdCategoria", sql.Int, IdCategoria)
                .input("Id",sql.Int,Id)
                .query(querysVacantes.updateVacantesById);
        
                res.json({NombreVacante, Responsabilidades, PerfilPuesto , Condicion, IdCategoria});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};