export const querys = {
    getAllProduct:'SELECT * FROM Products',
    createNewProduct:'INSERT INTO Products (Name, Description, Quantity) VALUES (@Name, @Description, @Quantity)',
    getProductById:'SELECT * FROM products WHERE Id = @Id',
    deleteProduct:'DELETE FROM Products WHERE Id = @Id',
    getTotalProducts:'SELECT COUNT(*) FROM Products',
    updateProductById:'UPDATE Products SET Name = @Name, Description = @Description, Quantity = @Quantity WHERE Id = @Id'
}

export const querysVacantes = {
    getAllVacantes:'SELECT * FROM Vacantes',
    createNewVacantes:'INSERT INTO Vacantes (NombreVacante, Responsabilidades, PerfilPuesto, Condicion,IdCategoria,FechaRegistro) VALUES (@NombreVacante, @Responsabilidades, @PerfilPuesto, @Condicion,@IdCategoria,@FechaRegistro)',
    getVacantesById:'SELECT * FROM Vacantes WHERE Id = @Id',
    getVacantesByIdCategoria:'SELECT * FROM Vacantes WHERE IdCategoria = @Id',
    deleteVacantes:'DELETE FROM Vacantes WHERE Id = @Id',
    getTotalVacantes:'SELECT COUNT(*) FROM Vacantes',
    updateVacantesById:'UPDATE Vacantes SET NombreVacante = @NombreVacante, Responsabilidades = @Responsabilidades, PerfilPuesto = @PerfilPuesto, Condicion = @Condicion, IdCategoria = @IdCategoria WHERE Id = @Id'
}

export const querysSuscripcion = {
    getAllSuscripcion:'SELECT * FROM Suscripcion',
    createNewSuscripcion:'INSERT INTO Suscripcion (Nombre, Email, password, FechaRegistro) VALUES (@Nombre, @Email, @password, @FechaRegistro)',
    getSuscripcionById:'SELECT * FROM Suscripcion WHERE Id = @Id',
    deleteSuscripcion:'DELETE FROM Suscripcion WHERE Id = @Id',
    getTotalSuscripcion:'SELECT COUNT(*) FROM Suscripcion',
    updateSuscripcionById:'UPDATE Suscripcion SET Nombre = @Nombre, Email = @Email, password = @password WHERE Id = @Id'
}

export const querysImagen = {
    getAllImagen:'SELECT * FROM ImagenPerf',
    createNewImagen:'INSERT INTO ImagenPerf (IdSuscripcion, Nombre, FechaRegistro) VALUES (@IdSuscripcion, @Nombre, @FechaRegistro)',
    getImagenById:'SELECT * FROM ImagenPerf WHERE IdSuscripcion = @Id',
    deleteImagen:'DELETE FROM ImagenPerf WHERE Id = @Id',
    getTotalImagen:'SELECT COUNT(*) FROM ImagenPerf',
    updateImagenById:'UPDATE ImagenPerf SET IdSuscripcion = @IdSuscripcion, Nombre = @Nombre WHERE Id = @Id'
}

export const querysCurriculum = {
    getAllCurriculum:'SELECT * FROM Curriculum',
    createNewCurriculum:'INSERT INTO Curriculum (IdSuscripcion, Nombre, Size, FechaCreacion, FechaRegistro) VALUES (@IdSuscripcion, @Nombre, @Size, @FechaCreacion, @FechaRegistro)',
    getCurriculumById:'SELECT * FROM Curriculum WHERE IdSuscripcion = @Id',
    deleteCurriculum:'DELETE FROM Curriculum WHERE Id = @Id',
    getTotalCurriculum:'SELECT COUNT(*) FROM Curriculum',
    updateCurriculumById:'UPDATE Curriculum SET IdSuscripcion = @IdSuscripcion, Nombre = @Nombre, Size = @Size, FechaCreacion = @FechaCreacion WHERE Id = @Id'
}

export const querysEducacion = {
    getAllEducacion:'SELECT * FROM Educacion',
    createNewEducacion:'INSERT INTO Educacion (IdSuscripcion, PreparacionAcademica, Institución, AreaEstudio, TituloOtorgado, EstadoEstudio, FechaExpedicion, InicioEstudio, TerminoEstudio, FechaRegistro) VALUES (@IdSuscripcion, @PreparacionAcademica, @Institución, @AreaEstudio, @TituloOtorgado, @EstadoEstudio, @FechaExpedicion, @InicioEstudio, @TerminoEstudio, @FechaRegistro)',
    getEducacionById:'SELECT * FROM Educacion WHERE IdSuscripcion = @Id',
    deleteEducacion:'DELETE FROM Educacion WHERE Id = @Id',
    getTotalEducacion:'SELECT COUNT(*) FROM Educacion',
    updateEducacionById:'UPDATE Educacion SET IdSuscripcion = @IdSuscripcion, PreparacionAcademica = @PreparacionAcademica, Institución = @Institución, AreaEstudio = @AreaEstudio, TituloOtorgado = @TituloOtorgado, EstadoEstudio = @EstadoEstudio, InicioEstudio = @InicioEstudio,TerminoEstudio = @TerminoEstudio WHERE Id = @Id'
}
//1
export const querysExperienciaLaboralExterna = {
    getAllExperienciaLaboralExterna:'SELECT * FROM ExperienciaLaboralExterna',
    createNewExperienciaLaboralExterna:'INSERT INTO ExperienciaLaboralExterna (IdSuscripcion, FechaInicial, FechaFinal, NombreCompania, Puesto, Salario, AreaPuesto, Industria, Supervisor, FuncionesLogros, Telefono, FechaRegistro) VALUES (@IdSuscripcion, @FechaInicial, @FechaFinal, @NombreCompania, @Puesto, @Salario, @AreaPuesto, @Industria, @Supervisor, @FuncionesLogros, @Telefono, @FechaRegistro)',
    getExperienciaLaboralExternaById:'SELECT * FROM ExperienciaLaboralExterna WHERE IdSuscripcion = @Id',
    deleteExperienciaLaboralExterna:'DELETE FROM ExperienciaLaboralExterna WHERE Id = @Id',
    getTotalExperienciaLaboralExterna:'SELECT COUNT(*) FROM ExperienciaLaboralExterna',
    updateExperienciaLaboralExternaById:'UPDATE ExperienciaLaboralExterna SET IdSuscripcion = @IdSuscripcion, FechaInicial = @FechaInicial, FechaFinal = @FechaFinal, NombreCompania = @NombreCompania, Puesto = @Puesto, Salario = @Salario, AreaPuesto = @AreaPuesto, Industria = @Industria, Supervisor = @Supervisor, FuncionesLogros = @FuncionesLogros, Telefono = @Telefono WHERE Id = @Id'
}

export const querysIdioma = {
    getAllIdioma:'SELECT * FROM Idioma',
    createNewIdioma:'INSERT INTO Idioma (IdSuscripcion, Idioma, NombreInstitucion, NivelConversacion, NivelLectura, NivelEscritura, CapacidadTraducir, FechaRegistro) VALUES (@IdSuscripcion, @Idioma, @NombreInstitucion, @NivelConversacion, @NivelLectura, @NivelEscritura, @CapacidadTraducir, @FechaRegistro)',
    getIdiomaById:'SELECT * FROM Idioma WHERE IdSuscripcion = @Id',
    deleteIdioma:'DELETE FROM Idioma WHERE Id = @Id',
    getTotalIdioma:'SELECT COUNT(*) FROM Idioma',
    updateIdiomaById:'UPDATE Idioma SET IdSuscripcion = @IdSuscripcion, Idioma = @Idioma, NombreInstitucion = @NombreInstitucion, NivelConversacion = @NivelConversacion, NivelLectura = @NivelLectura, NivelEscritura = @NivelEscritura, CapacidadTraducir = @CapacidadTraducir WHERE Id = @Id'
}

export const querysInformePerfil = {
    getAllInformePerfil:'SELECT * FROM InformePerfil',
    createNewInformePerfil:'INSERT INTO InformePerfil (IdSuscripcion, Nombre, Apellidos, Email, Movil, TelefonoFijo, PaisNacimiento, Nacionalidad, Sexo, FechaNacimiento, TipoDocumento, NumeroDocumento, EstadoCivil, Provincia, ParienteTrabajo, TieneLicenCondicir, PosseVehiculo, ParentescoEmergente, NombreParentesco, TelefonoParentesco, SuleldoAspira, preguntaEmpleado, PreguntaPariente, FechaRegistro) VALUES (@IdSuscripcion, @Nombre, @Apellidos, @Email, @Movil, @TelefonoFijo, @PaisNacimiento, @Nacionalidad, @Sexo, @FechaNacimiento, @TipoDocumento, @NumeroDocumento, @EstadoCivil, @Provincia, @ParienteTrabajo, @TieneLicenCondicir, @PosseVehiculo, @ParentescoEmergente, @NombreParentesco, @TelefonoParentesco, @SuleldoAspira, @preguntaEmpleado, @PreguntaPariente, @FechaRegistro)',
    getInformePerfilById:'SELECT * FROM InformePerfil WHERE IdSuscripcion = @Id',
    deleteInformePerfil:'DELETE FROM InformePerfil WHERE Id = @Id',
    getTotalInformePerfil:'SELECT COUNT(*) FROM InformePerfil',
    updateInformePerfilById:'UPDATE InformePerfil SET IdSuscripcion = @IdSuscripcion, Nombre = @Nombre, Apellidos = @Apellidos, Email = @Email, Movil = @Movil, TelefonoFijo = @TelefonoFijo, PaisNacimiento = @PaisNacimiento, Nacionalidad = @Nacionalidad, Sexo = @Sexo, FechaNacimiento = @FechaNacimiento, TipoDocumento = @TipoDocumento, NumeroDocumento = @NumeroDocumento, EstadoCivil = @EstadoCivil, Provincia = @Provincia, ParienteTrabajo = @ParienteTrabajo, TieneLicenCondicir = @TieneLicenCondicir, PosseVehiculo = @PosseVehiculo, ParentescoEmergente = @ParentescoEmergente, NombreParentesco = @NombreParentesco, TelefonoParentesco = @TelefonoParentesco, SuleldoAspira = @SuleldoAspira, preguntaEmpleado = @preguntaEmpleado, PreguntaPariente = @PreguntaPariente WHERE Id = @Id'
}
 
export const querysPuestoSolicitado = {
    getAllquerysPuestoSolicitado01:'SELECT s.Id, s.Nombre, v.Id AS IdVacante,  v.NombreVacante, v.FechaRegistro, t.Estado FROM usuarioVacante t JOIN Suscripcion s ON s.Id = t.IdSuscripcion JOIN Vacantes v ON v.Id = t.IdVacante',
    getAllPuestoSolicitado:'SELECT * FROM usuarioVacante',
    createNewPuestoSolicitado:'INSERT INTO usuarioVacante (IdSuscripcion, IdVacante, Estado, FechaRegistro) VALUES (@IdSuscripcion, @IdVacante, @Estado, @FechaRegistro)',
    getPuestoSolicitadoById:'SELECT * FROM usuarioVacante WHERE IdSuscripcion = @Id',
    deletePuestoSolicitado:'DELETE FROM usuarioVacante WHERE Id = @Id',
    getTotalPuestoSolicitado:'SELECT COUNT(*) FROM usuarioVacante',
    getPuestoSolicitadoId:'SELECT Id FROM usuarioVacante WHERE IdSuscripcion = @IdSuscripcion AND IdVacante = @IdVacante',
    updatePuestoSolicitadoById:'UPDATE usuarioVacante SET IdSuscripcion = @IdSuscripcion, IdVacante = @IdVacante, Estado=@Estado WHERE Id = @Id',
    deletePuestoSolicitadoIdVacante:'DELETE FROM usuarioVacante WHERE IdVacante = @Id`',
    getPuestoSolicitadoByIdVacante:'SELECT * FROM usuarioVacante WHERE IdVacante = @Id',
}

export const querysReferenciasPersonales = {
    getAllReferenciasPersonales:'SELECT * FROM ReferenciasPersonales',
    createNewReferenciasPersonales:'INSERT INTO ReferenciasPersonales (IdSuscripcion, NombreCompleto, Telefono, Ocupacion, FechaRegistro) VALUES (@IdSuscripcion, @NombreCompleto, @Telefono, @Ocupacion, @FechaRegistro)',
    getReferenciasPersonalesById:'SELECT * FROM ReferenciasPersonales WHERE IdSuscripcion = @Id',
    deleteReferenciasPersonales:'DELETE FROM ReferenciasPersonales WHERE Id = @Id',
    getTotalReferenciasPersonales:'SELECT COUNT(*) FROM ReferenciasPersonales',
    updateReferenciasPersonalesById:'UPDATE ReferenciasPersonales SET IdSuscripcion = @IdSuscripcion, NombreCompleto = @NombreCompleto, Telefono = @Telefono, Ocupacion = @Ocupacion WHERE Id = @Id'
}

export const querysReferenciasLaborales = {
    getAllReferenciasLaborales:'SELECT * FROM ReferenciasLaborales',
    createNewReferenciasLaborales:'INSERT INTO ReferenciasLaborales (IdSuscripcion, NombreCompleto, Telefono, Profesion, Relacion, FechaRegistro) VALUES (@IdSuscripcion, @NombreCompleto, @Telefono, @Profesion, @Relacion, @FechaRegistro)',
    getReferenciasLaboralesById:'SELECT * FROM ReferenciasLaborales WHERE IdSuscripcion = @Id',
    deleteReferenciasLaborales:'DELETE FROM ReferenciasLaborales WHERE Id = @Id',
    getTotalReferenciasLaborales:'SELECT COUNT(*) FROM ReferenciasLaborales',
    updateReferenciasLaboralesById:'UPDATE ReferenciasLaborales SET IdSuscripcion = @IdSuscripcion, NombreCompleto = @NombreCompleto, Telefono = @Telefono, Profesion = @Profesion, Relacion = @Relacion WHERE Id = @Id'
}

export const querysDiplCurSeminSert = {
    getAllDiplCurSeminSert:'SELECT * FROM FormacionComple',
    createNewDiplCurSeminSert:'INSERT INTO FormacionComple (IdSuscripcion, Certificado, EstadoCerti, FechaInicio, FechaFinal, FechaRegistro) VALUES (@IdSuscripcion, @Certificado, @EstadoCerti, @FechaInicio, @FechaFinal, @FechaRegistro)',
    getDiplCurSeminSertById:'SELECT * FROM FormacionComple WHERE IdSuscripcion = @Id',
    deleteDiplCurSeminSert:'DELETE FROM FormacionComple WHERE Id = @Id',
    getTotalDiplCurSeminSert:'SELECT COUNT(*) FROM FormacionComple',
    updateDiplCurSeminSertById:'UPDATE FormacionComple SET IdSuscripcion = @IdSuscripcion, Certificado = @Certificado, EstadoCerti=@EstadoCerti, FechaInicio = @FechaInicio, FechaFinal = @FechaFinal WHERE Id = @Id'
}  
export const querysCategoria = {
    getAllCategoria:'SELECT * FROM categoriaVacantes',
    createNewCategoria:'INSERT INTO categoriaVacantes (Categoria,FechaRegistro) VALUES (@Categoria, @FechaRegistro)',
    getCategoriaById:'SELECT * FROM categoriaVacantes WHERE Id = @Id',
    deleteCategoria:'DELETE FROM categoriaVacantes WHERE Id = @Id',
    getTotalCategoria:'SELECT COUNT(*) FROM categoriaVacantes',
    updateCategoriaById:'UPDATE categoriaVacantes SET Categoria = @Categoria WHERE Id = @Id'
}  

export const querysAplicantes = {
    // getAllAplicantes:'SELECT * FROM [dbo].[usuarioVacante]',
    // createNewAplicantes:'INSERT INTO [dbo].[usuarioVacante] (IdSuscripcion,IdVacante,FechaRegistro) VALUES (@IdSuscripcion, @IdVacante, @FechaRegistro)',
    // getAplicantesById:'SELECT * FROM [dbo].[usuarioVacante] WHERE Id = @Id',
    // deleteAplicantes:'DELETE FROM [dbo].[usuarioVacante] WHERE Id = @Id',
     getTotalAplicantes:'SELECT COUNT(*) FROM Suscripcion s JOIN usuarioVacante a ON s.Id = a.IdSuscripcion WHERE a.IdVacante = @Id',
    // updateAplicantesById:'UPDATE [dbo].[usuarioVacante] SET Categoria = @Categoria WHERE Id = @Id',
    getAllAplicantes:"SELECT s.* FROM Suscripcion s JOIN usuarioVacante a ON s.Id = a.IdSuscripcion WHERE a.IdVacante = @Id AND a.Estado = 'None' "
} 

export const queryslogin = {
   
    userName:'SELECT * FROM Suscripcion WHERE Email = @Email',
    userId:'SELECT * FROM Suscripcion WHERE Id = @Id',
} 


export const querysUsuario = {
    getAllUsuario:'SELECT * FROM Usuario',
    createNewUsuario:'INSERT INTO Usuario (NombreCompleto, Correo, password,FechaRegistro) VALUES (@NombreCompleto, @Correo, @password, @FechaRegistro)',
    getUsuarioById:'SELECT * FROM Usuario WHERE Id = @Id',
    deleteUsuario:'DELETE FROM Usuario WHERE Id = @Id',
    getTotalUsuario:'SELECT COUNT(*) FROM Usuario',
    updateUsuarioById:'UPDATE Usuario SET NombreCompleto = @NombreCompleto, Correo = @Correo, password = @password WHERE Id = @Id',
    LoginUsiario:'SELECT * FROM Usuario WHERE Correo = @Correo'
}


export const querysPeriodo = {

    getAllPeriodo:'SELECT p.Id, v.NombreVacante, p.Estado, p.FechaRegistro FROM Periodo p JOIN Vacantes v ON p.IdVacante = v.Id',
    createNewPeriodo:'INSERT INTO Periodo (IdVacante, Estado, FechaRegistro) VALUES (@IdVacante, @Estado, @FechaRegistro)',
    getPeriodoById:'SELECT * FROM Periodo WHERE IdVacante = @Id',
    deletePeriodo:'DELETE FROM Periodo WHERE Id = @Id',
    getTotalPeriodo:'SELECT COUNT(*) FROM Periodo',
    updatePeriodoById:'UPDATE Periodo SET IdVacante = @IdVacante, Estado = @Estado WHERE Id = @Id',
    //LoginPeriodo:'SELECT * FROM Suscripcion WHERE Email = @Email'
}

export const querysEstadoAplicantes = {
    getAllEstadoAplicantes:'SELECT s.Id, s.Nombre, v.Id AS IdVacante,  v.NombreVacante, t.Estado FROM EstadoAplicantes t JOIN Suscripcion s ON s.Id = t.IdSuscripcion JOIN Vacantes v ON v.Id = t.IdVacante',
    createNewEstadoAplicantes:'INSERT INTO EstadoAplicantes (IdSuscripcion ,IdVacante, Estado, FechaRegistro) VALUES (@IdSuscripcion, @IdVacante, @Estado, @FechaRegistro)',
    getEstadoAplicantesById:'SELECT * FROM EstadoAplicantes WHERE IdSuscripcion = @Id',
    deleteEstadoAplicantes:'DELETE FROM EstadoAplicantes WHERE Id = @Id',
    getTotalEstadoAplicantes:'SELECT COUNT(*) FROM EstadoAplicantes',
    updateEstadoAplicantesById:'UPDATE EstadoAplicantes SET IdSuscripcion = @IdSuscripcion, IdVacante = @IdVacante, Estado = @Estado WHERE Id = @Id',
    //LoginPeriodo:'SELECT * FROM Suscripcion WHERE Email = @Email'
}