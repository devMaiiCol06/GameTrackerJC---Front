// ======================================================================

// ** Importaciones **

import styles from "../../styles/modules/components/StatsHero.module.css";

// ======================================================================

// ** Componente StatsHero **
// Props: data, context
// Retorna: div

// ======================================================================

// ** Props **
// data: array de juegos
// context: string library

// ======================================================================

const StatsHero = ({ data, context }) => {
    // ** Variables **

    // Obtener la lista de estadisticas
    const stats = calculateStats(data, context);

    // ** Renderizado **

    return (
        // Renderizar un div con la clase statsHeroContainer y el contenido del array stats
        <div className={styles.statsHeroContainer}>
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`${styles.statCounter} ${styles.context}`}
                >
                    {/* Valor de la estadística */}
                    <h2>{stat.value}</h2>
                    {/* Nombre de la estadística */}
                    <p>{stat.label}</p>
                </div>
            ))}
        </div>
    );
};

// Función para calcular estadísticas según el contexto
const calculateStats = (data, context) => {
    if (context === "library") {
        return [
            // Total de juegos
            {
                value: data.length,
                label: "Total",
            },
            // Juegos en juego
            {
                value: data.filter((game) => game.gameStatus === "Playing")
                    .length,
                label: "Playing",
            },
            // Juegos completados
            {
                value: data.filter((game) => game.gameStatus === "Completed")
                    .length,
                label: "Completed",
            },
            // Juegos en la lista de deseos
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

// ====================================================================== 

// ** Exportación **

export default StatsHero;
