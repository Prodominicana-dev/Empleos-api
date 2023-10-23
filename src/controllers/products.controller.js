import { getConnection,sql,querys } from "../database/index.js";
//import querys from "../database/querys";

export const getProducts = async (req,res)=>{

    try { 
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllProduct);
        console.log(result);
        res.json(result.recordsets);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const createNewProduct = async(req,res)=>{

    const { Name, Description} = req.body;
    let { Quantity } = req.body;

    if( Name == null || Description == null ){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }

    if( Quantity == null ) Quantity = 0;
 
    try {
        const pool = await getConnection();

        await pool
        .request()
        .input("Name", sql.VarChar, Name)
        .input("Description", sql.Text, Description)
        .input("Quantity", sql.Int, Quantity)
        .query(querys.createNewProduct);

        //console.log(Name, Description, Quantity);
        res.json({Name, Description, Quantity});
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
};

export const getProductId = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool
        .request()
        .input("Id",Id)
        .query(querys.getProductById)

        console.log(result);

        res.send(result.recordset[0]);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
}

export const deleteProductById = async (req,res) => {

    try {
        const {Id} = req.params;
        const pool = await getConnection();
        const result = await pool.request().input("Id",Id).query(querys.deleteProduct)
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
    
    //res.send(result.recordsets);
};

export const getTotalProducts = async (req,res) => {

    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getTotalProducts)
        res.json(result.recordset[0]['']);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
   
   
};

export const updateProductById = async (req, res) => {

    const { Name, Description, Quantity} = req.body;
    const {Id} = req.params;

    if( Name == null || Description == null || Quantity == null){
        return res.status(400).json({ msg:'Bad Request. Please Fill all fields' })
    }
        try {

            const pool = await getConnection();
            await pool 
                .request()
                .input("Name", sql.VarChar, Name)
                .input("Description", sql.Text, Description)
                .input("Quantity", sql.Int, Quantity)
                .input("Id",sql.Int,Id)
                .query(querys.updateProductById);
        
                res.json({Name, Description, Quantity});

        } catch (error) {
            res.status(500);
            res.send(error.message);
        }
};

