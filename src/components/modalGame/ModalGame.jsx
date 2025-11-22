// ====================================================================== 

// ** Importaciones **

import styles from "../../styles/modules/components/ModalGame.module.css";
import { DynamicIcon } from "lucide-react/dynamic";
import RegularInputModal from "./RegularInputModal.jsx";
import SmoothScrollbarWrapper from "../global/SmoothScrollbarWrapper.jsx";

// ====================================================================== 

// ** Componente ModalGame **
// Props: context, onAction
// Retorna: modal de juego

// ====================================================================== 

// ** Props **
// context: contexto | objeto con las propiedades del modal
// onAction: función de acción | función que se ejecuta al hacer clic en el modal

// ====================================================================== 

const ModalGame = ({ context, onAction }) => {
    // ** Validaciones **

    // Validar si se proporcionó el contexto
    if (!context) {
        console.log("No context provided to ModalGame");
        return null;
    }
    // Validar si se proporcionó la función de acción
    if (!onAction || !onAction.fncVisibilityModal) {
        console.log("No onAction.fncVisibilityModal provided to ModalGame");
        return null;
    }

    // ** Variables **

    // Configuración de los inputs
    let inputsConfig = [
        // Input de título
        {
            id: "gameTitle",
            label: "Game Title *",
            type: "text",
            placeholder: "Enter the game title here",
            icon: "joystick",
        },
        // Input de género
        {
            id: "gameGenre",
            label: "Game Genre *",
            type: "select",
            placeholder: "Select a genre here",
            icon: "swords",
        },
        // Input de plataforma
        {
            id: "gamePlatform",
            label: "Platform",
            type: "select",
            placeholder: "Select a platform here",
            icon: "monitor",
        },
        // Input de estado
        {
            id: "gameStatus",
            label: "Status *",
            type: "status",
            icon: "trophy",
        },
        // Input de imagen
        {
            id: "gameImage",
            label: "Cover Image URL *",
            type: "text",
            placeholder: "https://example.com/image.jpg",
            icon: "image",
        },
        // Input de descripción
        {
            id: "gameDescription",
            label: "Description",
            type: "textarea",
            placeholder: "Enter a brief description of the game",
            icon: "text",
        },
        // Input de fecha de lanzamiento
        {
            id: "gameReleaseDate",
            label: "Release Date",
            type: "date",
            placeholder: "",
            icon: "calendar",
        },
        // Input de horas jugadas
        {
            id: "gameHoursPlayed",
            label: "Hours Played",
            type: "number",
            placeholder: 0,
            icon: "clock",
        },
    ];

    // ** Funciones **

    // Función para manejar el clic en el botón de acción
    const handleClickActionBttn = () => {
        // Si la funcionalidad es ver juego, se abre el modal de edición
        if (context.functionality === "viewGame") {
            onAction.fncVisibilityModal({
                context: "editGame",
                gameData: context.gameData,
            });
            return;
        }

        // Variable para almacenar los datos del juego
        let reqData = null;

        // Si la funcionalidad es agregar o actualizar juego, se envían los datos
        if (
            context.functionality === "addGame" ||
            context.functionality === "updateGame"
        ) {
            // Variable para almacenar los datos del juego
            reqData = {
                // Titulo del juego
                gameTitle: document.getElementById("gameTitle")?.value || "",
                // Descripción del juego
                gameDescription:
                    document.getElementById("gameDescription")?.value || "",
                // Género del juego
                gameGenre: document.getElementById("gameGenre")?.value || "",
                // Estado del juego
                gameStatus:
                    document.getElementById("selectedStatus")?.textContent ||
                    "",
                // Plataforma del juego
                gamePlatform:
                    document.getElementById("gamePlatform")?.value || "",
                // Imagen del juego
                gameImage: document.getElementById("gameImage")?.value || "",
                // Fecha de lanzamiento del juego
                gameReleaseDate:
                    document.getElementById("gameReleaseDate")?.value || "",
                // Horas jugadas del juego
                gameHoursPlayed:
                    document.getElementById("gameHoursPlayed")?.value || 0,
            };

            // Si la funcionalidad es actualizar juego, se incluye el ID del juego
            if (context.functionality === "updateGame" && context.gameData) {
                // Se incluye el ID del juego en la variable de datos
                reqData.gameId =
                    context.gameData.id ||
                    context.gameData._id ||
                    context.gameData.gameId;
            }
        }

        // Se envían los datos al componente padre
        onAction.receiveReqGameData({
            gameData: reqData,
            apiFunctionality: context.functionality,
        });
        // Se cierra el modal
        onAction.fncVisibilityModal();
    };

    // Función para manejar la acción de eliminar
    const handleDeleteAction = () => {
        // Si no hay datos del juego, se retorna
        if (!context.gameData) return;

        // Se obtiene el ID del juego
        const gameId =
            context.gameData.id ||
            context.gameData._id ||
            context.gameData.gameId;

        // Se envían los datos al componente padre
        onAction.receiveReqGameData({
            gameId: gameId,
            apiFunctionality: "deleteGame",
        });
        // Se cierra el modal
        onAction.fncVisibilityModal();
    };

    // ** Renderizado **

    return (
        // Renderizar el contenedor del modal con un evento de clic para detener la propagación
        <div
            className={styles.ModalGameContainer}
            onClick={(e) => e.stopPropagation()}
        >
            {/* Renderizar el contenido del modal */}
            <div className={styles.modalGameContent}>
                {/* Renderizar el contenedor del héroe del modal */}
                <div className={styles.GameHeroContainer}>
                    {/* Renderizar el contenido del héroe del modal */}
                    <div className={styles.GameHeroContent}>
                        {/* Renderizar el icono del héroe del modal */}
                        <DynamicIcon
                            name={"gamepad-2"}
                            size={58}
                            color="var(--textColorBttn)"
                            className={styles.GameIcon}
                        />
                        {/* Renderizar el texto del héroe del modal */}
                        <div className={styles.GameHeroText}>
                            {/* Renderizar el título del héroe del modal */}
                            <h2 className={styles.GameHeroTitle}>
                                {context.title}
                            </h2>
                            {/* Renderizar la descripción del héroe del modal */}
                            <p className={styles.GameHeroDescription}>
                                {context.subtitle}
                            </p>
                        </div>
                    </div>
                    {/* Renderizar el icono de cierre del modal */}
                    <DynamicIcon
                        name={"x"}
                        color="var(--textColorBttn)"
                        size={35}
                        className={styles.closeIcon}
                        onClick={() => onAction.fncVisibilityModal()}
                    />
                </div>
                {/* Contenedor de desplazamiento suave */}
                <SmoothScrollbarWrapper>
                {/* Renderizar el contenedor del formulario del modal */}
                    <div className={styles.GameFormContainer}>
                        <div className={styles.GameFormContent}>
                            {/* Renderizar los inputs del formulario del modal mapeados */}
                            {inputsConfig.map((input, index) => (
                                <div className={styles[input.id]} key={index}>
                                    {/* Renderizar el input del formulario del modal */}
                                    <RegularInputModal
                                        // Configuración del input
                                        // Si hay datos del juego, se incluyen en la configuración
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
                    {/* Renderizar el contenedor de los botones del modal */}
                    <div className={styles.actionBttnsContainer}>
                        {/* Renderizar el botón de cancelar */}
                        <button
                            className={styles.cancelButton}
                            onClick={() => onAction.fncVisibilityModal()}
                        >
                            {context.bttnAltText}
                        </button>
                        {/* Si hay texto para el botón de acción principal se renderiza */}
                        {context.bttnFnText && (
                            <button
                                className={styles.saveButton}
                                onClick={() => handleClickActionBttn()}
                            >
                                <DynamicIcon name="save" size={17} />
                                {context.bttnFnText}
                            </button>
                        )}
                        {/* Si la funcionalidad es updateGame se renderiza el botón de eliminar */}
                        {context.functionality === "updateGame" && (
                            <button
                                className={styles.deleteButton}
                                // Manejar el clic en el botón de eliminar
                                onClick={handleDeleteAction}
                                // Estilo del botón de eliminar
                                style={{
                                    backgroundColor: "#ef4444",
                                    color: "white",
                                }}
                            >
                                {/* Icono de eliminar */}
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

// ====================================================================== 

// ** Exportación **

export default ModalGame;
