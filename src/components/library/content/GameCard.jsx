import styles from "./GameCard.module.css";
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
                    <span className={styles.gameStatus}>
                        {(() => {
                            switch (gameData.gameStatus) {
                                case "Completed":
                                    return (
                                        <DynamicIcon name="circle-check-big" />
                                    );
                                case "In Progress":
                                    return <DynamicIcon name="play" />;
                                case "Wishlist":
                                    return <DynamicIcon name="heart" />;
                                case "Dropped":
                                    return <DynamicIcon name="circle-pause" />;
                            }
                        })()}
                        {gameData.gameStatus}
                    </span>
                    <span className={styles.gamePlatform}>
                        {gameData.gamePlatform}
                    </span>
                    <img src={gameData.gameImage} alt={gameData.gameName} />
                </div>
                <div className={styles.gameInfo}>
                    <h3 className={styles.gameTitle}>{gameData.gameName}</h3>
                    <p className={styles.gameDescription}>{gameData.gameDescription}</p>
                    <span className={styles.gameGenre}>{gameData.gameGenre}</span>
                    <div className={styles.gameDetails}>
                        <span className={styles.gameHoursPlayed}>
                            <DynamicIcon name="clock" />
                            {gameData.gameHoursPlayed}
                        </span>
                        {gameData.gameDateCompleted ? (
                            <span className={styles.gameDateCompleted}>
                                <DynamicIcon name="trophy" />
                                {gameData.gameDateCompleted.split("T")[0]}
                            </span>
                        ) : (
                            <span className={styles.gameDateRegister}>
                                <DynamicIcon name="calendar" />
                                {gameData.gameDateRegister.split("T")[0]}
                            </span>
                        )}
                    </div>
                    <button className={styles.gameDetailsButton}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
