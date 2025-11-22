// ====================================================================== 

// ** Importaciones **

import styles from "../../../styles/modules/components/SearchInput.module.css";
import { Search } from "lucide-react";

// ====================================================================== 

// ** Componente SearchInput **
// Props: None
// Retorna: input de búsqueda

// ====================================================================== 

const SearchInput = () => {
    // ** Renderizado **

    return (
        // Renderizar el contenedor del input de búsqueda
        <div className={styles.searchInputContainer}>
            {/* Renderizar el icono de búsqueda */}
            <Search color="var(--SearchInputColor)" size={20}/>
            {/* Renderizar el input de búsqueda */}
            <input placeholder="Search your games..." required />
        </div>
    );
};

// ====================================================================== 

// ** Exportación **

export default SearchInput;
