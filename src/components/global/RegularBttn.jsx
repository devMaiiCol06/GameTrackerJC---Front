// ======================================================================

// Importaciones Generales

import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../styles/modules/components/RegularBttn.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

// ======================================================================

// Componente RegularBttn
// Props: configs, onAction
// Retorna: button

// ======================================================================

// ** Props **
// configs: objeto con las configuraciones del boton: bttnContext, iconContent, iconColor, textContent, definedFilter, etc
// onAction: funcion para ejecutar una accion

// ======================================================================

const RegularBttn = ({ configs, onAction }) => {
    // Verificar si configs es null
    if (!configs) {
        return null;
    }

    // ** Variables **

    // Declarar navegador de rutas
    const navigate = useNavigate();
    // Boton con nuevas configuraciones
    const newBttn =
        configs.bttnContext === "header"
            ? getNewBttnConfigs(configs)
            : { ...configs };

    // ** Funciones **

    // Manejar click del boton
    const handleClick = () => {
        // Verificar si el boton es de header
        if (newBttn.bttnLink && newBttn.bttnContext === "header") {
            // Navegar a la ruta del boton
            navigate(`/${newBttn.bttnLink}`);
        } else if (
            // Verificar si el boton es de filtro y es inactivo
            configs.definedFilter === "inactiveFilter" &&
            configs.bttnContext === "filter"
        ) {
            // Ejecutar accion del boton
            onAction(configs.textContent);
        } else if (
            // Verificar si el boton es de modal new game
            configs.bttnContext === "modalNewGame"
        ) {
            // Ejecutar accion del boton pasando el contexto
            onAction({ context: "newGame" });
        }
        return;
    };

    // ** Renderizado **

    return (
        // Boton con clases dinamicas y evento de click
        <button
            type="button"
            className={`${styles.regularBttn} ${styles[newBttn.bttnBg]} ${
                styles[configs.definedFilter]
            }`}
            onClick={handleClick}
        >
            {/* Verificar si el boton tiene icono */}
            {newBttn.iconContent && (
                // Icono dinamico
                <DynamicIcon
                    name={newBttn.iconContent}
                    color={newBttn.iconColor}
                />
            )}
            {/* Verificar si el boton tiene texto */}
            {newBttn.textContent && (
                // Texto del boton
                <span>{newBttn.textContent}</span>
            )}
        </button>
    );
};

// ======================================================================

// Funcion para obtener las configuraciones del boton
// Mas que todo para la funcionalidad del boton de header de navegacion: Library y Stats

function getNewBttnConfigs(configs) {
    // Crear copia de la configuracion del boton
    let bttnConfigs = { ...configs };

    // Obtener el path actual del navegador
    const { pathname } = useLocation();
    // Normalizar el path y el texto del boton para hacer la comparacion
    const normalizedPath = pathname.toLowerCase().replace("/", "");
    const normalizedText = bttnConfigs.textContent
        ? bttnConfigs.textContent.toLowerCase().replace(" ", "")
        : "";

    // Verificar si el boton es de header y si el path es igual al texto del boton
    if (bttnConfigs.textContent && normalizedPath === normalizedText) {
        bttnConfigs.bttnBg = "primaryBgBttn";
    }

    // Asignar el link del boton
    bttnConfigs = { ...bttnConfigs, bttnLink: normalizedText };

    // Retornar la nueva configuracion del boton
    return bttnConfigs;
}

// ======================================================================

// ** Exportacion **

export default RegularBttn;
