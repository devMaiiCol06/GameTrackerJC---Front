import styles from "../../styles/modules/components/Header.module.css";
import RegularBttn from "../global/RegularBttn";
import SearchInput from "../global/SearchInput";
import ThemeChanger from "./ThemeChanger.jsx";
import Logo from "./Logo";

const Header = () => {
    let buttons = [
        {
            textContent: "Library",
            iconContent: "gamepad-2",
            bttnBg: false,
            bttnContext: "header",
        },
        {
            textContent: "Archievements",
            iconContent: "trophy",
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
            bttnContext: false,
        },
    ];

    return (
        <header>
            <Logo />
            <div className={styles.navigateBttns}>
                {buttons.map((config, index) => (
                    <RegularBttn configs={config} key={index} />
                ))}
                <ThemeChanger />
            </div>
        </header>
    );
};

export default Header;
