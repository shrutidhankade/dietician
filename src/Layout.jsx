import React from 'react';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import { Outlet } from 'react-router-dom';

const Layout = ({children}) => {
	return (
		<>
			<div className="w-full overflow-hidden">
				<Header/>

				{children}
				<Outlet />
				<sidebar/>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
