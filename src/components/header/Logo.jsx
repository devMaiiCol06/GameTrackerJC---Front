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
                className={styles.Logotipo}
                src="/src/assets/Logotipo - GameTracker.png"
                alt="Logotipo - GameTracker"
            />
            <img
                className={styles.Isotipo}
                src="/src/assets/Isotipo - GameTracker.png"
                alt="Isotipo - GameTracker"
            />
        </div>
    );
};

export default Logo;
