import React from 'react';
import {useRoutes} from "react-router";
import {routes} from "./routes.jsx";
import Header from "../components/common/Header.jsx";

export const useProjectRoutes = () => {
    const routers = useRoutes(routes)
    return <div className="md:container mx-auto px-28 py-3">
        <Header/>
        <script src="https://widgifyco.s3.eu-north-1.amazonaws.com/scripts/cmd33exnd0001qablv6tvmf42_1752496914942_bjqqjp.js"></script>
        {routers}
    </div>
};

