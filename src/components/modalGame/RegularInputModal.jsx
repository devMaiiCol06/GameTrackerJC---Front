import styles from "./../../styles/modules/components/RegularInputModal.module.css";
import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import SmoothScrollbarWrapper from "../global/SmoothScrollbarWrapper";

const RegularInputModal = ({ config }) => {
    const [selectedStatus, setSelectedStatus] = useState(null);

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
                                        : ""
                                }
                                className={`${
                                    selectedStatus === stat
                                        ? styles.selectedStatus
                                        : ""
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
