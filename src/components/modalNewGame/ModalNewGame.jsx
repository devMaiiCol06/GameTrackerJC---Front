import styles from "../../styles/modules/components/ModalNewGame.module.css";
import { DynamicIcon } from "lucide-react/dynamic";


const ModalNewGame = () => {
    return (
        <div
            className={styles.ModalNewGameContainer}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.modalNewGameContent}>
                <div className={styles.newGameHeroContainer}>
                    <div className={styles.newGameHeroContent}>
                        <DynamicIcon
                            name={"gamepad-2"}
                            size={58}
                            color="var(--textColor-Principal)"
                            className={styles.newGameIcon}
                        />
                        <div className={styles.newGameHeroText}>
                            <h2 className={styles.newGameHeroTitle}>Add New Game</h2>
                            <p className={styles.newGameHeroDescription}>Add a new game to your collection</p>
                        </div>
                    </div>
                    <DynamicIcon
                        name={"x"}
                        size={24}
                        className={styles.closeIcon}
                    />
                </div>
            </div>
        </div>
    );
};

export default ModalNewGame;
