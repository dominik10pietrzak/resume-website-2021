import React, { Component } from 'react';
import './App.scss';

import { Switch, Route } from 'react-router';

//components

//pages
import Homepage from './pages/homepage/homepage';
import ContactPage from './pages/contact-page/contact-page';

class App extends Component {
	state = {};

	render() {
		return (
			<div className='App'>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route exact path='/contact' component={ContactPage} />
				</Switch>
			</div>
		);
	}
}

export default App;
