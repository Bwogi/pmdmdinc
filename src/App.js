import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
// import Navbar from "./components/Navbar/Navbar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
// import Products from "./components/Products/Products";
// import Contact from './pages/Contact/Contact';
// import Product from "./components/Product/Product";
import Store from "./pages/Store/Store";
import Blog from "./pages/Blog/Blog";
import Partners from "./pages/Partners/Partners";
// import Contact from "./components/Contact/Contact";
import Contact1 from "./components/Contact1/Contact1";
import ParkSystemSet from "./pages/ParkSystemSet/ParkSystemSet";
// import Accessories from "./pages/Accessories/Accessories";
// import ProductsNew from "./pages/ProductsNew/ProductsNew";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import SurgicalTechniques from "./pages/SurgicalTechniques/SurgicalTechniques";
// import NavbarNew from "./components/NavbarNew/NavbarNew";
import MainNav from "./components/MainNav/MainNav";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import InPlants from "./pages/InPlants/InPlants";
import PecVacDevice from "./pages/PecVacDevice/PecVacDevice";
import Products from "./pages/Products/Products";
import Product1 from "./components/Product1/Product1";
import Product2 from "./components/Product2/Product2";
import Product3 from "./components/Product3/Product3";
import PectVac from "./components/PectVac/PectVac";

const App = () => {
  // we are not logged in yet
  const currentUser = true;
  const ProtectedRoute = ({ children }) => {
    // if there is no current user
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const Layout = () => {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <NavbarNew /> */}
        <MainNav />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/product-details",
          element: <ProductDetails />,
        },
        {
          path: "/pectus-vacuum-device",
          element: <PecVacDevice />,
        },
        {
          path: "/parks-system-set",
          element: <ParkSystemSet />,
        },

        {
          path: "/surgical-techniques",
          element: <SurgicalTechniques />,
        },
        {
          path: "/privacy-policy",
          element: <PrivacyPolicy />,
        },
        {
          path: "/in-plants",
          element: <InPlants />,
        },
        {
          path: "/contact",
          element: <Contact1 />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/pectvac",
          element: <PectVac />,
        },
        {
          path: "/product/1",
          element: <Product1 />,
        },
        {
          path: "/product/2",
          element: <Product2 />,
        },
        {
          path: "/product/3",
          element: <Product3 />,
        },
        {
          path: "/store",
          element: <Store />,
        },
        {
          path: "/partners",
          element: <Partners />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
