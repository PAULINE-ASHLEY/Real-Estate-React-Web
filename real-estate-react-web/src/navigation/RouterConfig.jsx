import React from 'react';
// import { ProtectedRoutes } from 'components/guards';
import {
	Home,
	Buy,
	Rent,
	Contact,
	Nairobi,
	Mombasa,
	Kisumu,
	Nakuru,
	Naivasha,
	Kilifi,
} from 'pages';
import { Route, Routes } from 'react-router-dom';
import {
	HOME,
	BUY,
	RENT,
	CONTACT,
	NAIROBI,
	KISUMU,
	MOMBASA,
	NAKURU,
	NAIVASHA,
	KILIFI,
} from 'navigation/constants';

function RouterConfig() {
	return (
		<Routes>
			{/*************************PUBLIC ROUTES************************************** */}

			{/* List all public routes here */}
			<Route exact path={HOME} element={<Home />} />
			<Route path={BUY} element={<Buy />} />
			<Route path={RENT} element={<Rent />} />
			<Route path={CONTACT} element={<Contact />} />
			<Route path={NAIROBI} element={<Nairobi />} />
			<Route path={MOMBASA} element={<Mombasa />} />
			<Route path={KISUMU} element={<Kisumu />} />
			<Route path={NAKURU} element={<Nakuru />} />
			<Route path={NAIVASHA} element={<Naivasha />} />
			<Route path={KILIFI} element={<Kilifi />} />

			{/*************************PROTECTED ROUTES************************************** */}
			{/* <Route element={<ProtectedRoutes redirectPath={LOGIN} />}>
				LIST ALL PROTECTED ROUTES HERE
			</Route> */}

			{/*************************404************************************** */}

			{/* List All 404 routes here */}
			<Route path='*' element={<div>404 PAGE NOT FOUND</div>} />
		</Routes>
	);
}

export default RouterConfig;
