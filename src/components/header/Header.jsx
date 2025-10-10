import RegularBttn from "../global/RegularBttn";
import SearchInput from "../global/SearchInput";
import Logo from "./Logo";

const Header = () => {
    const headerBttnsList = HeaderBttnsList();
    return (
        <>
            <Logo />
            <SearchInput />
            {headerBttnsList.map((config, index) => (
                <RegularBttn configs={config} id={index} />
            ))}
        </>
    );
};

function HeaderBttnsList() {
    return [
        {
            textContent: "Library",
            iconContent: "gamepad-2",
            bttnBackg: "primaryBttn",
            bttnHover: "primaryHover",
        },
        {
            textContent: "Archievements",
            iconContent: "trophy",
            bttnBackg: "primaryBttn",
            bttnHover: "primaryHover",
        },
        {
            textContent: "Stats",
            iconContent: "chart-column",
            bttnBackg: "primaryBttn",
            bttnHover: "primaryHover",
        },
        {
            textContent: "Add Game",
            iconContent: "plus",
            bttnBackg: "secondaryBttn",
            bttnHover: "primaryHover",
        },
        {
            textContent: false,
            iconContent: "sun",
            bttnBackg: "tertiaryBttn",
            bttnHover: false,
        },
    ];
}

export default Header;
