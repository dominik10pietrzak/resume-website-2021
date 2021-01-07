import React, { Component } from 'react';
import './homepage.scss';

//components
import Opening from '../../components/opening/opening';
import AboutMe from '../../components/about-me/about-me';
import Skills from '../../components/skills/skills';
import Development from '../../components/development/development';
import Interests from '../../components/interests/interests';
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
