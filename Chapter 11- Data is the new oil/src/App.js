import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import Restaurantmenu from "./Component/Restaurantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Grocery from "./Component/Grocery";
import UserContext from "./utils/UserContext";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

// not using keys (not acceptable) <<<< index as key <<<< unique id (best practice)

const Grocery = lazy(() => import("./Component/Grocery"));

const About = lazy(() => import("./Component/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  // authentication
  useEffect(() => {
    // Make an API call  and send username and password
    const data = {
      name: "Ayush Raj",
    };
    setUserName(data.name);
  }, []);
  return (
    // Default
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      {/* Ayush Raj */}
      <div className="app">
        {/* Elon Musk */}
        {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
          <Header />
        {/* </UserContext.Provider> */}

        <Outlet />

        {/* <Body /> */}
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurantmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
