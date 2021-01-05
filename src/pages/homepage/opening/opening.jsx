import React, { Component } from 'react';
import './opening.scss';

import { useHistory } from 'react-router-dom';

import Navbar from '../../../components/navbar/navbar';
import ContactBar from '../contact-bar/contact-bar';

class Opening extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount = () => {
		const content = document.querySelector(
			'.opening .flex-container .content'
		);
		const box = document.querySelector('.opening .transition-box');

		setTimeout(() => {
			box.style.opacity = '0';
		}, 15);
		setTimeout(() => {
			box.remove();
			content.classList.remove('content-hidden');
		}, 700);
	};

	render() {
		return (
			<div className='opening'>
				<div className='transition-box' />
				<ContactBar goToContact={this.props.goToContact} />
				<div className='flex-container'>
					<Navbar />
					<div className='content content-hidden'>
						<div className='image-box'>
							<div className='bg-image' />
							<div className='lines' />
						</div>
						<div className='text-wrapper'>
							<h1>Cześć! Nazywam się Dominik</h1>
							<p>
								Zajmuję się tworzeniem stron internetowych w
								React'cie, robię to już prawie ponad rok i
								uważam, że jestem w tym całkiem dobry. Od
								niedawna piszę kod także w Pythonie, a
								konkretniej w Django. Teraz poszukuję pracy na
								stanowisku Junior Frontend Developera.
							</p>
							{/* <span className='contact-button'>Kontakt</span> */}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Opening;
