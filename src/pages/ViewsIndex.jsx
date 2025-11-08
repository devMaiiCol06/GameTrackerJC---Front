import Router from "../routers/Router";
import Header from "../components/header/Header";
import styles from "../styles/modules/pages/ViewsIndex.module.css";
import "../styles/global/index.css";
import { BrowserRouter } from "react-router-dom";

const ViewsIndex = () => {
    return (
        <BrowserRouter>
            <div className={styles.viewsIndex}>
                <Header />
                <main>
                    <Router />
                </main>
            </div>
        </BrowserRouter>
    );
};

export default ViewsIndex;
