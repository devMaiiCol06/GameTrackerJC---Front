import styles from "../../styles/modules/comps/SearchInput.module.css";
import { Search } from "lucide-react";

const SearchInput = () => {
    return (
        <div className={styles.searchInputContainer}>
            <Search color="var(--SearchInputColor)" size={20}/>
            <input placeholder="Search your games..." required />
        </div>
    );
};

export default SearchInput;
