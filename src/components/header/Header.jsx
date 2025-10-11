import styles from "../../styles/modules/comps/Header.module.css";
import RegularBttn from "../global/RegularBttn";
import SearchInput from "../global/SearchInput";
import Logo from "./Logo";

const Header = () => {
    const headerBttnsList = HeaderBttnsList();
    return (
        <header>
            <Logo />
            <SearchInput />
            <div className={styles.navigateBttns}>
                {headerBttnsList.map((config, index) => (
                    <RegularBttn configs={config} id={index} />
                ))}
            </div>
        </header>
    );
};

function HeaderBttnsList() {
    return [
        {
            textContent: "Library",
            iconContent: "gamepad-2",
            bttnBg: "primaryBgBttn",
            bttnHover: "primaryHover",
        },
        {
            textContent: "Archievements",
            iconContent: "trophy",
            bttnBg: false,
            bttnHover: "primaryHover",
        },
        {
            textContent: "Stats",
            iconContent: "chart-column",
            bttnBg: false,
            bttnHover: "primaryHover",
        },
        {
            textContent: "Add Game",
            iconContent: "plus",
            bttnBg: "secondaryBgBttn",
            bttnHover: "primaryHover",
        },
        {
            textContent: false,
            iconContent: "sun",
            bttnBg: "tertiaryBgBttn",
            bttnHover: false,
        },
    ];
}

export default Header;
