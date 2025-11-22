// ====================================================================== 

// ** Importaciones **

import styles from "../../../styles/modules/components/LayoutSwitchBttn.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

// ====================================================================== 

// ** Componente LayoutSwitchBttn **
// Props: configs, onAction
// Retorna: botón de layout

// ====================================================================== 

// ** Props **
// configs: configuración del botón | objeto con las propiedades del botón
// onAction: función de acción | función que se ejecuta al hacer clic en el botón

// ====================================================================== 

const LayoutSwitchBttn = ({ configs, onAction }) => {
    // Verificar si hay configuración del botón
    if (!configs) {
        return null;
    }

    // ** Funciones **

    // Función para manejar el clic en el botón
    const handleClick = () => {
        // Si el layout es el mismo que el botón, se activa
        if (configs.definedLayout === "inactiveLayout") {
            // Ejecutar la función de acción pasando el layout como parámetro
            onAction(configs.layout);
        }
        return;
    };

    // ** Renderizado **

    return (
        // Renderizar el botón de layout
        <button
            type="button"
            // Agregar las clases del botón y el layout
            className={`${styles.layoutSwitchBttn} ${
                styles[configs.definedLayout]
            }`}
            // Manejar el clic en el botón
            onClick={() => handleClick()}
        >
            {/* Renderizar el icono del botón */}
            <DynamicIcon name={configs.iconContent} />
        </button>
    );
};

// ====================================================================== 

// ** Exportación **

export default LayoutSwitchBttn;
