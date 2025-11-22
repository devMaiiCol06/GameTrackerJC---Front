// ====================================================================== 

// ** Importaciones **

import styles from "../../styles/modules/components/Logo.module.css";
import "../../styles/global/index.css";

// ====================================================================== 

// ** Componente Logo **
// Props: none
// Retorna: logo

// ====================================================================== 


const Logo = () => {

    // ** Renderizado **

    return (
        // Renderizar un div con la clase LogoContainer y el contenido de los logos
        <div className={styles.LogoContainer}>
            {/* Renderizar el imagotipo */}
            <img
                className={styles.Imagotipo}
                src="/src/assets/Imagotipo - GameTracker.png"
                alt="Imagotipo - GameTracker"
            />
            {/* Renderizar el logotipo */}
            <img
                className={styles.Logotipo}
                src="/src/assets/Logotipo - GameTracker.png"
                alt="Logotipo - GameTracker"
            />
            {/* Renderizar el isotipo */}
            <img
                className={styles.Isotipo}
                src="/src/assets/Isotipo - GameTracker.png"
                alt="Isotipo - GameTracker"
            />
        </div>
    );
};

// ====================================================================== 

// ** Exportación **

export default Logo;
