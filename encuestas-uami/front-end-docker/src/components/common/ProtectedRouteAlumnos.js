import {useContext, useEffect} from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {AuthContextAlumnos} from "../../context/AuthContextAlumnos.js";


const ProtectedRouteAlumnos = ({
    redirectPath = '/',
    children,
  }) => {

    const {state} = useContext(AuthContextAlumnos)
    console.log(state)

    if (state.isLoginPending) {
      {/* TODO: Crear una loading page*/}
//      return 
//    Quitar esto cuando este la loading page
      return <Navigate to={redirectPath} replace />;

    }else if(!state.isLoggedIn){
      return <Navigate to={redirectPath} replace />;
    }else {
      return children ? children : <Outlet />;
    }
  };

export default ProtectedRouteAlumnos;