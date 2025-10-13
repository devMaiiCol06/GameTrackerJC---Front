import styles from "../../styles/modules/components/StatsHero.module.css";

const StatsHero = ({ data, context }) => {
    // Función para calcular estadísticas según el contexto
    const calculateStats = (data, context) => {
        if (context === "library") {
            return [
                {
                    value: data.length,
                    label: "Total",
                },
                {
                    value: data.filter(
                        (game) => game.gameStatus === "In Progress"
                    ).length,
                    label: "In Progress",
                },
                {
                    value: data.filter(
                        (game) => game.gameStatus === "Completed"
                    ).length,
                    label: "Completed",
                },
                {
                    value: data.filter((game) => game.gameStatus === "Wishlist")
                        .length,
                    label: "Wishlist",
                },
            ];
        }

        // Retorno por defecto para futuros contextos
        return [];
    };

    // Obtener la lista de estadisticas
    const stats = calculateStats(data, context);

    return (
        <div className={styles.statsHeroContainer}>
            {stats.map((stat, index) => (
                <div key={index} className={`${styles.statCounter} ${styles.context}`}>
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

export default StatsHero;
