import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Init from "../pages/Init";
import Services from "../pages/Services";
import Layout from "./Layout";
import Errornotfound from "../pages/Errornotfound";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} >
                <Route index element={<Init />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route exact path="*" element={<Errornotfound />} />
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;