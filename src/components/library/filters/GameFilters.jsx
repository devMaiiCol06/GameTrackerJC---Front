import styles from "../../../styles/modules/components/gameFilters.module.css";
import RegularBttn from "../../global/RegularBttn";
import LayoutSwitchBttn from "./LayoutSwitchBttn.jsx";
import SearchInput from "./SearchInput";

const GameFilters = ({
    fncLayout,
    fncFilter,
    definedLayout,
    definedFilter,
}) => {
    const layoutBttns = [
        {
            iconContent: "grid-2x2",
            layout: "gridView",
        },
        {
            iconContent: "list",
            layout: "listView",
        },
    ];

    let filterBttns = [
        {
            textContent: "All Games",
            iconContent: "gallery-vertical-end",
            bttnBg: false,
            bttnContext: "filter",
        },
        {
            textContent: "Playing",
            iconContent: "play",
            bttnBg: false,
            bttnContext: "filter",
        },
        {
            textContent: "Completed",
            iconContent: "trophy",
            bttnBg: false,
            bttnContext: "filter",
        },
        {
            textContent: "Wishlist",
            iconContent: "heart",
            bttnBg: false,
            bttnContext: "filter",
        },
        {
            textContent: "Dropped",
            iconContent: "door-open",
            bttnBg: false,
            bttnContext: "filter",
        },
    ];

    return (
        <div className={styles.gameFiltersContainer}>
            <div>
                <SearchInput />
                {layoutBttns.map((button, index) => {
                    const buttonConfig =
                        button.layout === definedLayout
                            ? { ...button, definedLayout: "activeLayout" }
                            : { ...button, definedLayout: "inactiveLayout" };
                    return (
                        <LayoutSwitchBttn
                            configs={buttonConfig}
                            key={index}
                            onAction={fncLayout}
                        />
                    );
                })}
            </div>
            <div>
                {filterBttns.map((button, index) => {
                    const buttonConfig =
                        button.textContent === definedFilter
                            ? { ...button, definedFilter: "activeFilter" }
                            : { ...button, definedFilter: "inactiveFilter" };
                    return (
                        <RegularBttn
                            configs={buttonConfig}
                            key={index}
                            onAction={fncFilter}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default GameFilters;
