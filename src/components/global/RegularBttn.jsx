import styles from "../../styles/modules/components/RegularBttn.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const RegularBttn = ({ configs }) => {
    if (!configs) {
        return null;
    }

    const bttnBg = configs.bttnBg;
    const bttnHover = configs.bttnHover;
    let iconColor = "";

    switch (configs.iconContent) {
        case "moon":
            iconColor = "#2c7bcaff";
            break;
        case "sun":
            iconColor = "gold";
            break;
        default:
            iconColor = "var(--textColor-Principal)";
            break;
    }

    return (
        <button
            className={`${styles.regularBttn} ${styles[bttnBg]} ${styles[bttnHover]}`}
        >
            <DynamicIcon
                className="IconsHeader"
                name={configs.iconContent}
                color={iconColor}
            />
            {configs.textContent && <span>{configs.textContent}</span>}
        </button>
    );
};

export default RegularBttn;
