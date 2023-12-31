import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Componentes
import ModalAgregar from "../../components/Admin/AdminCursosByLic/ModalAgregar";
import { ModalProvider } from "../../context/modalContext";
import { TablaUeasByLic } from "../../components/Admin/AdminCursosByLic/TablaUeasByLic";

// Services
import { getLicNameByClave } from "../../services/licenciaturas/getLicNameByClave";

function AdminUeasTablaPage() {

  // Obtenemos los parámetros pasados por URL
  const { claveLic } = useParams();
  // Lista de materias en la licenciatura elegida
  const [materias, setMaterias] = useState([]);
  // Nombre de la licenciatura
  const [licNombre, setLicNombre] = useState("Nombre Licenciaturas");

  // Objeto que contiene los datos del usuario
  let user = Object();
  user.matricula = 2183011316;
  user.licenciatura = "Computación";

  //Valores para el context del modal
  const dataModal = {
    clave: "",
    nombre: "",
    profesores: null
  }

  useEffect(() => {
    document.title = "Panel de Administracion";
    getLicNameByClave(claveLic).then(lic =>{
      setLicNombre(lic.nombre);
      setMaterias(lic.cursos);
    });
  }, [claveLic]);

  return (
    <div className="bg-base-200">
      <div className="min-h-screen bg-base-200 px-2 md:px-10 pb-10 md:pb-20 mx-auto">
        {/* Información */}
        <div className="bg-base-200 pb-10">
          <h2 className="text-2xl">Licenciatura: <b>{licNombre}</b></h2>
          <p>Aquí puedes agregar, eliminar, editar y abrir materias/UEAs</p>
        </div>

        <ModalProvider initialModalData={dataModal}>
          <TablaUeasByLic cursos={materias} setCursos={setMaterias} claveLic={claveLic}/>
          <ModalAgregar setCursosLic={setMaterias} claveLic={claveLic}/> 
        </ModalProvider>
      </div>
    </div>
  );
}


export default AdminUeasTablaPage
