import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Layout from './Layout.jsx';
import './index.css';

import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { Home, About, Contact, User } from './components/index.js';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.jsx';
import Signup from './components/Signup/signup.jsx';
import Dashboard from './components/User/Dashboard/Dashboard.jsx';

/*  -- First Way to Do Routing -- */
// const router = createBrowserRouter([
// 	{
// 		path: '/',
// 		element: <Layout />,
// 		children: [
// 			{ path: '', element: <Home /> },
// 			{ path: 'about', element: <About /> },
// 			{ path: 'contact', element: <Contact /> },
// 		],
// 	},
// ]);

/*  -- Second Way to Do Routing -- */
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route path="" element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="signup" element={<Signup />} />
			<Route path="dashboard" element={<Dashboard />} />


			<Route path="user/:userId" element={<User />} />
			<Route
				loader={githubInfoLoader}
				path="github" element={<Github />} />
		</Route>

	)
);

ReactDOM.createRoot(document.getElementById('root')).render(


	<Provider store={store}>
		<RouterProvider router={router} />

		<App />

	</Provider>



);
