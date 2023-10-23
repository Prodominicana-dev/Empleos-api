 import { getConnection, querysSuscripcion,queryslogin, sql } from "../database/index.js";

 import bcrypt from 'bcrypt';
 import nodemailer from 'nodemailer';




export const getSuscripcion = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querysSuscripcion.getAllSuscripcion);
        console.log(result);
        res.json(result.recordsets[0]);
        //getNombre(result.Nombre)
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewSuscripcion = async(req,res)=>{

    const {Nombre, Email, password} = req.body;

    let FechaRegistro = new Date();

    if( Nombre == null  || Email == null || password == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
    
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
        .input("Nombre", sql.VarChar, Nombre)
        //.input("Movil", sql.VarChar, Movil)
        .input("Email", sql.VarChar, Email)
        .input("password", sql.VarChar, hashedPassword)
        .input("FechaRegistro",sql.DateTime, FechaRegistro)
        .query(querysSuscripcion.createNewSuscripcion);

        res.json({Nombre, Email, hashedPassword, FechaRegistro});

        //................

        const transporter = nodemailer.createTransport({
            host:  "smtp.office365.com", // hostname
            port: 587, // port for secure SMTP
            secureConnection: false,
            tls: {
               ciphers:'SSLv3'
            },
            auth: {
                user: "alertaelectronica@prodominicana.gob.do",
                pass: "Ceird2020."
            }
        });

        //..........................
        const mensaje = "El usuario "+Email+" se a registrado";
        const Mensaje = `<!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Correo Electrónico</title>
        </head>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0;">
        
          <table width="100%" cellpadding="0" cellspacing="0" bgcolor="#ffffff">
            <tr>
              <td align="center" style="padding: 20px;">
                <img src="https://prodominicana.gob.do/Imagenes/PD-Logo-RGB-CEI%20Icon.png" alt="Logo de la empresa" width="150" style="display: block;">
                <h1 style="color: #333333;">${mensaje}</h1>
                
              </td>
            </tr>
          </table>
        
          
        
        </body>
        </html>`;
        const mailOptions = {
        from: 'alertaelectronica@prodominicana.gob.do',
        to: 'elisaul2314@gmail.com',
        subject: 'Empleos Prodominicana',
        html: Mensaje
        };
        //..............................

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email enviado: ' + info.response);
            }
          });

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};


export const login= async(req,res)=>{
    const {Email,password} = req.body;
    //const values= [username, password]


try {
    
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("Email", sql.VarChar, Email)
    //.input("password", sql.VarChar, password)
    .query(queryslogin.userName);

   if(result.recordsets[0][0] != undefined){

    const hashPass=result.recordsets[0][0].password
  
     const compare = bcrypt.compareSync(password,hashPass)

     if(compare){


        const token =
        {
        "Id":result.recordsets[0][0].Id,
        "Nombre":result.recordsets[0][0].Nombre,
        "Movil":result.recordsets[0][0].Movil,
        "Email":result.recordsets[0][0].Email,
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


export const getSuscripcionId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysSuscripcion.getSuscripcionById)

        console.log(result);

        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteSuscripcionById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querysSuscripcion.deleteSuscripcion)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalSuscripcion = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querysSuscripcion.getTotalSuscripcion)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateSuscripcionById = async (req, res) => {

    const {Nombre, Movil, Email, password} = req.body;
    const {Id} = req.params;

    if( Nombre == null || Movil == null || Email == null || password == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("Nombre", sql.VarChar, Nombre)
                .input("Movil", sql.VarChar, Movil)
                .input("Email", sql.VarChar, Email)
                .input("password", sql.VarChar, password)
                .input("Id",sql.Int,Id)
                .query(querysSuscripcion.updateSuscripcionById);
        
                res.json({Nombre, Movil, Email, password});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};