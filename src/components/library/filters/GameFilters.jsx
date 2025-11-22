// ====================================================================== 

// ** Importaciones **

import styles from "../../../styles/modules/components/gameFilters.module.css";
import RegularBttn from "../../global/RegularBttn";
import LayoutSwitchBttn from "./LayoutSwitchBttn.jsx";
import SearchInput from "./SearchInput";

// ====================================================================== 

// ** Componente GameFilters **
// Props: fncLayout, fncFilter, definedLayout, definedFilter
// Retorna: div con los filtros de la biblioteca

// ====================================================================== 

// ** Props **
// fncLayout: función para cambiar el layout
// fncFilter: función para cambiar el filtro
// definedLayout: layout seleccionado
// definedFilter: filtro seleccionado

// ====================================================================== 

const GameFilters = ({
    fncLayout,
    fncFilter,
    definedLayout,
    definedFilter,
}) => {
    // ** Variables **

    // Botones de layout
    const layoutBttns = [
        // Botón de grid
        {
            iconContent: "grid-2x2",
            layout: "gridView",
        },
        // Botón de lista
        {
            iconContent: "list",
            layout: "listView",
        },
    ];

    // Botones de filtro
    let filterBttns = [
        // Botón de todos los juegos
        {
            textContent: "All Games",
            iconContent: "gallery-vertical-end",
            bttnBg: false,
            bttnContext: "filter",
        },
        // Botón de jugando
        {
            textContent: "Playing",
            iconContent: "play",
            bttnBg: false,
            bttnContext: "filter",
        },
        // Botón de completado
        {
            textContent: "Completed",
            iconContent: "trophy",
            bttnBg: false,
            bttnContext: "filter",
        },
        // Botón de lista de deseos
        {
            textContent: "Wishlist",
            iconContent: "heart",
            bttnBg: false,
            bttnContext: "filter",
        },
        // Botón de abandonado
        {
            textContent: "Dropped",
            iconContent: "door-open",
            bttnBg: false,
            bttnContext: "filter",
        },
    ];

    // ** Renderizado **

    return (
        // Renderizar el contenedor de los filtros
        <div className={styles.gameFiltersContainer}>
            <div className={styles.filterBttnsContainer}>
                {/* Renderizar los botones de filtro mediante un mapeo */}
                {filterBttns.map((button, index) => {
                    // Configuración del botón
                    const buttonConfig =
                        // Si el filtro es el mismo que el botón, se activa
                        button.textContent === definedFilter
                            ? { ...button, definedFilter: "activeFilter" }
                            : { ...button, definedFilter: "inactiveFilter" };
                    // Renderizar el botón
                    return (
                        // Renderizar el componente RegularBttn con la configuración del botón y la función de acción
                        <RegularBttn
                            configs={buttonConfig}
                            key={index}
                            onAction={fncFilter}
                        />
                    );
                })}
            </div>
            {/* Renderizar el contenedor de la búsqueda y el layout */}
            <div className={styles.searchLayoutContainer}>
                {/* Renderizar el componente SearchInput que permite buscar juegos */}
                <SearchInput />
                {/* Renderizar el contenedor de los botones de layout */}
                <div className={styles.layoutBttnsContainer}>
                    {/* Renderizar los botones de layout mediante un mapeo */}
                    {layoutBttns.map((button, index) => {
                        // Configuración del botón
                        const buttonConfig =
                            // Si el layout es el mismo que el botón, se activa
                            button.layout === definedLayout
                                ? { ...button, definedLayout: "activeLayout" }
                                : {
                                      ...button,
                                      definedLayout: "inactiveLayout",
                                  };
                        // Renderizar el botón
                        return (
                            // Renderizar el componente LayoutSwitchBttn con la configuración del botón y la función de acción
                            <LayoutSwitchBttn
                                configs={buttonConfig}
                                key={index}
                                onAction={fncLayout}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

// ====================================================================== 

// ** Exportación **

export default GameFilters;
