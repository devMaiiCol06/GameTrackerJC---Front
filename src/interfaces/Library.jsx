import styles from "../styles/modules/interfaces/Library.module.css";
import InterfaceHero from "../components/global/InterfaceHero.jsx";
import StatsHero from "../components/global/StatsHero.jsx";
import { getGames } from "../api/apiGames.js";
import { useEffect, useState } from "react";
import GameFilters from "../components/library/filters/GameFilters.jsx";

const Library = () => {
    let definedLayout = sessionStorage.getItem("libraryLayout");
    if (!definedLayout) {
        sessionStorage.setItem("libraryLayout", "gridView");
        definedLayout = "gridView";
    }
    const [gamesData, setGamesData] = useState([]);
    const [layoutLibrary, setLayoutLibrary] = useState(definedLayout);

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
        sessionStorage.setItem("libraryLayout", newLayout);
        setLayoutLibrary(newLayout);
    };

    return (
        <div className={styles.libraryContainer}>
            <div>
                <InterfaceHero context="library" />
                <StatsHero data={gamesData} context="library" />
            </div>
            <div>
                <GameFilters onAction={handleChangeLayout} definedLayout={definedLayout}/>
            </div>
            <div className={styles[layoutLibrary]}>
                {/* Aqui iran los juegos */}
            </div>
        </div>
    );
};

export default Library;
