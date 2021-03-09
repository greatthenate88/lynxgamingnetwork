import React from 'react';
import Home from '../pages/Home'
import Articles from '../pages/Articles'




const routes = [
	{
		path: '/articles',
		component: Articles,
		isPrivate: false,
	},
	{
		path: '/',
		component: Home,
		isPrivate: false,
	},
];

export default routes;
