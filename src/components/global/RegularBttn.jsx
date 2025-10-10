import styles from "../../styles/modules/comps/RegularBttn.module.css";
import { DynamicIcon } from "lucide-react/dynamic";

const RegularBttn = ({configs}) => {
    return (
        <button
            className={`${styles.regularBttn} ${styles.bttnBackg} ${styles.bttnHover}`}
        >
            <DynamicIcon className="Icons" name={configs.iconContent} />
            <span>{configs.textContent}</span>
        </button>
    );
};

export default RegularBttn;
