// ====================================================================== 

// ** Importaciones **

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "../../styles/modules/components/ThemeChanger.module.css";

// ====================================================================== 

// ** Componente ThemeChanger **
// Props: none
// Retorna: themeChanger

// ====================================================================== 


const ThemeChanger = () => {
    // ** Variables **

    const [theme, setTheme] = useState("darkMode");

    // ** Funciones **

    useEffect(() => {
        // Obtener el tema almacenado en localStorage
        const selectedTheme = localStorage.getItem("selectedTheme");
        // Verificar si existe un tema almacenado
        if (selectedTheme) {
            // Si existe, se establece el tema y se agrega la clase al body
            setTheme(selectedTheme);
            document.body.classList.add(selectedTheme);
        } else {
            // Si no existe, se establece el tema por defecto y se agrega la clase al body
            document.body.classList.add("lightMode");
        }
    }, []);
    
    // Funcion: Cambiar el tema
    const changeTheme = () => {
        // Si el tema es lightMode, se cambia a darkMode y viceversa
        const newTheme = theme === "lightMode" ? "darkMode" : "lightMode";
        // Remover la clase del tema actual
        document.body.classList.remove(theme);
        // Agregar la clase del nuevo tema
        document.body.classList.add(newTheme);
        // Actualizar el estado del tema
        setTheme(newTheme);
        // Almacenar el nuevo tema en localStorage
        localStorage.setItem("selectedTheme", newTheme);
    };

    // ** Renderizado **

    return (
        // Renderizar un div con la clase themeButton y el evento onClick
        <div onClick={changeTheme} className={styles.themeButton}>
            {/* Renderizar un icono de Luna si el tema es lightMode, de Sol si es darkMode */}
            {theme === "lightMode" ? (
                <Moon color="var(--themeColorDark)" size={20} />
            ) : (
                <Sun color="var(--themeColorLight)" size={20} />
            )}
        </div>
    );
};

// ====================================================================== 

// ** Exportación **

export default ThemeChanger;
