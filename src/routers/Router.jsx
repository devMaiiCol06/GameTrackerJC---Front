// ====================================================================== 

// ** Importaciones **

import { Routes, Route, Navigate } from "react-router-dom";
import Library from "../interfaces/Library";
import Stats from "../interfaces/Stats";

// ====================================================================== 

// ** Componente Router **
// Props: fncVisibilityModal, refreshTrigger
// Retorna: router con las rutas de la aplicacion

// ====================================================================== 

// ** Props **
// fncVisibilityModal: funcion para mostrar el modal
// refreshTrigger: trigger para refrescar la lista de juegos

// ====================================================================== 


const Router = (props) => {
    return (
        // Routes para las rutas de la aplicacion
        <Routes>
            <Route
                // Ruta de la biblioteca
                path="/library"
                element={
                    // Componente de la biblioteca con las funciones de visibilidad del modal y trigger de refresco
                    <Library
                        fncVisibilityModal={props.fncVisibilityModal}
                        refreshTrigger={props.refreshTrigger}
                    />
                }
            />
            <Route
                // Ruta de estadisticas
                path="/stats"
                element={
                    // Componente de estadisticas
                    <Stats />
                }
            />
            <Route
                // Ruta para redireccionamiento si se accede a rutas no existentes
                path="*"
                element={<Navigate to="/library" replace />}
            />
        </Routes>
    );
};

// ====================================================================== 

// ** Exportacion **

export default Router;
