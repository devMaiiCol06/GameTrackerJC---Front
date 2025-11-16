import styles from "../../styles/modules/components/Header.module.css";
import RegularBttn from "../global/RegularBttn";
import ThemeChanger from "./ThemeChanger.jsx";
import Logo from "./Logo";

const Header = ({ fncVisibilityModal }) => {
    let buttons = [
        {
            textContent: "Library",
            iconContent: "gamepad-2",
            bttnBg: false,
            bttnContext: "header",
        },
        {
            textContent: "Stats",
            iconContent: "chart-column",
            bttnBg: false,
            bttnContext: "header",
        },
        {
            textContent: "Add Game",
            iconContent: "plus",
            bttnBg: "secondaryBgBttn",
            bttnContext: "modalNewGame",
        },
    ];

    return (
        <header>
            <Logo />
            <div className={styles.navigateBttns}>
                {buttons.map((config, index) => (
                    <RegularBttn
                        configs={config}
                        key={index}
                        onAction={fncVisibilityModal}
                    />
                ))}
                <ThemeChanger />
            </div>
        </header>
    );
};

export default Header;
