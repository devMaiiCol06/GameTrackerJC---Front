import { Routes, Route, Navigate } from "react-router-dom";
import Library from "../interfaces/Library";
import Archievements from "../interfaces/Archievements";
import Stats from "../interfaces/Stats";

const Router = () => {
    return (
        <Routes>
            <Route path="/library" element={<Library />} />
            <Route path="/stats" element={<Stats />} />
            <Route path="/archievements" element={<Archievements />} />
            <Route path="*" element={<Navigate to="/library" replace />} />
        </Routes>
    );
};

export default Router;
