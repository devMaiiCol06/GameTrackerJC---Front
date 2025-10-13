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

        if (context === "archievements") {
            return [
                {
                    value: data.length,
                    label: "TOTAL",
                },
                {
                    value: data.filter(
                        (archiev) => archiev.archievStatus === "unlocked"
                    ).length,
                    label: "UNLOCKED",
                },
                {
                    value: data.filter(
                        (archiev) =>
                            archiev.archievCategory === "legendary" &&
                            archiev.archievStatus === "unlocked"
                    ).length,
                    label: "LEGENDARY",
                },
                {
                    value:
                        data.length > 0
                            ? `${Math.round(
                                  (data.filter(
                                      (archiev) =>
                                          archiev.archievStatus === "unlocked"
                                  ).length /
                                      data.length) *
                                      100
                              )}%`
                            : "0%",
                    label: "COMPLETE",
                },
            ];
        }

        // Retorno por defecto para futuros contextos
        return [];
    };

    // Obtener la lista de estadisticas
    const stats = calculateStats(data, context);

    return (
        <div className={styles.StatsHeroContainer}>
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
