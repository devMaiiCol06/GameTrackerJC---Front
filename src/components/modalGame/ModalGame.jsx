import styles from "../../styles/modules/components/ModalGame.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import RegularInputModal from "./RegularInputModal.jsx";
import RegularBttn from "../global/RegularBttn.jsx";

const ModalGame = ({ fncVisibilityModal }) => {
    let inputsConfig = [
        {
            id: "gameTitle",
            label: "Game Title",
            type: "text",
            placeholder: "Enter the game title here",
            icon: "joystick",
        },
        {
            id: "gameGenre",
            label: "Game Genre *",
            type: "select",
            placeholder: "Select a genre here",
            icon: "swords",
        },
        {
            id: "platform",
            label: "Platform",
            type: "select",
            placeholder: "Select a platform here",
            icon: "monitor",
        },
        {
            id: "status",
            label: "Status *",
            type: "status",
            icon: "trophy",
        },
        {
            id: "imageURL",
            label: "Cover Image URL",
            type: "text",
            placeholder: "https://example.com/image.jpg",
            icon: "image",
        },
        {
            id: "description",
            label: "Description",
            type: "textarea",
            placeholder: "Enter a brief description of the game",
            icon: "text",
        },
        {
            id: "releaseDate",
            label: "Release Date",
            type: "date",
            placeholder: "",
            icon: "calendar",
        },
        {
            id: "hoursPlayed",
            label: "Hours Played",
            type: "number",
            placeholder: 0,
            icon: "clock",
        },
    ];

    return (
        <div
            className={styles.ModalGameContainer}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={styles.modalGameContent}>
                <div className={styles.GameHeroContainer}>
                    <div className={styles.GameHeroContent}>
                        <DynamicIcon
                            name={"gamepad-2"}
                            size={58}
                            color="var(--textColor-Principal)"
                            className={styles.GameIcon}
                        />
                        <div className={styles.GameHeroText}>
                            <h2 className={styles.GameHeroTitle}>
                                Add New Game
                            </h2>
                            <p className={styles.GameHeroDescription}>
                                Add a new game to your collection
                            </p>
                        </div>
                    </div>
                    <DynamicIcon
                        name={"x"}
                        color="var(--textColor-Secondary)"
                        size={35}
                        className={styles.closeIcon}
                        onClick={() => fncVisibilityModal()}
                    />
                </div>
                <div className={styles.GameFormContainer}>
                    <div className={styles.GameFormContent}>
                        {inputsConfig.map((input, index) => (
                            <RegularInputModal config={input} key={index} />
                        ))}
                    </div>
                </div>
                <div className={styles.actionBttnsContainer}>
                    <button onClick={() => fncVisibilityModal()}>Cancelar</button>
                    <button className={styles.saveButton}><DynamicIcon name="save" /> Add Game</button>
                </div>
            </div>
        </div>
    );
};

export default ModalGame;
