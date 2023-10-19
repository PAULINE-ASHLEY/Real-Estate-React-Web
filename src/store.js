import { configureStore } from '@reduxjs/toolkit';

const reducer = {};
const store = configureStore({
	reducer: reducer,
	devTools: process.env.NODE_ENV !== 'production',
});
export default store;
