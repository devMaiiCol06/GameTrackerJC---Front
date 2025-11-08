import styles from "../../../styles/modules/components/LayoutSwitchBttn.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const LayoutSwitchBttn = ({ configs, onAction }) => {
    if (!configs) {
        return null;
    }

    const handleClick = () => {
        if (configs.definedLayout === "inactiveLayout") {
            onAction(configs.layout);
        }
        return;
    };

    return (
        <button
            type="button"
            className={`${styles.layoutSwitchBttn} ${
                styles[configs.definedLayout]
            }`}
            onClick={() => handleClick()}
        >
            <DynamicIcon name={configs.iconContent} />
        </button>
    );
};

export default LayoutSwitchBttn;
