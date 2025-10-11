import Router from "../routers/Router";
import Header from "../components/header/Header"
import styles from "../styles/modules/pages/ViewsIndex.module.css";

const ViewsIndex = () => {
    return (
        <div className={styles.viewsIndex}>
            <Header />
            <Router />
        </div>
    );
};

export default ViewsIndex;
