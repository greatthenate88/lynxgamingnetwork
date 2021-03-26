import React from 'react';
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import SignIn from '../pages/SignIn';
import CreateArticle from '../pages/CreateArticle';

import Schedule from '../pages/Schedule';




const routes = [

	{
		path: '/SignIn',
		component: SignIn,
		isPrivate: false,
	},
	{
		path: '/schedule',
		component: Schedule,
		isPrivate: false,
	},
	{
		path: '/articles',
		component: Articles,
		isPrivate: false,
	},
	{
		path: '/createarticle',
		component: CreateArticle,
		isPrivate: false,
	},
	{
		path : '/',
		component: Home,
		isPrivate: false,
	},
	
	

];

export default routes;
