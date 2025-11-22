// ====================================================================== 

// ** Importaciones **

import styles from "./../../styles/modules/components/RegularInputModal.module.css";
import { useState, useEffect } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

// ====================================================================== 

// ** Componente RegularInputModal **
// Props: config
// Retorna: input modal

// ====================================================================== 

// ** Props **
// config: configuración | objeto con las propiedades del input
// config.gameData: datos del juego | objeto con las propiedades del juego solo si el contexto es "viewGame"
// Retorna: input modal

// ====================================================================== 

const RegularInputModal = ({ config }) => {
    // ** Variables **

    // Estado de status seleccionado
    const [selectedStatus, setSelectedStatus] = useState();

    // Elemento del campo
    let field = null;

    // Lista de categorías disponibles
    let categories = [
        "Action",
        "Adventure",
        "RPG",
        "Strategy",
        "Simulation",
        "Sport",
        "Racing",
        "Puzzle",
        "Shooter",
        "Fight",
        "Open World",
        "Terror",
    ];

    // Lista de plataformas disponibles
    let platforms = [
        "PlayStation",
        "Xbox",
        "PC",
        "Nintendo Switch",
        "VR",
        "Phone",
    ];

    // Lista de estados disponibles
    let status = ["Completed", "Playing", "Wishlist", "Dropped"];

    // ** Funciones **

    // Función para manejar el click en un estado
    const handleClickStatus = (newStatus) => {
        if (config.context === "viewGame") return;
        setSelectedStatus(newStatus);
    };

    // Agregar contenido al campo según el tipo
    switch (config.type) {
        case "select":
            field = (
                // Select de categorías y plataformas
                <select
                    id={config.id}
                    name={config.id}
                    className={styles.inputContent}
                >
                    <option value="">{config.placeholder}</option>
                    {/* Si el campo es "gameGenre" o "gamePlatform", agregar opciones */}
                    {config.id === "gameGenre"
                        // Categorias
                        ? categories.map((category, index) => (
                              <option value={category} key={index}>
                                  {category}
                              </option>
                          ))
                        : config.id === "gamePlatform"
                        // Plataformas
                        ? platforms.map((platform, index) => (
                              <option value={platform} key={index}>
                                  {platform}
                              </option>
                          ))
                        : null}
                </select>
            );
            break;

        case "status":
            field = (
                // Div de estados
                <div className={styles.statusContainer}>
                    {/* Mapeo de estados */}
                    {status.map((stat, index) => {
                        // Clase de estado
                         let statusClass = styles["statusOption" + index] || "";
                        // Retorno de estado
                        return (
                            // Span de estado
                            <span
                                id={
                                    // Dar id al estado seleccionado
                                    selectedStatus === stat
                                        ? "selectedStatus"
                                        : null
                                }
                                className={`${
                                    // Clase de estado seleccionado
                                    selectedStatus === stat
                                        ? styles.selectedStatus
                                        : null
                                } ${styles.inputContent} ${statusClass}`.trim()} // .trim() para eliminar espacios en blanco
                                // Función para manejar el click en un estado
                                onClick={() => handleClickStatus(stat)}
                                key={index}
                            >
                                {/* Texto del estado */}
                                {stat}
                            </span>
                        );
                    })}
                </div>
            );
            break;

        case "textarea":
            field = (
                // Textarea
                <textarea
                    id={config.id}
                    placeholder={config.placeholder}
                    className={`${styles.inputContent} ${styles.textareaContent}`}
                />
            );
            break;

        default:
            field = (
                // Input básico
                <input
                    type={config.type}
                    id={config.id}
                    placeholder={config.placeholder}
                    className={styles.inputContent}
                    autoComplete="off"
                />
            );
            break;
    }

    // ** Funciones **

    useEffect(() => {
        // Validar si config, id y gameData existen
        if (!config || !config.id || !config.gameData) return;

        // Si el campo es "status" actualiza el estado
        if (config.type === "status") {
            // Validar si el campo existe en gameData
            if (config.gameData[config.id]) {
                // Actualizar el estado
                setSelectedStatus(config.gameData[config.id]);
            }
            return;
        }

        // Obtener el elemento (input, textarea o select) y validar si existe
        const element = document.getElementById(config.id);
        if (!element) return;

        // Validar si el elemento es un input, textarea o select
        const tag = element.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea" || tag === "select") {
            // Obtener el valor del campo
            let value = config.gameData[config.id] ?? "";

            // Normalizar valor para input[type="date"]
            // Para que el valor sea compatible con el input[type="date"] y se pueda mostrar correctamente
            if (tag === "input" && element.type === "date" && value) {
                // Si viene en formato ISO con 'T' (p. ej. 2006-02-23T00:00:00.000Z) convertir a YYYY-MM-DD
                if (
                    /\d{4}-\d{2}-\d{2}T/.test(value) ||
                    /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/.test(value)
                ) {
                    const parsed = new Date(value);
                    if (!isNaN(parsed))
                        value = parsed.toISOString().slice(0, 10);
                } else if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
                    const parsed = new Date(value);
                    if (!isNaN(parsed))
                        value = parsed.toISOString().slice(0, 10);
                }
            }

            // Asignar el valor al elemento
            element.value = value;

            // Si el contexto es "viewGame", deshabilitar el elemento y agregar la clase disabled
            if (config.context === "viewGame") {
                element.disabled = true;
                element.classList.add(styles.disabled);
            } else {
                // Si el contexto no es "viewGame", habilitar el elemento y quitar la clase disabled
                element.disabled = false;
                element.classList.remove(styles.disabled);
            }
        }
    }, [config]);

    // ** Renderizado **

    return (
        // Renderizar div con el contenedor del input y su label
        <div className={styles.RegularInputModalContainer}>
            <label htmlFor={config.id}>
                {/* Renderizar icono y texto del label */}
                <DynamicIcon name={config.icon} size={15} />
                {config.label}
            </label>
            {/* Renderizar el campo */}
            {field}
        </div>
    );
};

// ====================================================================== 

// ** Exportacion **

export default RegularInputModal;
