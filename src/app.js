import express from 'express';
import config from './config.js';
import productsRoutes from './routes/products.routes.js';
import routerVacantes from './routes/Vacantes.routes.js';
import routerCurriculum from './routes/Curriculum.routes.js';
import routerSuscripcion from './routes/Suscripcion.routes.js';
import routerEducacion from './routes/Educacion.routes.js';
import routerExperienciaLaboralExterna from './routes/ExperienciaLaboralExterna.routes.js';
import routerIdioma from './routes/Idioma.routes.js';
import routerInformePerfil from './routes/InformePerfil.routes.js';
import routerPuestoSolicitado from './routes/PuestoSolicitado.routes.js';
import routerReferenciasPersonales from './routes/ReferenciasPersonales.routes.js';
import routerReferenciasLaborales from './routes/ReferenciasLaborales.routes.js';
import routerDiplCurSeminSert from './routes/FormacionComple.routes.js';
import routerCategoria from './routes/Categorias.routes.js';
import routerAplicantes from './routes/Aplicantes.routes.js';
import routerUsuario from './routes/Usuario.routes.js';
import routerCrearPdf from './routes/CrearPdf.routes.js';
import routerMostrarPdf from './routes/MostrarPdf.routes.js';
import routerPeriodo from './routes/Periodo.routes.js';
//import routerEstadoAplicantes from './routes/EstadoAplicantes.routes.js';
import routerCorreo from './routes/Correo.routes.js';
import routerImagen from './routes/Imagen.routes.js';
import routerMostrarImagen from './routes/MostrarImagen.routes.js';

import cors from "cors";


const app = express();

app.use(cors());

//settings
app.set('port', config.port);

//middlewares
app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(
    productsRoutes,
    routerVacantes, 
    routerCurriculum, 
    routerSuscripcion, 
    routerEducacion, 
    routerExperienciaLaboralExterna, 
    routerIdioma, 
    routerInformePerfil, 
    routerPuestoSolicitado, 
    routerReferenciasPersonales,
    routerReferenciasLaborales,
    routerDiplCurSeminSert,
    routerCategoria,
    routerAplicantes,
    routerUsuario,
    routerCrearPdf,
    routerMostrarPdf,
    routerPeriodo,
    //routerEstadoAplicantes,
    routerCorreo,
    routerImagen,
    routerMostrarImagen
    );

export default app; 



