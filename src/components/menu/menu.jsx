import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss';

const Menu = () => {
	useEffect(() => {
		const menu = document.querySelector('.menu');
		document.querySelector('.navbar').style.background = 'transparent';

		menu.style.opacity = 1;
		setTimeout(() => {
			menu.classList.remove('menu-hidden-content');
		}, 300);

		const links = document.querySelectorAll('.page-link');

		links.forEach((link) => {
			console.log(link.value);
			link.setAttribute('data-value', link.innerText);
		});

		return () => {
			// document.querySelector('body').style.overflowY = 'auto'
		};
	}, []);

	return (
		<div className='menu menu-hidden-content'>
			<div className='content'>
				<div />
				<div className='navigation'>
					<Link className='page-link'>Umiejętności</Link>
					<Link className='page-link'>Rozwój</Link>
					<Link className='page-link'>Zainteresowania</Link>
					<Link className='page-link'>Kontakt</Link>
				</div>
				<div className='social-media'>
					<span>Email</span>
					<span>Facebook</span>
					<span>LinkedIn</span>
					<span>Instagram</span>
					<span>Github</span>
				</div>
			</div>
		</div>
	);
};

export default Menu;
