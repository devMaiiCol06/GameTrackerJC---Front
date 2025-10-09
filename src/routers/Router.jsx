import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Library from "../pages/Library";
import Archievements from "../pages/Archievements";
import Stats from "../pages/Stats";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/archievements" element={<Archievements />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
