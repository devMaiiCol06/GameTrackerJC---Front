import styles from "../styles/modules/interfaces/Library.module.css";
import InterfaceHero from "../components/global/InterfaceHero.jsx";
import StatsHero from "../components/global/StatsHero.jsx";
import { getGames } from "../api/apiGames.js";
import { useEffect, useState } from "react";

const Library = () => {
    const [gamesData, setGamesData] = useState([]);

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

    return (
        <div className={styles.libraryContainer}>
            <InterfaceHero  context="library" />
            <StatsHero data={gamesData} context="library" />
        </div>
    );
};

export default Library;
