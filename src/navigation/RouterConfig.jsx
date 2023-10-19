import React from 'react';
import { ProtectedRoutes } from 'components/guards';
import {
	Home,
	Buy,
	Rent,
	Contact,
	SignIn,
	SignUp,
	Sell,
	BuyDetail,
	SellDetail,
	RentDetail,
	PopularDetail,
} from 'pages';
import { Route, Routes } from 'react-router-dom';
import {
	HOME,
	BUY,
	RENT,
	CONTACT,
	SIGN_IN,
	SIGN_UP,
	SELL,
	BUY_DETAIL,
	SELL_DETAIL,
	RENT_DETAIL,
	ACCOUNT,
	POPULAR_DETAIL,
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
			<Route path={SELL_DETAIL} element={<SellDetail />} />
			<Route path={BUY_DETAIL} element={<BuyDetail />} />
			<Route path={RENT_DETAIL} element={<RentDetail />} />
			<Route path={POPULAR_DETAIL} element={<PopularDetail />} />

			{/*************************PROTECTED ROUTES************************************** */}
			<Route element={<ProtectedRoutes redirectPath={SIGN_UP} />}>
				{/* LIST ALL PROTECTED ROUTES HERE */}
				<Route path={ACCOUNT} />
			</Route>

			{/*************************404************************************** */}

			{/* List All 404 routes here */}
			<Route path='*' element={<div>404 PAGE NOT FOUND</div>} />
		</Routes>
	);
}

export default RouterConfig;
