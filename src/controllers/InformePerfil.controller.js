import { getConnection, querysInformePerfil, sql } from "../database/index.js";
// // //import querys from "../database/querys";

export const getInformePerfil = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysInformePerfil.getAllInformePerfil);
        console.log(result);
        res.json(result.recordsets[0]);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewInformePerfil = async(req,res)=>{

    const {IdSuscripcion, Nombre, Apellidos, Email, Movil, TelefonoFijo, PaisNacimiento, Nacionalidad, Sexo, FechaNacimiento, TipoDocumento, NumeroDocumento, EstadoCivil, Provincia,
         ParienteTrabajo, TieneLicenCondicir, PosseVehiculo, ParentescoEmergente, NombreParentesco, TelefonoParentesco, SuleldoAspira, preguntaEmpleado, PreguntaPariente} = req.body;

    let FechaRegistro = new Date();

    // if( IdSuscripcion == null || Nombre == null || Apellidos == null || Email == null || Movil == null || TelefonoFijo == null || PaisNacimiento == null || Nacionalidad == null || Sexo == null || FechaNacimiento == null || TipoDocumento == null || NumeroDocumento == null || EstadoCivil == null || Provincia == null || Municipio == null || Calle == null || Sector == null || EdificioNumero == null || TieneLicenCondicir == null || PosseVehiculo == null || ParentescoEmergente == null || NombreParentesco == null || TelefonoParentesco == null || SuleldoAspira == null || preguntaEmpleado == null || PreguntaPariente == null){
    //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    // }
    
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("IdSuscripcion", sql.Int, IdSuscripcion)
        .input("Nombre", sql.VarChar, Nombre)
        .input("Apellidos", sql.VarChar, Apellidos)
        .input("Email", sql.VarChar, Email)
        .input("Movil", sql.VarChar, Movil)
        .input("TelefonoFijo", sql.VarChar, TelefonoFijo)
        .input("PaisNacimiento", sql.VarChar, PaisNacimiento)
        .input("Nacionalidad", sql.VarChar, Nacionalidad)
        .input("Sexo", sql.VarChar, Sexo)
        .input("FechaNacimiento", sql.VarChar, FechaNacimiento)
        .input("TipoDocumento", sql.VarChar, TipoDocumento)
        .input("NumeroDocumento", sql.VarChar, NumeroDocumento)
        .input("EstadoCivil", sql.VarChar, EstadoCivil)
        .input("Provincia", sql.VarChar, Provincia)
        .input("ParienteTrabajo", sql.VarChar, ParienteTrabajo)
        .input("TieneLicenCondicir", sql.VarChar, TieneLicenCondicir)
        .input("PosseVehiculo", sql.VarChar, PosseVehiculo)
        .input("ParentescoEmergente", sql.VarChar, ParentescoEmergente)
        .input("NombreParentesco", sql.VarChar, NombreParentesco)
        .input("TelefonoParentesco", sql.VarChar, TelefonoParentesco)
        .input("SuleldoAspira", sql.VarChar, SuleldoAspira)
        .input("preguntaEmpleado", sql.VarChar, preguntaEmpleado)
        .input("PreguntaPariente", sql.VarChar, PreguntaPariente)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysInformePerfil.createNewInformePerfil);

        res.json({IdSuscripcion, Nombre, Apellidos, Email, Movil, TelefonoFijo, PaisNacimiento, Nacionalidad, Sexo, FechaNacimiento, TipoDocumento, NumeroDocumento, EstadoCivil, Provincia,  
             ParienteTrabajo, TieneLicenCondicir, PosseVehiculo, ParentescoEmergente, NombreParentesco, TelefonoParentesco, SuleldoAspira, preguntaEmpleado, PreguntaPariente});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getInformePerfilId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysInformePerfil.getInformePerfilById)

        console.log(result);

        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteInformePerfilById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysInformePerfil.deleteInformePerfil)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalInformePerfil = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysInformePerfil.getTotalInformePerfil)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateInformePerfilById = async (req, res) => {

    const {IdSuscripcion, Nombre, Apellidos, Email, Movil, TelefonoFijo, PaisNacimiento, Nacionalidad, Sexo, FechaNacimiento, TipoDocumento, NumeroDocumento, EstadoCivil, Provincia,
         ParienteTrabajo, TieneLicenCondicir, PosseVehiculo, ParentescoEmergente, NombreParentesco, TelefonoParentesco, SuleldoAspira, preguntaEmpleado, PreguntaPariente} = req.body;

    const {Id} = req.params;

    // if( IdSuscripcion == null || Nombre == null || Apellidos == null || Email == null || Movil == null || TelefonoFijo == null || PaisNacimiento == null || Nacionalidad == null || Sexo == null || FechaNacimiento == null || TipoDocumento == null || NumeroDocumento == null || EstadoCivil == null || Provincia == null || Municipio == null || Calle == null || Sector == null || EdificioNumero == null || TieneLicenCondicir == null || PosseVehiculo == null || ParentescoEmergente == null || NombreParentesco == null || TelefonoParentesco == null || SuleldoAspira == null || preguntaEmpleado == null || PreguntaPariente == null){
    //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    // }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("IdSuscripcion", sql.Int, IdSuscripcion)
                .input("Nombre", sql.VarChar, Nombre)
                .input("Apellidos", sql.VarChar, Apellidos)
                .input("Email", sql.VarChar, Email)
                .input("Movil", sql.VarChar, Movil)
                .input("TelefonoFijo", sql.VarChar, TelefonoFijo)
                .input("PaisNacimiento", sql.VarChar, PaisNacimiento)
                .input("Nacionalidad", sql.VarChar, Nacionalidad)
                .input("Sexo", sql.VarChar, Sexo)
                .input("FechaNacimiento", sql.VarChar, FechaNacimiento)
                .input("TipoDocumento", sql.VarChar, TipoDocumento)
                .input("NumeroDocumento", sql.VarChar, NumeroDocumento)
                .input("EstadoCivil", sql.VarChar, EstadoCivil)
                .input("Provincia", sql.VarChar, Provincia)
                .input("ParienteTrabajo", sql.VarChar, ParienteTrabajo)
                .input("TieneLicenCondicir", sql.VarChar, TieneLicenCondicir)
                .input("PosseVehiculo", sql.VarChar, PosseVehiculo)
                .input("ParentescoEmergente", sql.VarChar, ParentescoEmergente)
                .input("NombreParentesco", sql.VarChar, NombreParentesco)
                .input("TelefonoParentesco", sql.VarChar, TelefonoParentesco)
                .input("SuleldoAspira", sql.VarChar, SuleldoAspira)
                .input("preguntaEmpleado", sql.VarChar, preguntaEmpleado)
                .input("PreguntaPariente", sql.VarChar, PreguntaPariente) 
                .input("Id",sql.Int,Id)
                .query(querysInformePerfil.updateInformePerfilById);
        
                res.json({IdSuscripcion, Nombre, Apellidos, Email, Movil, TelefonoFijo, PaisNacimiento, Nacionalidad, Sexo, FechaNacimiento, TipoDocumento, NumeroDocumento, EstadoCivil, Provincia,
                     ParienteTrabajo, TieneLicenCondicir, PosseVehiculo, ParentescoEmergente, NombreParentesco, TelefonoParentesco, SuleldoAspira, preguntaEmpleado, PreguntaPariente});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};