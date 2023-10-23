//import PdfPrinter from 'pdfmake';
import pdf from 'html-pdf';
import { parseISO, format } from 'date-fns';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';


// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);

// Obtener el directorio del archivo actual
const __dirname = dirname(__filename);

//const fs = require('fs');
export const createNewPdf = async(req,res)=>{

    const  Data  = req.body;

    //console.log(Data)
    const {perfil,RefLab,RePer,Idioma,exLab,educacion,FormCom,aplica,imagen}=Data;
    const img = imagen[imagen.length-1].Nombre;
    console.log(img) 

//tablas.....................................
// // Crear la Educacion


let tableEducacion ='';

if(educacion[0] != null){

   tableEducacion =  `
   <div class="con reflab">
  <h4 class="textCColor02">Educación de ${perfil.Nombre} ${perfil.Apellidos}</h4>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Preparación Académica</th>
        <th>Institución</th>
        <th>Área Estudio</th>
        <th>Título Otorgado</th>
        <th>Estado de Estudio</th>
        <th>Fecha de Expedición</th>
        <th>Inicio de Estudio</th>
        <th>Término de Estudio</th>
      </tr>
    </thead>
    <tbody>

    ${educacion.map(data =>
       
      `<tr>
      <td>${data.PreparacionAcademica}</td>
      <td>${data.Institución}</td>
      <td>${data.AreaEstudio}</td>
      <td>${data.TituloOtorgado}</td>
      <td>${data.EstadoEstudio}</td>
      <td>${format(parseISO(data.FechaExpedicion), 'dd/MM/yyyy')}</td>
      <td>${format(parseISO(data.InicioEstudio), 'dd/MM/yyyy')}</td>
      <td>${format(parseISO(data.TerminoEstudio), 'dd/MM/yyyy')}</td>
    </tr>`).join('') 
    }

    </tbody>
  </table>
</div>`;
    
  }else{}


  let tableExperienciaLab ='';

  if(exLab[0] != null){
  
    tableExperienciaLab =  `
    <div class="con reflab">
    <h4 class="textCColor02">Experiencia laboral de ${perfil.Nombre} ${perfil.Apellidos}</h4>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Fecha inicial</th>
          <th>Fecha final</th>
          <th>Nombre de la compañía</th>
          <th>Puesto</th>
          <th>Salario</th>
          <th>Área del puesto</th>
          <th>Industria</th>
          <th>Supervisor</th>
          <th>Funciones y logros</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
  
      ${exLab.map(data => `
      <tr>
        <td>${format(parseISO(data.FechaInicial), 'dd/MM/yyyy')}</td>
        <td>${format(parseISO(data.FechaFinal), 'dd/MM/yyyy')}</td>
        <td>${data.NombreCompania}</td>
        <td>${data.Puesto}</td>
        <td>${data.Salario}</td>
        <td>${data.AreaPuesto}</td>
        <td>${data.Industria}</td>
        <td>${data.Supervisor}</td>
        <td>${data.FuncionesLogros}</td>
        <td>${data.Telefono}</td>
      </tr>`).join('') 
      }
  
      </tbody>
    </table>
  </div>`;
      
    }else{}

    let tableFormComp ='';

    if(FormCom[0] != null){
    
      tableFormComp =  `
      <div class="con reflab">
      <h4 class="textCColor02">Formación complementaria de ${perfil.Nombre} ${perfil.Apellidos}</h4>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Formación complementaria:</th>
            <th>Estado de la certificación</th>
            <th>Fecha de Inicio</th>
            <th>Fecha de término</th>
          </tr>
        </thead>
        <tbody>
    
        ${FormCom.map(data => `<tr>
          <td>${data.Certificado}</td>
          <td>${data.EstadoCerti}</td>
          <td>${format(parseISO(data.FechaInicio), 'dd/MM/yyyy')}</td>
          <td>${format(parseISO(data.FechaFinal), 'dd/MM/yyyy')}</td>
        </tr>`).join('') 
        }
        </tbody>
      </table>
    </div>`;
        
      }else{}

      let tableIdioma ='';

      if(Idioma[0] != null){
      
        tableIdioma =  `
        <div class="con reflab">
        <h4 class="textCColor02">Idiomas de ${perfil.Nombre} ${perfil.Apellidos}</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Idioma</th>
              <th>Nombre de la Institución</th>
              <th>Nivel de conversación</th>
              <th>Nivel de lectura</th>
              <th>Nivel de escritura</th>
              <th>Capacidad de traducir</th>
            </tr>
          </thead>
          <tbody>
      
          ${Idioma.map(data => `<tr>
            <td>${data.Idioma}</td>
            <td>${data.NombreInstitucion}</td>
            <td>${data.NivelConversacion}</td>
            <td>${data.NivelLectura}</td>
            <td>${data.NivelEscritura}</td>
            <td>${data.CapacidadTraducir}</td>
          </tr>`).join('') 
          }
          </tbody>
        </table>
      </div>`;
          
        }else{}

        let tableRefPer ='';

      if(RePer[0] != null){
      
        tableRefPer =  `
        <div class="con reflab">
        <h4 class="textCColor02">Referencias personales de ${perfil.Nombre} ${perfil.Apellidos}</h4>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nombres y Apellidos</th>
              <th>Teléfonos</th>
              <th>Ocupación</th>
            </tr>
          </thead>
          <tbody>
      
          ${RePer.map(data => `<tr>
            <td>${data.NombreCompleto}</td>
            <td>${data.Telefono}</td>
            <td>${data.Ocupacion}</td>
          </tr>`).join('') 
          }
          </tbody>
        </table>
      </div>`;
          
        }else{}

        let tableRefLab ='';

        if(RefLab[0] != null){
        
          tableRefLab =  `
          <div class="con reflab">
          <h4 class="textCColor02">Referencias laborales de ${perfil.Nombre} ${perfil.Apellidos}</h4>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Nombres y Apellidos</th>
                <th>Teléfonos</th>
                <th>Profesión</th>
                <th>Relación</th>
              </tr>
            </thead>
            <tbody>
        
            ${RefLab.map(data => `<tr>
              <td>${data.NombreCompleto}</td>
              <td>${data.Telefono}</td>
              <td>${data.Profesion}</td>
              <td>${data.Relacion}</td>
            </tr>`).join('') 
            }
            </tbody>
          </table>
        </div>`;
            
          }else{}


          let tableaplica ='';

          if(aplica != null){
          
             tableaplica =  `
             <div class="con reflab">
            <h4 class="textCColor02">Puesto o Vacante a la que aplica  ${perfil.Nombre} ${perfil.Apellidos}</h4>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Nombre de la vacante</th>
                  <th>Responsabilidad</th>
                  <th>Perfil del puesto</th>
                </tr>
              </thead>
              <tbody>
          
               <tr>
                <td>${aplica.NombreVacante}</td>
                <td>${aplica.Responsabilidades}</td>
                <td>${aplica.PerfilPuesto}</td>
              </tr>
              
          
              </tbody>
            </table>
          </div>`;
              
            }else{}
          

const style01=`
<style>

.textCo {
  margin: 20px;
  /* font-size: 1.2em; */
  /* color: #818181; */
  line-height: 18px;
  white-space: pre-wrap;
  height: auto;
  /* word-wrap: break-word; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  font-weight: 500;
  text-align: justify;
  background: rgb(244, 245, 242);
  color: black;
  text-shadow: 1px 1px #fff;
}
.textTi{
  background: rgb(216, 206, 212);
  color: black;
  text-shadow: 1px 1px #fff;
  font-size :18px;
  max-width:45%;
}

.textCColor{
  display: flex;
  background: rgb(244, 245, 242);
  color: black;
  text-shadow: 1px 1px #fff;
  max-width:45%;
}

.textCColor01{
  background: rgb(244, 245, 242);
  color: black;
  text-shadow: 1px 1px #fff;
 
}
.textCColor02{
  background: #A4CFF9;
  color: black;
  
 
}

.textTi03{
  background: rgb(216, 206, 212);
  color: black;
  
  font-size :18px;
  max-width:95%;
}

img.redimension{
  max-width:41%;
  position: relative;
  left: 3em;
  height: auto;
}

.imagen{
  min-height: 400px;
}

.text-align-center {
  max-width:41%;
  background: rgb(244, 245, 242);
  color: #333;
  line-height: 30px;
  text-align: center;
  vertical-align: middle;
}

.l{
  position: relative;
  left: 3em;
}
.perf{
  position: relative;
  left: 50%;
  bottom: 26em;
}
.perf01{
  position: relative;
  left: 2.4em;
  bottom: 42em;
}

.perf02{
  position: relative;
  left: 2.4em;
  bottom: 40em;
}

.ri{
  float: right;
}
.con {
  font-family: Arial, sans-serif;
  margin: 30px;
}

.table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

.table th, .table td {
  border: 1px solid #ddd;
  padding: 6px; /* Espaciado interno más pequeño */  
  text-align: left;
  font-size: 10px; /* Tamaño de fuente más pequeño */
  white-space: pre-wrap;
}

.table th {
  background-color: rgb(216, 206, 212);;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2; /* Color alternativo para filas pares */
}

.table tr:nth-child(odd) {
  background-color: #ffffff; /* Color alternativo para filas impares */
}
.reflab{
  position: relative;
 
  bottom: 35em;
}

</style>`;
const imagenPath = join(__dirname, '../Imagen', img);
const imagenBase64 = fs.readFileSync(imagenPath, 'base64');

//const url= '../Imagen/' + img;
const DivImagNom=` 

<div class="col-md-3">

    <div class='imagen'>

      <img class='redimension' src="data:image/jpeg;base64,${imagenBase64}" width="41%" height="auto"/>

        <div class="text-align-center l">

          ${perfil.Nombre} ${perfil.Apellidos}

        </div>

    </div>

</div>`;

const perfilHtml=` 
<div class="perf">


<div class="">
     

      <div style="height:24px;"></div>

      <div class='col-lg-3'>
          <div class='textCColor'>País de nacimiento: <span class="ri">${perfil.PaisNacimiento}</span></div>
      </div>

      <div style="height:24px;"></div>

      <div class='col-lg-3 '>
          <div class='textCColor'>Sexo: <span class="ri">${perfil.Sexo}</span></div>
      </div>

    <div style="height:24px;"></div>

      <div class='col-lg-3 '>
          <div class='textCColor'>Fecha de nacimiento: <span class="ri">${format(parseISO(perfil.FechaNacimiento), 'dd/MM/yyyy')}</span></div>
      </div>

      <div style="height:24px;"></div>

      <div class='col-lg-3 '>
          <div class='textCColor'>Tipo de documento: <span class="ri">${perfil.TipoDocumento}</span></div>
      </div>

      <div style="height:24px;"></div>

      <div class='col-lg-3'>
          <div class='textCColor'>Número de documento: <span class="ri"> ${perfil.NumeroDocumento}</span></div>
      </div>

      <div style="height:24px;"></div>

      <div class='col-lg-3'>
          <div class='textCColor'>Estado civil: <span class="ri">${perfil.EstadoCivil}</span></div>
      </div>

      <div style="height:24px;"></div> 

      <div class='col-lg-3'>
          <div class='textCColor'>Provincia: <span class="ri">${perfil.Provincia}</span></div>
      </div>

      <div style="height:24px;"></div>

      <div class='col-lg-3'>
          <div class='textCColor'>¿Tiene licencia de conducir?: <span class="ri">${perfil.TieneLicenCondicir}</span></div>
        
      </div>

      <div style="height:24px;"></div>

      <div class='col-lg-3'>
          <div class='textCColor'>¿Posee vehículo?: <span class="ri">${perfil.PosseVehiculo}</span></div>
      </div>
  </div>

  <div style="height:24px;"></div>

  <div>Parentesco en caso de emergencia:</div>

  <div className='col-lg-12'>
      <hr/>
  </div>
  
  <div class='col-lg-3'>
      <div class='textCColor'>¿Tiene a quien llamar en caso de emergencia?: <span class="ri">${perfil.ParentescoEmergente}</span></div>
      
  </div>
  
  <div style="height:24px;"></div>
  
  <div class='col-lg-3'>
      <div class='textCColor'>Nombre: <span class="ri">${perfil.NombreParentesco}</span></div>
  </div>
  
  <div style="height:24px;"></div>
  
  <div class='col-lg-3'>
      <div class='textCColor'>Teléfono: <span class="ri">${perfil.TelefonoParentesco}</span></div>
  </div>
  
  <div style="height:24px;"></div>

  <div>Preguntas:</div>

  <div class='col-lg-12'>
      <hr/>
  </div>
  
  <div class='col-lg-3'>
      <div class='textCColor'>¿Sueldo al que aspira?: <span class="ri">${perfil.SuleldoAspira}</span></div>
  </div>
  
  <div style="height:24px;"></div>
  
 
  
</div>`;
const perfHtml03 = `
<div class="perf02">

    <div class='col-lg-12'>
      <div class='textTi03'>¿Posee usted parentesco (familiaridad) con algún colaborador de la institución?: </div>
      <div  class='textCColor'> ${perfil.ParienteTrabajo}</div>
    </div>

    <div class='col-lg-12'>
      <div class='textTi03'>¿Desempeña o ha desempeñado durante los últimos 3 años una posición en la administración pública o ha sido catalogado como una persona políticamente expuesta? </div>
      <div class='textCColor'> ${perfil.preguntaEmpleado}</div>
    </div>

    <div style="height:20px;"></div>

    <div class='col-lg-12'>
      <div class='textTi03'>¿Tiene usted algún pariente hasta el segundo grado de afinidad o consanguinidad (padre, madre, hijos, cónyuge, hermanos) que desempeña o ha desempeñado durante los últimos 3 años una posición en Administración Pública o ha sido catalogado como una persona políticamente expuesta?</div>
      <div class='textCColor'> ${perfil.PreguntaPariente}</div>
    </div>
</div>
`
const perfHtml02 = `
<div class="perf01">
    <div class='col-lg-3'>
            
       <div  class='textCColor'>Correo: <span class="ri">${perfil.Email}</span> </div>
    </div>

    <div style="height:22px;"></div>

    <div class='col-lg-3'>
       <div class='textCColor'>Teléfono móvil: <span class="ri">${perfil.Movil}</span></div>
    </div>

    <div style="height:22px;"></div>

    <div class='col-lg-3'>
       <div class='textCColor'>Teléfono fijo: <span class="ri">${perfil.TelefonoFijo}</span></div>
    </div>

    <div style="height:22px;"></div>

    <div class='col-lg-3 '>
        <div class='textCColor'>Nacionalidad: <span class="ri">${perfil.Nacionalidad}</span></div>
    </div>
    <div style="height:22px;"></div>

    <div class='col-lg-3 '>
        <div class='textCColor'>Tipo de documento: <span class="ri">${perfil.TipoDocumento}</span></div>
    </div>

    <div style="height:22px;"></div>

    <div class='col-lg-3'>
        <div class='textCColor'>Número de documento: <span class="ri"> ${perfil.NumeroDocumento}</span></div>
    </div>
    </div>
`;

const contenido = `
<!DOCTYPE html>
<html style="zoom:0.57;">
<head>
  <!-- Aquí incluye las referencias a los archivos CSS de Bootstrap -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/css/bootstrap.min.css">
  <!-- Otros archivos CSS adicionales que puedas necesitar -->
</head>

${style01}

<body>
  <div class="">

      <div class="col-lg-1" style="height:10px;"></div>

      <div class="textCColor01 text-center">
          
              <span>
                    <img src='https://prodominicana.gob.do/Imagenes/PD-Logo-RGB-CEI%20Icon.png' style="height:50px;" />
              </span>
              <span> PRODOMINICANA  EMPLEOS </span>
        
      </div>

          <div style="height:30px;" class="col-lg-12"></div>

          <div class="col-lg-12">

                <div>

                      ${DivImagNom}

                        

                      ${perfilHtml}
                      ${perfHtml02}

                      <div  class="col-lg-12">
                        ${perfHtml03}
                      </div>
                  
                </div>

              

                <div col-lg-12>
                ${tableaplica}
                ${tableEducacion}
                ${tableExperienciaLab}
                ${tableFormComp}
                ${tableIdioma}
                ${tableRefPer}
                ${tableRefLab}
                </div>

          </div>
  </div>
  
  
</body>
</html>
`;




const options = {
  //base: join(__dirname+'../Imagen/'),
  format: 'A4',
  header:{
    height: '10mm',
  },
  footer: {
    height: '10mm'
  }
};


pdf.create(contenido, options).toStream((err, stream) => {
  if (err) {
    res.status(500).send('Error al generar el PDF');
    return;
  }

  // Establecer las cabeceras adecuadas para el cliente
  // res.setHeader('Content-Type', 'application/pdf');
  // res.setHeader('Content-Disposition', 'attachment; filename="generated.pdf"');

  // Pipe el contenido del PDF al cliente
  stream.pipe(res);
});
};