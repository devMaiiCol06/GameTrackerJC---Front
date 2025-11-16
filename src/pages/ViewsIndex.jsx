import Router from "../routers/Router";
import Header from "../components/header/Header";
import styles from "../styles/modules/pages/ViewsIndex.module.css";
import "../styles/global/index.css";
import { BrowserRouter } from "react-router-dom";
import ModalNewGame from "../components/library/content/ModalNewGame.jsx";
import { useState } from "react";

const ViewsIndex = () => {
    // Hook para almacenar el estado de la visibilidad del modal de nuevo juego
    // Si la llave no existe en sessionStorage, crearla con valor "hidden"
    const getInitialVisibility = () => {
        const stored = sessionStorage.getItem("visibilityModal");
        if (!stored) {
            sessionStorage.setItem("visibilityModal", "hidden");
            return "hidden";
        }
        return stored;
    };

    const [visibilityModalNewGame, setVisibilityModalNewGame] =
        useState(getInitialVisibility);

    const handleVisibilityModalNewGame = () => {
        // Cambiar la visibilidad
        switch (visibilityModalNewGame) {
            case "hidden":
                setVisibilityModalNewGame("show");
                sessionStorage.setItem("visibilityModal", "show");
                break;
            case "show":
                setVisibilityModalNewGame("hidden");
                sessionStorage.setItem("visibilityModal", "hidden");
                break;
            default:
                setVisibilityModalNewGame("hidden");
                sessionStorage.setItem("visibilityModal", "hidden");
                break;
        }
    };

    return (
        <BrowserRouter>
            <div className={styles.viewsIndex}>
                <Header fncVisibilityModal={handleVisibilityModalNewGame} />
                <main>
                    <Router />
                </main>
            </div>
            <div
                className={`${styles[visibilityModalNewGame]} ${styles.modalFormNewGameContainer}`}
                onClick={() => handleVisibilityModalNewGame()}
            >
                <ModalNewGame
                    fncVisibilityModal={handleVisibilityModalNewGame}
                />
            </div>
        </BrowserRouter>
    );
};

export default ViewsIndex;
