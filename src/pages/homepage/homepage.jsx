import React, { Component } from 'react';
import './homepage.scss';

//components
import Opening from './opening/opening';
import AboutMe from './about-me/about-me';
import Skills from './skills/skills';
import Development from './development/development';
import Interests from './interests/interests';
import Footer from '../../components/footer/footer';

class Homepage extends Component {
	handleGoTo = (history) => {
		window.scroll(0, 0);

		const box = document.querySelector('.transition-box-dark');

		box.style.opacity = '1';

		setTimeout(() => {
			history.push('/contact');
		}, 500);
	};

	render() {
		return (
			<div className='homepage'>
				<div className='transition-box-dark' />
				<Opening goToContact={this.handleGoTo} />
				<AboutMe goToContact={this.handleGoTo} />
				<Skills />
				<Development />
				<Interests />
				<Footer />
			</div>
		);
	}
}

export default Homepage;
