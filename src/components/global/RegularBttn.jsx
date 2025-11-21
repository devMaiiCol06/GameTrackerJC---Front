import { useNavigate, useLocation } from "react-router-dom";
import styles from "../../styles/modules/components/RegularBttn.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const RegularBttn = ({ configs, onAction }) => {
    if (!configs) {
        return null;
    }

    const newBttn =
        configs.bttnContext === "header"
            ? getNewBttnConfigs(configs)
            : { ...configs };
    const navigate = useNavigate();

    const handleClick = () => {
        if (newBttn.bttnLink && newBttn.bttnContext === "header") {
            navigate(`/${newBttn.bttnLink}`);
        } else if (
            configs.definedFilter === "inactiveFilter" &&
            configs.bttnContext === "filter"
        ) {
            onAction(configs.textContent);
        } else if (configs.bttnContext === "modalNewGame") {
            onAction("newGame");
        }
        return;
    };

    return (
        <button
            type="button"
            className={`${styles.regularBttn} ${styles[newBttn.bttnBg]} ${
                styles[configs.definedFilter]
            }`}
            onClick={handleClick}
        >
            {newBttn.iconContent &&<DynamicIcon name={newBttn.iconContent} color={newBttn.iconColor} />}
            {newBttn.textContent && <span>{newBttn.textContent}</span>}
        </button>
    );
};

function getNewBttnConfigs(configs) {
    let bttnConfigs = { ...configs };

    const { pathname } = useLocation();
    const normalizedPath = pathname.toLowerCase().replace("/", "");
    const normalizedText = bttnConfigs.textContent
        ? bttnConfigs.textContent.toLowerCase().replace(" ", "")
        : "";

    if (bttnConfigs.textContent && normalizedPath === normalizedText) {
        bttnConfigs.bttnBg = "primaryBgBttn";
    }

    bttnConfigs = { ...bttnConfigs, bttnLink: normalizedText };

    return bttnConfigs;
}

export default RegularBttn;
