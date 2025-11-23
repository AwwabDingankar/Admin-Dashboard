import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

import Overview from "../pages/overview";

export default function AppRoutes() { 
    return (
        <Routes>
            <Route path="/" element={ <Layout />} >
                <Route index element={ <Overview />} />
                {/* TODO- add students & reports route */}
            </Route>
        </Routes>
    )
}                                                          