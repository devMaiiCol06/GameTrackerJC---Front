import { BrowserRouter, Routes, Route } from "react-router-dom";
import Library from "../pages/Library";
import Archievements from "../pages/Archievements";
import Stats from "../pages/Stats";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/stats" element={<Stats />} />
                <Route path="/archievements" element={<Archievements />} />
                <Route path="*" element={<Library />} />
            </Routes>
        </BrowserRouter>
    );
}
