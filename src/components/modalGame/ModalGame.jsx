import styles from "../../styles/modules/components/ModalGame.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import RegularInputModal from "./RegularInputModal.jsx";
import SmoothScrollbarWrapper from "../global/SmoothScrollbarWrapper.jsx";

const ModalGame = ({ context, onAction }) => {
    if (!context) {
        console.log("No context provided to ModalGame");
        return null;
    }
    if (!onAction || !onAction.fncVisibilityModal) {
        console.log("No onAction.fncVisibilityModal provided to ModalGame");
        return null;
    }

    let inputsConfig = [
        {
            id: "gameTitle",
            label: "Game Title *",
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
            id: "gamePlatform",
            label: "Platform",
            type: "select",
            placeholder: "Select a platform here",
            icon: "monitor",
        },
        {
            id: "gameStatus",
            label: "Status *",
            type: "status",
            icon: "trophy",
        },
        {
            id: "gameImage",
            label: "Cover Image URL *",
            type: "text",
            placeholder: "https://example.com/image.jpg",
            icon: "image",
        },
        {
            id: "gameDescription",
            label: "Description",
            type: "textarea",
            placeholder: "Enter a brief description of the game",
            icon: "text",
        },
        {
            id: "gameReleaseDate",
            label: "Release Date",
            type: "date",
            placeholder: "",
            icon: "calendar",
        },
        {
            id: "gameHoursPlayed",
            label: "Hours Played",
            type: "number",
            placeholder: 0,
            icon: "clock",
        },
    ];

    const handleClickActionBttn = () => {
        if (context.functionality === "viewGame") {
            onAction.fncVisibilityModal({
                context: "editGame",
                gameData: context.gameData,
            });
            return;
        }

        let reqData = null;

        if (
            context.functionality === "addGame" ||
            context.functionality === "updateGame"
        ) {
            reqData = {
                gameTitle: document.getElementById("gameTitle")?.value || "",
                gameDescription:
                    document.getElementById("gameDescription")?.value || "",
                gameGenre: document.getElementById("gameGenre")?.value || "",
                gameStatus:
                    document.getElementById("selectedStatus")?.textContent ||
                    "",
                gamePlatform:
                    document.getElementById("gamePlatform")?.value || "",
                gameImage: document.getElementById("gameImage")?.value || "",
                gameReleaseDate:
                    document.getElementById("gameReleaseDate")?.value || "",
                gameHoursPlayed:
                    document.getElementById("gameHoursPlayed")?.value || 0,
            };

            // Include ID for updateGame
            if (context.functionality === "updateGame" && context.gameData) {
                reqData.gameId =
                    context.gameData.id ||
                    context.gameData._id ||
                    context.gameData.gameId;
                console.log(
                    "Game ID extracted for update:",
                    reqData.gameId,
                    "from gameData:",
                    context.gameData
                );
            }
        }

        onAction.receiveReqGameData({
            gameData: reqData,
            apiFunctionality: context.functionality,
        });
        onAction.fncVisibilityModal();
    };

    const handleDeleteAction = () => {
        if (!context.gameData) return;

        const gameId =
            context.gameData.id ||
            context.gameData._id ||
            context.gameData.gameId;

        onAction.receiveReqGameData({
            gameId: gameId,
            apiFunctionality: "deleteGame",
        });
        onAction.fncVisibilityModal();
    };

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
                            color="var(--textColorBttn)"
                            className={styles.GameIcon}
                        />
                        <div className={styles.GameHeroText}>
                            <h2 className={styles.GameHeroTitle}>
                                {context.title}
                            </h2>
                            <p className={styles.GameHeroDescription}>
                                {context.subtitle}
                            </p>
                        </div>
                    </div>
                    <DynamicIcon
                        name={"x"}
                        color="var(--textColorBttn)"
                        size={35}
                        className={styles.closeIcon}
                        onClick={() => onAction.fncVisibilityModal()}
                    />
                </div>
                <SmoothScrollbarWrapper>
                    <div className={styles.GameFormContainer}>
                        <div className={styles.GameFormContent}>
                            {inputsConfig.map((input, index) => (
                                <div className={styles[input.id]} key={index}>
                                    <RegularInputModal
                                        config={
                                            context.gameData
                                                ? {
                                                      ...input,
                                                      gameData:
                                                          context.gameData,
                                                      context:
                                                          context.functionality,
                                                  }
                                                : {
                                                      ...input,
                                                      context:
                                                          context.functionality,
                                                  }
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.actionBttnsContainer}>
                        <button
                            className={styles.cancelButton}
                            onClick={() => onAction.fncVisibilityModal()}
                        >
                            {context.bttnAltText}
                        </button>
                        {context.bttnFnText && (
                            <button
                                className={styles.saveButton}
                                onClick={() => handleClickActionBttn()}
                            >
                                <DynamicIcon name="save" size={17} />
                                {context.bttnFnText}
                            </button>
                        )}
                        {context.functionality === "updateGame" && (
                            <button
                                className={styles.deleteButton}
                                onClick={handleDeleteAction}
                                style={{
                                    backgroundColor: "#ef4444",
                                    color: "white",
                                }}
                            >
                                <DynamicIcon name="trash-2" size={17} />
                                Delete Game
                            </button>
                        )}
                    </div>
                </SmoothScrollbarWrapper>
            </div>
        </div>
    );
};

export default ModalGame;
