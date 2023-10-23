import { Router } from 'express';
import multer from "multer";
import {createNewCurriculum,deleteCurriculumById, getCurriculum, getCurriculumId, getTotalCurriculum, updateCurriculumById } from '../controllers/Curriculum.controller.js';


const routerCurriculum = Router();
//archivo.......................
const uploadFile=()=>{

    const storage = multer.diskStorage({
        destination:(req,file,callback)=>{
            //console.log(req.body)
            callback(null,`./src/uploads`);
        },
        filename:(req,file,callback)=>{
            callback(null,`file-${Date.now()}.${file.originalname}`);
        } 
    })

    const upload = multer({
        storage:storage
    }).single('archivo');

    return upload;
}

routerCurriculum.get('/Curriculum', getCurriculum);
routerCurriculum.post('/Curriculum',uploadFile(),async(req, res) => {createNewCurriculum(req, res)});
routerCurriculum.get('/Curriculum/count',getTotalCurriculum);
routerCurriculum.get('/Curriculum/:Id',getCurriculumId);
routerCurriculum.delete('/Curriculum/:Id',deleteCurriculumById);
routerCurriculum.put('/Curriculum/:Id',updateCurriculumById);




 

export default routerCurriculum