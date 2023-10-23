import { Router } from 'express';
import { createNewDiplCurSeminSert, deleteDiplCurSeminSertById, getTotalDiplCurSeminSert, getDiplCurSeminSertId, getDiplCurSeminSert, updateDiplCurSeminSertById } from "../controllers/FormacionComple.controller.js";

const routerDiplCurSeminSert = Router();

routerDiplCurSeminSert.get('/DiplCurSeminSert', getDiplCurSeminSert);
routerDiplCurSeminSert.post('/DiplCurSeminSert',createNewDiplCurSeminSert);
routerDiplCurSeminSert.get('/DiplCurSeminSert/count',getTotalDiplCurSeminSert);
routerDiplCurSeminSert.get('/DiplCurSeminSert/:Id',getDiplCurSeminSertId);
routerDiplCurSeminSert.delete('/DiplCurSeminSert/:Id',deleteDiplCurSeminSertById);
routerDiplCurSeminSert.put('/DiplCurSeminSert/:Id',updateDiplCurSeminSertById);
 

export default routerDiplCurSeminSert