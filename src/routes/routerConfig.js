import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../components/root/Dashboard";

function RouterConfig() {
    return (
        <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/products" exact element={<Dashboard />} />
        </Routes>
    )
}

export default RouterConfig;