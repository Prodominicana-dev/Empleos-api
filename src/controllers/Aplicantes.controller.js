import { getConnection, querysAplicantes, sql } from "../database/index.js";
//import querys from "../database/querys";

// export const getAplicantes = async (req,res)=>{

//     try { 
//         const pool = await getConnection();
//         const result = await pool.request().query(querysAplicantes.getAllAplicantes);
//         console.log(result);
//         res.json(result.recordsets[0]);

//     } catch (error) {
//         res.status(500);
//         res.send(error.message);
//     }
    
// };

export const getAplicantesId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querysAplicantes.getAllAplicantes)

        console.log(result);

        res.send(result.recordset);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
    
}
