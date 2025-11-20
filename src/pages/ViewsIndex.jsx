import Router from "../routers/Router";
import Header from "../components/header/Header";
import styles from "../styles/modules/pages/ViewsIndex.module.css";
import "../styles/global/index.css";
import { BrowserRouter } from "react-router-dom";
import ModalGame from "../components/modalGame/ModalGame.jsx";
import { addGame } from "../api/apiGames.js";
import { useEffect, useState } from "react";

const ViewsIndex = () => {
    const [reqGameData, setReqGameData] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                console.log("Datos enviados desde ViewsIndex a addGame:", reqGameData);
                const response = await addGame(reqGameData);
                setResponseMessage(response.message);
            } catch (error) {
                console.error("Error en fetch:", error);
            }
        };
        if (reqGameData) {
            fetchGames();
        }
    }, [reqGameData]);

    if (responseMessage) {
        console.log("Datos recibidos en ViewsIndex:", responseMessage);
    }

    const handleReceiveReqGameData = (reqData) => {
        setReqGameData(reqData);
    };

    // Hook para almacenar el estado de la visibilidad del modal de nuevo juego
    const [visibilityModalGame, setVisibilityModalGame] = useState("hidden");

    const handleVisibilityModalGame = () => {
        // Cambiar la visibilidad
        switch (visibilityModalGame) {
            case "hidden":
                setVisibilityModalGame("show");
                break;
            case "show":
                setVisibilityModalGame("hidden");
                break;
            default:
                setVisibilityModalGame("hidden");
                break;
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
                    <Router />
                </main>
            </div>
            <div
                className={`${styles[visibilityModalGame]} ${styles.modalFormGameContainer}`}
            >
                <ModalGame
                    onAction={{
                        fncVisibilityModal: handleVisibilityModalGame,
                        receiveReqGameData: handleReceiveReqGameData,
                    }}
                />
            </div>
        </BrowserRouter>
    );
};

export default ViewsIndex;
