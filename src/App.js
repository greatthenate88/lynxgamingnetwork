import './App.css';
import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import routes from './Config/routes.js';
import { AuthProvider } from './Context';
import AppRoute from './Config/AppRoute';
import styled, { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from './theme/GlobalStyles';
import {useTheme} from './theme/useTheme';


function App() {
	const {theme, themeLoaded, getFonts} = useTheme();
	const [selectedTheme, setSelectedTheme] = useState(theme);
  
	useEffect(() => {
	  setSelectedTheme(theme);
	 }, [themeLoaded]);

	 useEffect(() => {
		WebFont.load({
		  google: {
			families: getFonts()
		  }
		});
	  });

  return (
    themeLoaded && 
	<ThemeProvider theme={ selectedTheme }>
		<GlobalStyles/>
		<div className="App">
    	  <AuthProvider>
			<Router>
				<Switch>
					{routes.map((route) => (
						<AppRoute
							key={route.path}
							path={route.path}
							component={route.component}
							isPrivate={route.isPrivate}
						/>
					))}
				</Switch>
			</Router>
		  </AuthProvider>
    	</div>
	</ThemeProvider>
  );
}

export default App;
