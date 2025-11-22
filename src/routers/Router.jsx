import { Routes, Route, Navigate } from "react-router-dom";
import Library from "../interfaces/Library";
import Stats from "../interfaces/Stats";

const Router = (props) => {
    return (
        <Routes>
            <Route
                path="/library"
                element={
                    <Library
                        fncVisibilityModal={props.fncVisibilityModal}
                        refreshTrigger={props.refreshTrigger}
                    />
                }
            />
            <Route path="/stats" element={<Stats />} />
            <Route path="*" element={<Navigate to="/library" replace />} />
        </Routes>
    );
};

export default Router;
