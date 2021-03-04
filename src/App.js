
import './App.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import routes from './Config/routes.js';
import { AuthProvider } from './Context';
import AppRoute from './Config/AppRoute';

function App() {
  return (
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
  );
}

export default App;
