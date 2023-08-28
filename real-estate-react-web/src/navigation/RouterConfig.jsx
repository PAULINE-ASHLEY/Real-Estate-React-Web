import React from 'react';
// import { ProtectedRoutes } from 'components/guards';
import { Home, Buy, Rent, Contact, SignIn, SignUp, Sell, Detail } from 'pages';
import { Route, Routes } from 'react-router-dom';
import {
	HOME,
	BUY,
	RENT,
	CONTACT,
	SIGN_IN,
	SIGN_UP,
	SELL,
	DETAIL,
} from 'navigation/constants';

function RouterConfig() {
	return (
		<Routes>
			{/*************************PUBLIC ROUTES************************************** */}

			{/* List all public routes here */}
			<Route exact path={HOME} element={<Home />} />
			<Route path={BUY} element={<Buy />} />
			<Route path={RENT} element={<Rent />} />
			<Route path={SELL} element={<Sell />} />
			<Route path={CONTACT} element={<Contact />} />
			<Route path={SIGN_IN} element={<SignIn />} />
			<Route path={SIGN_UP} element={<SignUp />} />
			<Route path={DETAIL} element={<Detail />} />

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
