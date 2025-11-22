// ====================================================================== 

// ** Importaciones **

import styles from "../styles/modules/interfaces/Library.module.css";
import InterfaceHero from "../components/global/InterfaceHero.jsx";
import StatsHero from "../components/global/StatsHero.jsx";
import { getGames } from "../api/apiGames.js";
import GameFilters from "../components/library/filters/GameFilters.jsx";
import GameCard from "../components/library/content/GameCard.jsx";
import { useEffect, useState } from "react";
import SmoothScrollbarWrapper from "../components/global/SmoothScrollbarWrapper.jsx";

// ====================================================================== 

// ** Componente Library **
// Props: fncVisibilityModal, refreshTrigger
// Retorna: Vista de la biblioteca

// ====================================================================== 

// ** Props **
// fncVisibilityModal: funcion para cambiar la visibilidad del modal
// refreshTrigger: trigger para refrescar los datos

// ====================================================================== 

const Library = ({ fncVisibilityModal, refreshTrigger }) => {
    // ** Variables **

    // Obtener que diseno de vista esta definido para los juegos desde sessionStorage
    let definedLayout = sessionStorage.getItem("libraryLayout");
    // Si no hay un diseno de vista definido, se establece el diseno de vista por defecto
    if (!definedLayout) {
        sessionStorage.setItem("libraryLayout", "gridView");
        definedLayout = "gridView";
    }
    // Obtener el filtro que esta definido para los juegos desde sessionStorage
    let definedFilter = sessionStorage.getItem("libraryFilter");
    // Si no hay un filtro definido, se establece el filtro por defecto
    if (!definedFilter) {
        sessionStorage.setItem("libraryFilter", "All Games");
        definedFilter = "All Games";
    }

    // ** Hooks **

    // Hook para almacenar los juegos recibidos de la API
    const [gamesData, setGamesData] = useState([]);
    // Hook para almacenar el diseno de vista de los juegos
    const [layoutLibrary, setLayoutLibrary] = useState(definedLayout);
    // Hook para almacenar el filtro establecido para los juegos
    const [filterLibrary, setFilterLibrary] = useState(definedFilter);

    // ** Funciones **

    useEffect(() => {
        // Funcion para obtener los juegos de la API
        const fetchGames = async () => {
            try {
                const response = await getGames();
                setGamesData(response.games.reverse());
            } catch (error) {
                console.error("Error en fetch:", error);
            }
        };
        fetchGames();
    }, [refreshTrigger]);

    // Funcion para cambiar el diseno de vista de los juegos
    const handleChangeLayout = (newLayout) => {
        // Verificar si el nuevo diseno es diferente al ya establecido
        if (definedLayout !== newLayout) {
            // Si el nuevo diseno es diferente al ya establecido, se actualiza el diseno de vista
            sessionStorage.setItem("libraryLayout", newLayout);
            setLayoutLibrary(newLayout);
        }
        return;
    };

    // Funcion para cambiar el filtro establecido para los juegos
    const handleDefinefilter = (newFilter) => {
        // Verificar si el nuevo filtro es diferente al ya establecido
        if (definedFilter !== newFilter) {
            // Si el nuevo filtro es diferente al ya establecido, se actualiza el filtro
            sessionStorage.setItem("libraryFilter", newFilter);
            setFilterLibrary(newFilter);
        }
        return;
    };

    // ** Renderizado **

    return (
        // Renderizar la biblioteca con el diseno de vista y el filtro establecido
        <div className={styles.libraryContainer}>
            <div className="completedHero">
                {/* Renderizar el hero de la biblioteca */}
                <InterfaceHero context="library" />
                {/* Renderizar el hero de estadisticas de la biblioteca */}
                <StatsHero data={gamesData} context="library" />
            </div>
            <div>
                {/* Renderizar los filtros de la biblioteca con la funcion para cambiar el diseno de vista y el filtro establecido */}
                <GameFilters
                    fncLayout={handleChangeLayout}
                    fncFilter={handleDefinefilter}
                    definedLayout={definedLayout}
                    definedFilter={definedFilter}
                />
            </div>

            {/* Renderizar el scroll suave para la biblioteca */}
            <SmoothScrollbarWrapper
                style={{
                    height: "600px",
                    overflow: "auto",
                    margin: "2rem 0 4rem 0",
                    borderBottom: "var(--bdr-Glass)",
                    borderTop: "var(--bdr-Glass)",
                }}
            >
                {/* Renderizar el contenido de la biblioteca */}
                <div
                    className={`${styles.libraryContent} ${styles[layoutLibrary]}`}
                >
                    {/* Renderizar los juegos de la biblioteca mapeados con la funcion para cambiar la visibilidad del modal */}
                    {gamesData.map((game, index) => {
                        return (
                            <GameCard
                                key={index}
                                gameData={game}
                                gameFilter={filterLibrary}
                                fncVisibilityModal={fncVisibilityModal}
                            />
                        );
                    })}
                </div>
            </SmoothScrollbarWrapper>
        </div>
    );
};

// ====================================================================== 

// ** Exportacion **

export default Library;
