import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './assets/components/Header/Header.jsx'
import Footer from './assets/components/Footer/Footer.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyCart from './assets/components/Cart/MyCart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <MyCart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <RouterProvider router={router} />

    <Footer />
  </>
)
