// ====================================================================== 

// ** Importaciones **

import styles from "../../styles/modules/components/Header.module.css";
import RegularBttn from "../global/RegularBttn";
import ThemeChanger from "./ThemeChanger.jsx";
import Logo from "./Logo";

// ====================================================================== 

// ** Componente Header **
// Props: fncVisibilityModal
// Retorna: header

// ====================================================================== 

// ** Props **
// fncVisibilityModal: función para mostrar el modal

// ====================================================================== 

const Header = ({ fncVisibilityModal }) => {
    // ** Variables **

    // Configuración de los botones
    let buttons = [
        // Botón de la biblioteca
        {
            textContent: "Library",
            iconContent: "gamepad-2",
            bttnBg: false,
            bttnContext: "header",
        },
        // Botón de estadísticas
        {
            textContent: "Stats",
            iconContent: "chart-column",
            bttnBg: false,
            bttnContext: "header",
        },
        // Botón de agregar un juego
        {
            textContent: "Add Game",
            iconContent: "plus",
            bttnBg: "secondaryBgBttn",
            bttnContext: "modalNewGame",
        },
    ];

    // ** Renderizado **

    return (
        // Renderizar un header con el logo y los botones
        <header>
            <Logo />
            <div className={styles.navigateBttns}>
                {/* Mapear los botones */}
                {buttons.map((config, index) => (
                    // Renderizar un botón regular con la configuración y la función de acción
                    <RegularBttn
                        configs={config}
                        key={index}
                        onAction={fncVisibilityModal}
                    />
                ))}
                {/* Botón para cambiar el tema */}
                <ThemeChanger />
            </div>
        </header>
    );
};

// ====================================================================== 

// ** Exportación **

export default Header;
