import styles from './GameCard.module.css'

const GameCard = ({gameData, gameFilter}) => {
    if (gameFilter !== 'All Games') {
        if (gameData.gameStatus !== gameFilter) {
            return;
        }
    }

    return (
        <div className={styles.GameCardContainer} >
            <h2>{gameData.gameName}</h2>
        </div>
    );
};

export default GameCard;