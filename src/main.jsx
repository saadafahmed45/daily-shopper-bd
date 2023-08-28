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
import Cart from './assets/components/Cart/Cart.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <RouterProvider router={router} />

    <Footer />
  </>
)
