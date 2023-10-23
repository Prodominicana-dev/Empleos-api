import sql from 'mssql';

const dbSettings = {
    user:'node',
    password:'Ceird123*',
    server:'192.168.0.80',
    database:'EMPLEOS',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
      },
}

export const getConnection = async()=>{
    try{

        const pool = await sql.connect(dbSettings);
        return pool;
         
    }catch(error){

        console.error(error);
        
    }
}

export { sql };
 



