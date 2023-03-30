import Home from "../pages/Home/index.jsx";
import User from "../pages/User";

export const routes = [
    {label: "Home", path: "*", element: <Home/>},
    {label: "Home", path: "/", element: <Home/>},
    {label: "Home", path: "/user/:userName", element: <User/>},
];