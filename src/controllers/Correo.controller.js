//import { getConnection, querysSuscripcion,queryslogin, sql } from "../database";
// //import querys from "../database/querys";
//const fs = require('fs');
//const bcrypt =require('bcrypt')
import nodemailer from "nodemailer";
//const nodemailer = require('nodemailer');



export const Correo = async(req,res)=>{

    try {
      
        const {Correo,Nombre} = req.body;

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
        const mensaje = "Lo sentimos "+Nombre+" ha Sido rechazado";
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
        to: Correo,
        subject: 'Prueba de correo',
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

        res.send(Correo);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};