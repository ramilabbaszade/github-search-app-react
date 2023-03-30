import React from 'react';
import {useRoutes} from "react-router";
import {routes} from "./routes.jsx";
import Header from "../components/common/Header.jsx";

export const useProjectRoutes = () => {
    const routers = useRoutes(routes)
    return <div className="md:container mx-auto px-28 py-3">
        <Header/>
        {routers}
    </div>
};

