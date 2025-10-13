import { useEffect, useState } from "react";
import StatsHero from "../components/global/StatsHero";
import styles from "../styles/modules/interfaces/Archievements.module.css";
import { getArchievs } from "../api/apiArchievs.js";

const Archievements = () => {
    const [archievsData, setArchievsData] = useState([]);

    useEffect(() => {
        const fetchArchievs = async () => {
            try {
                const response = await getArchievs()
                setArchievsData(response.archievements)
            } catch (error) {
                console.error("Error en fetch:", error);
            }
        }

        fetchArchievs();
    }, []);

    return (
        <div className={styles.ArchievementsContainer}>
            <InterfaceHero context="archievements" />
            <StatsHero context="archievements" data={archievsData} />
        </div>
    );
};

export default Archievements;
