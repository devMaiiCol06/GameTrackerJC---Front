// ======================================================================

// ** Importaciones **

import styles from "../../../styles/modules/components/GameCard.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import PlayStation from "../../global/platforms/Playstation";
import Nintendo from "../../global/platforms/Nintendo";
import Xbox from "../../global/platforms/Xbox";
import PC from "../../global/platforms/PC";
import Smartphone from "../../global/platforms/Smartphone";
import VR from "../../global/platforms/VR";

// ======================================================================

// ** Componente GameCard **
// Props: gameData, gameFilter, fncVisibilityModal
// Retorna: gameCard

// ======================================================================

// ** Props **
// gameData: datos del juego
// gameFilter: filtro de juegos
// fncVisibilityModal: función para cambiar la visibilidad del modal

// ======================================================================

const GameCard = ({ gameData, gameFilter, fncVisibilityModal }) => {
    // Verificar si el juego cumple con el filtro
    if (gameFilter !== "All Games") {
        // Si el filtro es diferente a "All Games", verificar si el estado del juego es el mismo que el filtro
        if (gameData.gameStatus !== gameFilter) {
            return;
        }
    }

    // ** Renderizado **

    return (
        // Renderizar la tarjeta del juego con la información del juego
        <div className={styles.GameCardContainer}>
            <div className={styles.generalGameCard}>
                <div className={styles.gameHead}>
                    <div className={styles.gameStatusContainer}>
                        <span
                            // Clases para el estado del juego
                            className={`${styles.gameStatus} ${
                                styles[gameData.gameStatus.toLowerCase()]
                            }`}
                        >
                            {/* Renderizar el icono y el texto del estado del juego */}
                            {(() => {
                                switch (gameData.gameStatus) {
                                    case "Completed":
                                        return (
                                            // Renderizar el icono de círculo con un check
                                            <DynamicIcon
                                                name="circle-check-big"
                                                size={13}
                                            />
                                        );
                                    case "In Progress":
                                        return (
                                            // Renderizar el icono de play
                                            <DynamicIcon
                                                name="play"
                                                size={13}
                                            />
                                        );
                                    case "Wishlist":
                                        return (
                                            // Renderizar el icono de corazón
                                            <DynamicIcon
                                                name="heart"
                                                size={13}
                                            />
                                        );
                                    case "Dropped":
                                        return (
                                            // Renderizar el icono de círculo con una pausa
                                            <DynamicIcon
                                                name="circle-pause"
                                                size={13}
                                            />
                                        );
                                }
                            })()}
                            {gameData.gameStatus}
                        </span>
                        {gameData.gamePlatform && (
                            <span className={styles.gamePlatform}>
                                {/* Renderizar el icono de la plataforma */}
                                {(() => {
                                    switch (gameData.gamePlatform) {
                                        case "PC":
                                            return (
                                                // Renderizar el icono de PC
                                                <PC height={16} width={16} />
                                            );
                                        case "PlayStation":
                                            return (
                                                // Renderizar el icono de PlayStation
                                                <PlayStation
                                                    height={16}
                                                    width={16}
                                                />
                                            );
                                        case "Xbox":
                                            return (
                                                // Renderizar el icono de Xbox
                                                <Xbox height={16} width={16} />
                                            );
                                        case "Nintendo":
                                            return (
                                                // Renderizar el icono de Nintendo
                                                <Nintendo
                                                    width={16}
                                                    height={16}
                                                />
                                            );
                                        case "Phone":
                                            return (
                                                // Renderizar el icono de Smartphone
                                                <Smartphone
                                                    height={16}
                                                    width={16}
                                                />
                                            );
                                        case "VR":
                                            return (
                                                // Renderizar el icono de VR
                                                <VR height={16} width={16} />
                                            );
                                        default:
                                            return null;
                                    }
                                })()}
                            </span>
                        )}
                    </div>
                    {/* Renderizar la imagen del juego */}
                    <img
                        className={styles.gameImage}
                        src={gameData.gameImage}
                        alt={gameData.gameTitle}
                    />
                </div>
                {/* Renderizar la informacion del juego */}
                <div className={styles.gameInfo}>
                    {/* Renderizar el titulo del juego */}
                    <h3 className={styles.gameTitle}>{gameData.gameTitle}</h3>
                    {/* Renderizar el genero del juego */}
                    <span className={styles.gameGenre}>
                        {gameData.gameGenre}
                    </span>
                    {/* Renderizar los detalles del juego */}
                    <div className={styles.gameDetails}>
                        {/* Renderizar las horas jugadas */}
                        <span className={styles.gameHoursPlayed}>
                            <DynamicIcon name="clock" size={14} />
                            {gameData.gameHoursPlayed}
                        </span>
                        {/* Renderizar la fecha de finalizacion o la fecha de registro */}
                        {gameData.gameDateCompleted ? (
                            <span className={styles.gameDateCompleted}>
                                <DynamicIcon name="trophy" size={14} />
                                {gameData.gameDateCompleted.split("T")[0]}
                            </span>
                        ) : (
                            <span className={styles.gameDateRegister}>
                                <DynamicIcon name="calendar" size={14} />
                                {gameData.gameDateRegister.split("T")[0]}
                            </span>
                        )}
                    </div>
                    {/* Renderizar el boton de detalles */}
                    <button
                        // Al hacer click, se abre el modal con el contexto "viewGame" y los datos del juego
                        onClick={() =>
                            fncVisibilityModal({
                                context: "viewGame",
                                gameData,
                            })
                        }
                        className={styles.gameDetailsButton}
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

// ====================================================================== 

// ** Exportación **

export default GameCard;
