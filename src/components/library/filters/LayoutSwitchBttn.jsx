import styles from "../../../styles/modules/components/LayoutSwitchBttn.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const LayoutSwitchBttn = ({ config, onAction }) => {
    if (!config) {
        return null;
    }

    const handleClick = () => {
        if (!config.defined) {
            onAction(config.layout);
        }
        return;
    };

    return (
        <button
            type="button"
            className={`${styles.LayoutSwitchBttnContainer} ${
                styles[config.defined]
            }`}
            onClick={() => handleClick()}
        >
            <DynamicIcon name={config.iconContent} />
        </button>
    );
};

export default LayoutSwitchBttn;
