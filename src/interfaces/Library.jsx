import styles from "../styles/modules/interfaces/Library.module.css";
import InterfaceHero from "../components/global/InterfaceHero.jsx";
import StatsHero from "../components/global/StatsHero.jsx";
import { getGames } from "../api/apiGames.js";
import { useEffect, useState } from "react";
import GameFilters from "../components/library/filters/GameFilters.jsx";

const Library = () => {
    // Obtener que diseno impuso el usuario temporalmente a los juegos
    let definedLayout = sessionStorage.getItem("libraryLayout");
    if (!definedLayout) {
        sessionStorage.setItem("libraryLayout", "gridView");
        definedLayout = "gridView";
    }
    // Obtener el filtro que esta definido para los juegos
    let definedFilter = sessionStorage.getItem("libraryFilter");
    if (!definedFilter) {
        sessionStorage.setItem("libraryFilter", "All Games");
        definedFilter = "All Games";
    }
    // Hook para almacenar los juegos recibidos de la API
    const [gamesData, setGamesData] = useState([]);
    // Hook para almacenar el diseno de vista de los juegos
    const [layoutLibrary, setLayoutLibrary] = useState(definedLayout);
    // Hook para almacenar el filtro establecido para los juegos
    const [filterLibrary, setFilterLibrary] = useState(definedFilter);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await getGames();
                setGamesData(response.games);
            } catch (error) {
                console.error("Error en fetch:", error);
            }
        };
        fetchGames();
    }, []);

    const handleChangeLayout = (newLayout) => {
        // Verificar si el nuevo diseno es diferente al ya establecido
        if (definedLayout !== newLayout) {
            sessionStorage.setItem("libraryLayout", newLayout);
            setLayoutLibrary(newLayout);
        }
        return;
    };

    const handleDefinefilter = (newFilter) => {
        // Verificar si el nuevo filtro es diferente al ya establecido
        if (definedFilter !== newFilter) {
            sessionStorage.setItem("libraryFilter", newFilter);
            setFilterLibrary(newFilter);
        }
        return;
    };

    return (
        <div className={styles.libraryContainer}>
            <div>
                <InterfaceHero context="library" />
                <StatsHero data={gamesData} context="library" />
            </div>
            <div>
                <GameFilters
                    fncLayout={handleChangeLayout}
                    fncFilter={handleDefinefilter}
                    definedLayout={definedLayout}
                    definedFilter={definedFilter}
                />
            </div>
            <div className={styles[layoutLibrary]}>
                {/* Aqui iran los juegos */}
            </div>
        </div>
    );
};

export default Library;
