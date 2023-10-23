import { getConnection, querysEducacion, sql } from "../database/index.js";
// //import querys from "../database/querys";

export const getEducacion = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysEducacion.getAllEducacion);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewEducacion = async(req,res)=>{

    const {IdSuscripcion, PreparacionAcademica, Institución, AreaEstudio, TituloOtorgado, EstadoEstudio, FechaExpedicion, InicioEstudio, TerminoEstudio} = req.body;

    let FechaRegistro = new Date();

    // if( IdSuscripcion == null || PreparacionAcademica == null || Institución == null || AreaEstudio == null || TituloOtorgado == null || EstadoEstudio == null || FechaExpedicion == null || InicioEstudio == null || TerminoEstudio){
    //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    // }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("IdSuscripcion", sql.Int, IdSuscripcion)
        .input("PreparacionAcademica", sql.Text, PreparacionAcademica)
        .input("Institución", sql.VarChar, Institución)
        .input("AreaEstudio", sql.VarChar, AreaEstudio)
        .input("TituloOtorgado", sql.VarChar, TituloOtorgado)
        .input("EstadoEstudio", sql.VarChar, EstadoEstudio)
        .input("FechaExpedicion", sql.VarChar, FechaExpedicion)
        .input("InicioEstudio", sql.VarChar, InicioEstudio)
        .input("TerminoEstudio", sql.VarChar, TerminoEstudio)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysEducacion.createNewEducacion);

        res.json({IdSuscripcion, PreparacionAcademica, Institución, AreaEstudio, TituloOtorgado, EstadoEstudio, FechaExpedicion, InicioEstudio, TerminoEstudio, FechaRegistro});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getEducacionId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysEducacion.getEducacionById)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteEducacionById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysEducacion.deleteEducacion)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalEducacion = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysEducacion.getTotalEducacion)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateEducacionById = async (req, res) => {

    const {IdSuscripcion, PreparacionAcademica, Institución, AreaEstudio, TituloOtorgado, EstadoEstudio, FechaExpedicion, InicioEstudio, TerminoEstudio} = req.body;
    const {Id} = req.params;

    if( IdSuscripcion == null || PreparacionAcademica == null || Institución == null || AreaEstudio == null || TituloOtorgado == null || EstadoEstudio == null || FechaExpedicion == null || InicioEstudio == null || TerminoEstudio==null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("PreparacionAcademica", sql.Text, PreparacionAcademica)
                .input("Institución", sql.VarChar, Institución)
                .input("AreaEstudio", sql.VarChar, AreaEstudio)
                .input("TituloOtorgado", sql.VarChar, TituloOtorgado)
                .input("EstadoEstudio", sql.VarChar, EstadoEstudio)
                .input("FechaExpedicion", sql.VarChar, FechaExpedicion)
                .input("InicioEstudio", sql.VarChar, InicioEstudio)
                .input("TerminoEstudio", sql.VarChar, TerminoEstudio) 
                .input("Id",sql.Int,Id)
                .query(querysEducacion.updateEducacionById);
        
                res.json({IdSuscripcion, PreparacionAcademica, Institución, AreaEstudio, TituloOtorgado, EstadoEstudio, FechaExpedicion, InicioEstudio, TerminoEstudio});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};