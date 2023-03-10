import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate,
} from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
// import Navbar from './components/Navbar/Navbar';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
// import Products from './components/Products/Products';
// import Contact from './pages/Contact/Contact';
// import Product from './components/Product/Product';
// import Blog from './pages/Blog/Blog';
import Store from './pages/Store/Store';
import Partners from './pages/Partners/Partners';
// import MainNav from './components/Slider/MainNav/MainNav';

const App = () => {
	// we are not logged in yet
	const currentUser = true;
	const ProtectedRoute = ({ children }) => {
		// if there is no current user
		if (!currentUser) {
			return <Navigate to='/login' />;
		}
		return children;
	};

	const Layout = () => {
		return (
			<div>
				{/* <Navbar /> */}
				{/* <MainNav /> */}
				<div>
					<Outlet />
				</div>
				<Footer />
			</div>
		);
	};
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			errorElement: <ErrorPage />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/about',
					element: <About />,
				},
				// {
				// 	path: '/products/:id',
				// 	element: <Products />,
				// },
				// {
				// 	path: '/product/:id',
				// 	element: <Product />,
				// },
				// {
				// 	path: '/contact',
				// 	element: <Contact />,
				// },
				// {
				// 	path: '/blog',
				// 	element: <Blog />,
				// },
				{
					path: '/store',
					element: <Store />,
				},
				{
					path: '/partners',
					element: <Partners />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <Register />,
		},
	]);
	return (
		<div className='app'>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
