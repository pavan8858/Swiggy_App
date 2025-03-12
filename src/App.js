import { lazy,Suspense, useEffect, useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestauranMenu from "./components/RestaurantMenu";
import UserContext from './components/UserContext.js';
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
// import Grocery from "./components/Grocery";

//chunking 
//code spiting 
//dynamic bundling 
//lazy loading 
//on demond loading 
//dynamic import 

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    const [userName , setuserName] = useState();

    // Authentication 
    useEffect(()=>{
        const data = {
            name:"Pavan Gupta ",
        };
        setuserName(data.name);

    },[]);
    return (
        <Provider store ={appStore}>
        <UserContext.Provider value = {{loggedInUser : userName , setuserName}}>
            <div className="app" >
                <UserContext.Provider value = {{loggedInUser : "Pavan Gupta"}}>
                <Header />
                </UserContext.Provider>
               
                
                
                <Outlet/>
            </div>
            </UserContext.Provider>
            </Provider>
        

    );
};

const approuter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path: "/about",
                element: <About />,
                
            },
            {
                path:"/grocery",
                element:<Suspense fallback = {<h1>Loading...</h1>}> <Grocery/> </Suspense>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestauranMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            },
        ],
        errorElement:<Error/>,
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
