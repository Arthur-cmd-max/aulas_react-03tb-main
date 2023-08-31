import { Routes, Route } from "react-router-dom"

import Abacate from "./pages/Abacate"
import Perto from "./pages/Perto"

function Router() {
    return (
        <Routes>
        
        <Route path="/" element={<Abacate />} />
        <Route path="/perto" element={<Perto/>} />

        </Routes>
    )
}

export default Router