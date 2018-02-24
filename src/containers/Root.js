import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import store from '../store';
import App from '../components/App';

const Root = () => (
	<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App}/>
		</Switch>
	</BrowserRouter>
	</Provider>
);

export default Root;