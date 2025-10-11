import styles from "../../styles/modules/components/Header.module.css";
import RegularBttn from "../global/RegularBttn";
import SearchInput from "../global/SearchInput";
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
        {
            textContent: false,
            iconContent: "sun",
            bttnBg: "tertiaryBgBttn",
            bttnHover: false,
            bttnContext: "theme",
        },
    ];

    return (
        <header>
            <Logo />
            <SearchInput />
            <div className={styles.navigateBttns}>
                {buttons.map((config, index) => (
                    <RegularBttn configs={config} id={index} />
                ))}
            </div>
        </header>
    );
};


export default Header;
