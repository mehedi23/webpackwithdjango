import React from "react";
import Home from "./home";
import Details from "./details";


export const AllPages = () => {

    const all_routes = [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/details',
            element: <Details />,
        },
        {
            path: '*',
            element: 'No page found as',
        },
    ];

    return all_routes;
};
