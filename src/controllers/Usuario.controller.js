import { getConnection, querysUsuario,queryslogin, sql } from "../database/index.js";
// //import querys from "../database/querys";
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';



export const getUsuario = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysUsuario.getAllUsuario);
        console.log(result);
        res.json(result.recordsets[0]);
        //getNombre(result.Nombre)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewUsuario = async(req,res)=>{

    const {NombreCompleto, Correo, password} = req.body;

    let FechaRegistro = new Date();

    // if( Nombre == null || Movil == null || Email == null || password == null){
    //     return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    // }
    
    const hashedPassword = bcrypt.hashSync(password,10)

    // fs.mkdir(`src/uploads/${Nombre}`,(error)=>{
    //      if(error){
    //        console.log(error.message)
    //      }
    //      console.log("Directorio Creado")
    // });

    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("NombreCompleto", sql.VarChar, NombreCompleto)
        .input("Correo", sql.VarChar, Correo)
        .input("password", sql.VarChar, hashedPassword)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysUsuario.createNewUsuario);

        res.json({NombreCompleto, Correo, hashedPassword, FechaRegistro});

        //................

        // const transporter = nodemailer.createTransport({
        //     host:  "smtp.office365.com", // hostname
        //     port: 587, // port for secure SMTP
        //     secureConnection: false,
        //     tls: {
        //        ciphers:'SSLv3'
        //     },
        //     auth: {
        //         user: "alertaelectronica@prodominicana.gob.do",
        //         pass: "Ceird2020."
        //     }
        // });

        // //..........................
        // const mensaje = "El usuario "+Email+" se a registrado";

        // const mailOptions = {
        // from: 'alertaelectronica@prodominicana.gob.do',
        // to: 'elisaul2314@gmail.com',
        // subject: 'Prueba de correo',
        // text: mensaje
        // };
        // //..............................

        // transporter.sendMail(mailOptions, function(error, info){
        //     if (error) {
        //       console.log(error);
        //     } else {
        //       console.log('Email enviado: ' + info.response);
        //     }
        //   });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};


export const loginUsuario= async(req,res)=>{
    const {Correo,password} = req.body;
    //const values= [username, password]


try {
    
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("Correo", sql.VarChar, Correo)
    //.input("password", sql.VarChar, password)
    .query(querysUsuario.LoginUsiario);

   if(result.recordsets[0][0] != undefined){
    
    const hashPass=result.recordsets[0][0].password
  
    const compare = bcrypt.compareSync(password,hashPass)

    if(compare){


        const token =
        {
        "Id":result.recordsets[0][0].Id,
        "NombreCompleto":result.recordsets[0][0].NombreCompleto,
        "Correo":result.recordsets[0][0].Correo,
        }


        res.status(200)
        res.send(token);
        res.end();
    
    }
    else
    {

        res.status(400)
        res.send('Usuario no existe')
    
    }
    
    }
} catch (error) {

    res.status(500)
    res.send(error.message)
}
}


export const getUsuarioId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysUsuario.getUsuarioById)

        console.log(result);

        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteUsuarioById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysUsuario.deleteUsuario)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalUsuario = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysUsuario.getTotalUsuario)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateUsuarioById = async (req, res) => {

    const {NombreCompleto, Correo, password} = req.body;
    const {Id} = req.params;

    if( NombreCompleto == null || Correo == null || password == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("NombreCompleto", sql.VarChar, NombreCompleto)
                .input("Correo", sql.VarChar, Correo)
                .input("password", sql.VarChar, password)
                .input("Id",sql.Int,Id)
                .query(querysUsuario.updateUsuarioById);
        
                res.json({NombreCompleto, Correo, password});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};