import Router from "../routers/Router";
import Header from "../components/header/Header";
import styles from "../styles/modules/pages/ViewsIndex.module.css";
import "../styles/global/index.css";
import { BrowserRouter } from "react-router-dom";
import ModalGame from "../components/modalGame/ModalGame.jsx";
import { addGame, updateGame, deleteGame } from "../api/apiGames.js";
import { useEffect, useState } from "react";

const ViewsIndex = () => {
    const [modalContent, setModalContent] = useState(null);

    const [refreshTrigger, setRefreshTrigger] = useState(0);
    const [reqApiData, setReqApiData] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
            if (!reqApiData || !reqApiData.apiFunctionality) return;

            const apiImports = {
                addGame,
                updateGame,
                deleteGame,
            };

            let apiMethod = apiImports[reqApiData.apiFunctionality];

            if (!apiMethod) {
                console.error(
                    `API method ${reqApiData.apiFunctionality} not found`
                );
                return;
            }

            try {
                let response = null;

                if (
                    reqApiData.apiFunctionality === "addGame" ||
                    reqApiData.apiFunctionality === "updateGame"
                ) {
                    if (!reqApiData.gameData) {
                        response = { message: "No game data provided" };
                        return;
                    } else {
                        console.log(
                            `Calling ${reqApiData.apiFunctionality} with`,
                            reqApiData.gameData
                        );
                        response = await apiMethod(reqApiData.gameData);
                    }
                } else if (reqApiData.apiFunctionality === "deleteGame") {
                    if (!reqApiData.gameId) {
                        response = { message: "No game ID provided" };
                        return;
                    } else {
                        console.log(
                            `Calling deleteGame with`,
                            reqApiData.gameId
                        );
                        response = await apiMethod({
                            data: { gameId: reqApiData.gameId },
                        });
                    }
                }
                console.log("API response (full):", response);
                if (response) {
                    console.log(
                        "Response message:",
                        response.message ?? response
                    );
                    // Trigger refresh on successful response
                    setRefreshTrigger((prev) => prev + 1);
                } else {
                    console.warn("No response from API (undefined/null)");
                }
            } catch (error) {
                console.error("Error en fetch:", error);
            }
        };
        if (reqApiData) {
            fetchGames();
        }
    }, [reqApiData]);

    const handleReceiveReqGameData = (reqData) => {
        setReqApiData(reqData);
    };

    // Hook para almacenar el estado de la visibilidad del modal de nuevo juego
    const [visibilityModalGame, setVisibilityModalGame] = useState("hidden");

    const handleVisibilityModalGame = (reqContext) => {
        // Cambiar la visibilidad
        if (reqContext && reqContext.context) {
            if (reqContext.context === "newGame") {
                setModalContent({
                    title: "Add New Game",
                    subtitle: "Add a new game to your collection",
                    bttnFnText: "Add Game",
                    bttnAltText: "Cancel",
                    functionality: "addGame",
                });
            } else if (reqContext.context === "editGame") {
                setModalContent({
                    title: "Edit Game",
                    subtitle: "Edit the details of your game",
                    bttnFnText: "Save Changes",
                    bttnAltText: "Cancel",
                    gameData: reqContext.gameData,
                    functionality: "updateGame",
                });
            } else if (reqContext.context === "viewGame") {
                setModalContent({
                    title: "Details Game",
                    subtitle: "View the details of your game",
                    bttnFnText: "Edit Game",
                    bttnAltText: "Close",
                    gameData: reqContext.gameData,
                    functionality: "viewGame",
                });
            }

            setVisibilityModalGame("show");
            return;
        } else {
            setVisibilityModalGame("hidden");
            setModalContent(null);
        }
    };

    return (
        <BrowserRouter>
            <div
                className={`${styles.viewsIndex} ${
                    visibilityModalGame === "show" ? styles.noScroll : ""
                }`}
            >
                <Header fncVisibilityModal={handleVisibilityModalGame} />
                <main>
                    <Router
                        fncVisibilityModal={handleVisibilityModalGame}
                        refreshTrigger={refreshTrigger}
                    />
                </main>
            </div>
            {modalContent && (
                <div
                    className={`${styles[visibilityModalGame]} ${styles.modalFormGameContainer}`}
                >
                    <ModalGame
                        context={modalContent}
                        onAction={{
                            fncVisibilityModal: handleVisibilityModalGame,
                            receiveReqGameData: handleReceiveReqGameData,
                        }}
                    />
                </div>
            )}
        </BrowserRouter>
    );
};

export default ViewsIndex;
