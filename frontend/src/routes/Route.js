import MainRoot from "../components/MainRoot";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
// import Home from "../pages/Home/Home";
import Programs from "../pages/Programs";
import Teacher from "../pages/Teacher";

export const ROUTES = [
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"dashboard",
                element:<Dashboard/>
            },
            {
                path:"programs",
                element:<Programs/>
            },
            {
                path:"teacher",
                element:<Teacher/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
        ]
    }
];
