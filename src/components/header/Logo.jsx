import styles from "../../styles/modules/comps/Logo.module.css";
import "../../styles/global/index.css";

const Logo = () => {
    return (
        <div className={styles.LogoContainer}>
            <img
                className={styles.Imagotipo}
                src="/src/assets/Imagotipo - GameTracker.png"
                alt="Imagotipo - GameTracker"
            />
            <img
                className={`hidden ${styles.Logotipo}`}
                src="/src/assets/Logotipo - GameTracker.png"
                alt="Imagotipo - GameTracker"
            />
            <img
                className={`hidden ${styles.Isotipo}`}
                src="/src/assets/Isotipo - GameTracker.png"
                alt="Imagotipo - GameTracker"
            />
        </div>
    );
};

export default Logo;
