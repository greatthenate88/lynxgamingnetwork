import React from 'react';
import Home from '../pages/Home'
import SignIn from '../pages/SignIn';




const routes = [

	{
		path: '/SignIn',
		component: SignIn,
		isPrivate: false,
	},
	{
		path: '/',
		component: Home,
		isPrivate: false,
	},
	{
		path : '/',
		component: Home,
		isPrivate: true,
	},
	
	

];

export default routes;
