import styles from "../../../styles/modules/components/GameCard.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const GameCard = ({ gameData, gameFilter }) => {
    if (gameFilter !== "All Games") {
        if (gameData.gameStatus !== gameFilter) {
            return;
        }
    }

    return (
        <div className={styles.GameCardContainer}>
            <div className={styles.generalGameCard}>
                <div className={styles.gameHead}>
                    <div className={styles.gameStatusContainer}>
                        <span
                            className={`${styles.gameStatus} ${
                                styles[gameData.gameStatus.toLowerCase()]
                            }`}
                        >
                            {(() => {
                                switch (gameData.gameStatus) {
                                    case "Completed":
                                        return (
                                            <DynamicIcon
                                                name="circle-check-big"
                                                size={13}
                                            />
                                        );
                                    case "In Progress":
                                        return (
                                            <DynamicIcon
                                                name="play"
                                                size={13}
                                            />
                                        );
                                    case "Wishlist":
                                        return (
                                            <DynamicIcon
                                                name="heart"
                                                size={13}
                                            />
                                        );
                                    case "Dropped":
                                        return (
                                            <DynamicIcon
                                                name="circle-pause"
                                                size={13}
                                            />
                                        );
                                }
                            })()}
                            {gameData.gameStatus}
                        </span>
                        <span className={styles.gamePlatform}>
                            {gameData.gamePlatform}
                        </span>
                    </div>
                    <img
                        className={styles.gameImage}
                        src={gameData.gameImage}
                        alt={gameData.gameTitle}
                    />
                </div>
                <div className={styles.gameInfo}>
                    <h3 className={styles.gameTitle}>{gameData.gameTitle}</h3>
                    <span className={styles.gameGenre}>
                        {gameData.gameGenre}
                    </span>
                    <div className={styles.gameDetails}>
                        <span className={styles.gameHoursPlayed}>
                            <DynamicIcon name="clock" size={14} />
                            {gameData.gameHoursPlayed}
                        </span>
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
                    <button className={styles.gameDetailsButton}>
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
