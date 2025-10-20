import styles from "../../../styles/modules/components/gameFilters.module.css";
import RegularBttn from "../../global/RegularBttn";
import LayoutSwitchBttn from "./LayoutSwitchBttn.jsx";
import SearchInput from "./SearchInput";

const GameFilters = ({ onAction, definedLayout }) => {
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

    return (
        <div className={styles.gameFiltersContainer}>
            <div>
                <SearchInput />
                {layoutBttns.map((button, index) => {
                    const buttonConfig =
                        button.layout === definedLayout
                            ? { ...button, defined: "activeLayout" }
                            : { ...button };
                    return (
                        <LayoutSwitchBttn
                            config={buttonConfig}
                            key={index}
                            onAction={onAction}
                        />
                    );
                })}
            </div>
            <div>
                <RegularBttn />
            </div>
        </div>
    );
};

export default GameFilters;
