import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Library from "../interfaces/Library";
import Archievements from "../interfaces/Archievements";
import Stats from "../interfaces/Stats";

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
