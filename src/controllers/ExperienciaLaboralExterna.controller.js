import { getConnection, querysExperienciaLaboralExterna, sql } from "../database/index.js";
// // //import querys from "../database/querys";

export const getExperienciaLaboralExterna = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysExperienciaLaboralExterna.getAllExperienciaLaboralExterna);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewExperienciaLaboralExterna = async(req,res)=>{

    const {IdSuscripcion, FechaInicial, FechaFinal, NombreCompania, Puesto, Salario, AreaPuesto, Industria, Supervisor, FuncionesLogros, Telefono } = req.body;

    let FechaRegistro = new Date();

    // if( IdSuscripcion == null || FechaInicial == null || FechaFinal == null || NombreCompania == null|| Puesto == null || Salario == null || AreaPuesto == null || Industria == null || Supervisor == null || FuncionesLogros == null || Telefono == null){
    //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    // }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("IdSuscripcion", sql.Int, IdSuscripcion)
        .input("FechaInicial", sql.VarChar, FechaInicial)
        .input("FechaFinal", sql.VarChar, FechaFinal)
        .input("NombreCompania", sql.VarChar, NombreCompania)
        .input("Puesto", sql.VarChar, Puesto)
        .input("Salario", sql.VarChar, Salario)
        .input("AreaPuesto", sql.VarChar, AreaPuesto)
        .input("Industria", sql.VarChar, Industria)
        .input("Supervisor", sql.VarChar, Supervisor)
        .input("FuncionesLogros", sql.Text, FuncionesLogros)
        .input("Telefono", sql.VarChar, Telefono)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysExperienciaLaboralExterna.createNewExperienciaLaboralExterna);

        res.json({IdSuscripcion, FechaInicial, FechaFinal, NombreCompania, Puesto, Salario, AreaPuesto, Industria, Supervisor, FuncionesLogros, Telefono, FechaRegistro});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getExperienciaLaboralExternaId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysExperienciaLaboralExterna.getExperienciaLaboralExternaById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteExperienciaLaboralExternaById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysExperienciaLaboralExterna.deleteExperienciaLaboralExterna)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalExperienciaLaboralExterna = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysExperienciaLaboralExterna.getTotalExperienciaLaboralExterna)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateExperienciaLaboralExternaById = async (req, res) => {

    const {IdSuscripcion, FechaInicial, FechaFinal, NombreCompania, Puesto, Salario, AreaPuesto, Industria, Supervisor, FuncionesLogros, Telefono } = req.body;
    const {Id} = req.params;

    if( IdSuscripcion == null || FechaInicial == null || FechaFinal == null || NombreCompania == null|| Puesto == null || Salario == null || AreaPuesto == null || Industria == null || Supervisor == null || FuncionesLogros == null || Telefono == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("FechaInicial", sql.VarChar, FechaInicial)
                .input("FechaFinal", sql.VarChar, FechaFinal)
                .input("NombreCompania", sql.VarChar, NombreCompania)
                .input("Puesto", sql.VarChar, Puesto)
                .input("Salario", sql.VarChar, Salario)
                .input("AreaPuesto", sql.VarChar, AreaPuesto)
                .input("Industria", sql.VarChar, Industria)
                .input("Supervisor", sql.VarChar, Supervisor)
                .input("FuncionesLogros", sql.Text, FuncionesLogros)
                .input("Telefono", sql.VarChar, Telefono)
                .input("Id",sql.Int,Id)
                .query(querysExperienciaLaboralExterna.updateExperienciaLaboralExternaById);
        
                res.json({IdSuscripcion, FechaInicial, FechaFinal, NombreCompania, Puesto, Salario, AreaPuesto, Industria, Supervisor, FuncionesLogros, Telefono });

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};