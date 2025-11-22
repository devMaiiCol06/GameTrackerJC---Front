// ====================================================================== 

// ** Importaciones **

import Router from "../routers/Router";
import Header from "../components/header/Header";
import styles from "../styles/modules/pages/ViewsIndex.module.css";
import "../styles/global/index.css";
import { BrowserRouter } from "react-router-dom";
import ModalGame from "../components/modalGame/ModalGame.jsx";
import { addGame, updateGame, deleteGame } from "../api/apiGames.js";
import { useEffect, useState } from "react";

// ====================================================================== 

// ** Componente ViewsIndex **
// Props: none
// Retorna: pagina principal con header, router y modal

// ====================================================================== 

const ViewsIndex = () => {
    // ** Estados **

    // Estado del contenido del modal
    const [modalContent, setModalContent] = useState(null);
    // Estado del trigger de refresco
    const [refreshTrigger, setRefreshTrigger] = useState(0);
    // Estado de la solicitud de datos
    const [reqApiData, setReqApiData] = useState(null);
    // Hook para almacenar el estado de la visibilidad del modal de nuevo juego
    const [visibilityModalGame, setVisibilityModalGame] = useState("hidden");

    // ** Funciones **

    useEffect(() => {
        // Funcion para obtener los datos de la API
        const fetchGames = async () => {
            // Validar que exista la solicitud de datos
            if (!reqApiData || !reqApiData.apiFunctionality) return;

            // Importar los metodos de la API
            const apiImports = {
                addGame,
                updateGame,
                deleteGame,
            };

            // Obtener el metodo de la API
            let apiMethod = apiImports[reqApiData.apiFunctionality];

            // Validar que exista el metodo de la API
            if (!apiMethod) {
                console.error(
                    `API method ${reqApiData.apiFunctionality} not found`
                );
                return;
            }

            try {
                // Inicializar la respuesta
                let response = null;

                // Validar si es un metodo de agregar o actualizar
                if (
                    reqApiData.apiFunctionality === "addGame" ||
                    reqApiData.apiFunctionality === "updateGame"
                ) {
                    // Validar que existan los datos del juego
                    if (!reqApiData.gameData) {
                        response = { message: "No game data provided" };
                        return;
                    } else {
                        console.log(
                            `Calling ${reqApiData.apiFunctionality} with`,
                            reqApiData.gameData
                        );
                        // Llamar al metodo de la API
                        response = await apiMethod(reqApiData.gameData);
                    }
                } else if (
                    // Validar si es un metodo de eliminar
                    reqApiData.apiFunctionality === "deleteGame"
                ) {
                    // Validar que exista el ID del juego
                    if (!reqApiData.gameId) {
                        response = { message: "No game ID provided" };
                        return;
                    } else {
                        console.log(
                            `Calling deleteGame with`,
                            reqApiData.gameId
                        );
                        // Llamar al metodo de la API
                        response = await apiMethod({
                            data: { gameId: reqApiData.gameId },
                        });
                    }
                }

                // Validar que exista la respuesta
                if (response) {
                    // Mostrar el mensaje de la respuesta
                    console.log(
                        "Response message:",
                        response.message ?? response
                    );
                    // Llamar al trigger de refresco
                    setRefreshTrigger((prev) => prev + 1);
                } else {
                    // Mostrar advertencia si no hay respuesta
                    console.warn("No response from API (undefined/null)");
                }
            } catch (error) {
                // Mostrar error si hay un error
                console.error("Error en fetch:", error);
            }
        };
        // Validar que exista la solicitud de datos
        if (reqApiData) {
            // Llamar a la funcion de fetch
            fetchGames();
        }
    }, [reqApiData]);

    // Funcion para recibir la solicitud de datos
    const handleReceiveReqGameData = (reqData) => {
        // Validar que exista la solicitud de datos
        if (reqData) {
            // Llamar a la funcion de fetch
            setReqApiData(reqData);
        }
    };

    // Funcion para cambiar la visibilidad del modal
    const handleVisibilityModalGame = (reqContext) => {
        // Validar que exista el contexto
        if (reqContext && reqContext.context) {
            // Si el contexto es nuevo juego
            if (reqContext.context === "newGame") {
                // Setear el contenido del modal
                setModalContent({
                    title: "Add New Game",
                    subtitle: "Add a new game to your collection",
                    bttnFnText: "Add Game",
                    bttnAltText: "Cancel",
                    functionality: "addGame",
                });
            // Si el contexto es editar juego
            } else if (reqContext.context === "editGame") {
                setModalContent({
                    title: "Edit Game",
                    subtitle: "Edit the details of your game",
                    bttnFnText: "Save Changes",
                    bttnAltText: "Cancel",
                    gameData: reqContext.gameData,
                    functionality: "updateGame",
                });
            // Si el contexto es ver juego
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

            // Mostrar el modal
            setVisibilityModalGame("show");
            return;
        } else {
            // Si no hay contexto, ocultar el modal
            setModalContent(null);
        }
    };

    // ** Renderizado **

    return (
        // BrowserRouter para el manejo de rutas
        <BrowserRouter>
            {/* Contenedor principal que contiene el header y el main */}
            <div
                className={`${styles.viewsIndex} ${
                    visibilityModalGame === "show" ? styles.noScroll : ""
                }`}
            >
                {/* Header pasado como prop la funcion para mostrar el modal */}
                <Header fncVisibilityModal={handleVisibilityModalGame} />
                {/* Main */}
                <main>
                    {/* Router pasado como prop la funcion para mostrar el modal y el trigger de refresco */}
                    <Router
                        fncVisibilityModal={handleVisibilityModalGame}
                        refreshTrigger={refreshTrigger}
                    />
                </main>
            </div>
            {/* Si existe modalContent, mostrar el modal */}
            {modalContent && (
                <div
                    className={`${styles[visibilityModalGame]} ${styles.modalFormGameContainer}`}
                >
                    {/* Modal de juego pasado como prop el contexto y la funcion para mostrar el modal y recibir los datos del formulario */}
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

// ====================================================================== 

// ** Exportacion **

export default ViewsIndex;
