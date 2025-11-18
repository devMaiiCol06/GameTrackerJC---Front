import Router from "../routers/Router";
import Header from "../components/header/Header";
import styles from "../styles/modules/pages/ViewsIndex.module.css";
import "../styles/global/index.css";
import { BrowserRouter } from "react-router-dom";
import ModalGame from "../components/modalGame/ModalGame.jsx";
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

    const [visibilityModalGame, setVisibilityModalGame] =
        useState(getInitialVisibility);

    const handleVisibilityModalGame = () => {
        // Cambiar la visibilidad
        switch (visibilityModalGame) {
            case "hidden":
                setVisibilityModalGame("show");
                sessionStorage.setItem("visibilityModal", "show");
                break;
            case "show":
                setVisibilityModalGame("hidden");
                sessionStorage.setItem("visibilityModal", "hidden");
                break;
            default:
                setVisibilityModalGame("hidden");
                sessionStorage.setItem("visibilityModal", "hidden");
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
                <ModalGame fncVisibilityModal={handleVisibilityModalGame} />
            </div>
        </BrowserRouter>
    );
};

export default ViewsIndex;
