import React from 'react';
import Home from '../pages/Home'




const routes = [
	{
		path: '/',
		component: Home,
		isPrivate: false,
	},
	{
		path: '/',
		component: Home,
		isPrivate: true,
	},
];

export default routes;
