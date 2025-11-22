import styles from "./../../styles/modules/components/RegularInputModal.module.css";
import { useState, useEffect } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

const RegularInputModal = ({ config }) => {
    const [selectedStatus, setSelectedStatus] = useState();

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

    let platforms = [
        "PlayStation",
        "Xbox",
        "PC",
        "Nintendo Switch",
        "VR",
        "Phone",
    ];

    let status = ["Completed", "Playing", "Wishlist", "Dropped"];

    const handleClickStatus = (newStatus) => {
        setSelectedStatus(newStatus);
    };

    let field = null;
    switch (config.type) {
        case "select":
            field = (
                <select
                    id={config.id}
                    name={config.id}
                    className={styles.inputContent}
                >
                    <option value="">{config.placeholder}</option>
                    {config.id === "gameGenre"
                        ? categories.map((category, index) => (
                              <option value={category} key={index}>
                                  {category}
                              </option>
                          ))
                        : config.id === "gamePlatform"
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
                <div className={styles.statusContainer}>
                    {status.map((stat, index) => {
                        let statusClass = styles["statusOption" + index] || "";
                        return (
                            <span
                                id={
                                    selectedStatus === stat
                                        ? "selectedStatus"
                                        : null
                                }
                                className={`${
                                    selectedStatus === stat
                                        ? styles.selectedStatus
                                        : null
                                } ${styles.inputContent} ${statusClass}`.trim()}
                                onClick={() => handleClickStatus(stat)}
                                key={index}
                            >
                                {stat}
                            </span>
                        );
                    })}
                </div>
            );
            break;

        case "textarea":
            field = (
                <textarea
                    id={config.id}
                    placeholder={config.placeholder}
                    className={`${styles.inputContent} ${styles.textareaContent}`}
                />
            );
            break;

        default:
            field = (
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

    useEffect(() => {
        if (!config || !config.id || !config.gameData) return;

        // Si el campo es "status" actualiza el estado en lugar del DOM
        if (config.type === "status") {
            if (config.gameData[config.id]) {
                setSelectedStatus(config.gameData[config.id]);
            }
            return;
        }

        const element = document.getElementById(config.id);
        if (!element) return;

        // solo asignar value a elementos válidos
        const tag = element.tagName.toLowerCase();
        if (tag === "input" || tag === "textarea" || tag === "select") {
            let value = config.gameData[config.id] ?? "";

            // Normalizar valor para input[type="date"]
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

            element.value = value;
        }
    }, [config]);

    return (
        <div className={styles.RegularInputModalContainer}>
            <label htmlFor={config.id}>
                <DynamicIcon name={config.icon} size={15} />
                {config.label}
            </label>
            {field}
        </div>
    );
};

export default RegularInputModal;
