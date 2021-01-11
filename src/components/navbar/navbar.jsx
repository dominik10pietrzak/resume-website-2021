import React, { useEffect, useState } from 'react';
import './navbar.scss';

import $ from 'jquery';

//przewijanie strony do poszczególnych sekcji
const scrollToSection = (section) => {
	let isChrome = false;
	if (window.chrome && !window.opr) {
		isChrome = true;
	}

	const target = document.querySelector(section);

	if (
		isChrome &&
		!(window.innerWidth <= 1024 && window.innerHeight <= 1366)
	) {
		window.scroll(0, target.offsetTop);
	} else {
		$('html, body').animate(
			{ scrollTop: $(section).offset().top },
			400,
			'swing'
		);
	}

	if (document.querySelector('.navbar .menu-button')) {
		showHideMenu();
	}
};

//ukrywanie menu
const showHideMenu = () => {
	const menu = document.querySelector('.navbar .menu');
	const html = document.querySelector('html');

	window.scrollTo(0, 0);

	if (html.style.overflowY === 'hidden') {
		html.style.overflowY = 'scroll';
	} else {
		html.style.overflowY = 'hidden';
	}

	const button = document.querySelector('.navbar .menu-button');

	menu.classList.toggle('menu-hidden');
	button.classList.toggle('button-active');
};

const handleButtonVisibility = (isVisible) => {
	const buttons = document.querySelectorAll('.navbar .menu span');

	buttons.forEach((button, index) => {
		if (isVisible) {
			button.style.transition = `all 0.3s ease 0.${index}s`;
		} else {
			button.style.transition = 'all 0s linear 0s';
		}
	});
};

const Navbar = () => {
	const [ menuButtonVisibility, setVisibility ] = useState(
		window.innerWidth <= 926 && window.innerHeight <= 1280
	);

	useEffect(() => {
		const isVisible =
			window.innerWidth <= 926 && window.innerHeight <= 1280;
		const menu = document.querySelector('.navbar .menu');

		handleButtonVisibility(isVisible);

		window.addEventListener('resize', () => {
			handleButtonVisibility(isVisible);
			setVisibility(
				window.innerWidth <= 926 && window.innerHeight <= 1280
			);

			menu.classList.add('menu-hidden');
			document.querySelector('html').style.overflowY = 'scroll';
		});
	});

	return (
		<div className='navbar'>
			<h3 className='title'>myresume</h3>
			<nav className='menu menu-hidden'>
				<span onClick={scrollToSection.bind(this, '.about-me')}>
					O mnie
				</span>
				<span onClick={scrollToSection.bind(this, '.skills')}>
					Umiejętności
				</span>
				<span onClick={scrollToSection.bind(this, '.development')}>
					Rozwój
				</span>
				<span onClick={scrollToSection.bind(this, '.interests')}>
					Zainteresowania
				</span>
				<span onClick={scrollToSection.bind(this, '.footer')}>
					Kontakt
				</span>
				{menuButtonVisibility ? (
					<div className='social-media'>
						<i
							className='fab fa-linkedin'
							onClick={() =>
								(window.location.href =
									'https://www.linkedin.com/in/dominik-pietrzak-0223bb197')}
						/>
						<i
							className='fab fa-github-square'
							onClick={() =>
								(window.location.href =
									'https://github.com/dominik10pietrzak')}
						/>
						<i
							className='fab fa-facebook-square'
							onClick={() =>
								(window.location.href =
									'https://www.facebook.com/dominik.pietrzak.10')}
						/>
						<i
							className='fab fa-instagram'
							onClick={() =>
								(window.location.href =
									'https://www.instagram.com/dominik__pietrzak/?hl=pl')}
						/>
					</div>
				) : (
					''
				)}
			</nav>
			{menuButtonVisibility ? (
				<div
					className='menu-button'
					onClick={() => {
						showHideMenu();
					}}>
					{' '}
					<div className='line' />
					<div className='line' />
					<div className='line' />
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default Navbar;
