import React from 'react';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<>
			<div className="w-full overflow-hidden">
				<Header/>
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default Layout;
