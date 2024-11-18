import React from 'react';
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Home from './Components/home/Home';
import './App.css';
import FindLocation from './Components/findLocation/FindLocation';
import NavBar from './Components/navBar/NavBar';
import Login from './Components/login/Login';
import Error from './Components/error/Error';

// Layout component to include NavBar and render child routes
function Layout() {
  return (
    <>
      <NavBar />
      <Outlet /> {/* This is where child route components will render */}
    </>
  );
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />, // Wrap routes with the Layout component
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/find-dest",
          element: <FindLocation />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
