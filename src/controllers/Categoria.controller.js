import { getConnection, querysCategoria, sql } from "../database/index.js";
//import querys from "../database/querys";

export const getCategoria = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysCategoria.getAllCategoria);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewCategoria = async(req,res)=>{

    const {Categoria} = req.body;

    let FechaRegistro = new Date();

    // if( NombreVacante == null || Responsabilidades == null || PerfilPuesto == null){
    //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    // }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("Categoria", sql.VarChar, Categoria)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysCategoria.createNewCategoria);

        res.json({Categoria});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getCategoriaId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysCategoria.getCategoriaById)

        console.log(result);

        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteCategoriaById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysCategoria.deleteCategoria)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalCategoria = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysCategoria.getTotalCategoria)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateCategoriaById = async (req, res) => {

    const {Categoria} = req.body;
    const {Id} = req.params;

    if(NombreVacante == null || Responsabilidades == null || PerfilPuesto == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("Categoria", sql.VarChar, Categoria)
                .input("Id",sql.Int,Id)
                .query(querysCategoria.updateCategoriaById);
        
                res.json({Categoria});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};