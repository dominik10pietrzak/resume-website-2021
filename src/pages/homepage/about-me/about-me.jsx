import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './about-me.scss';

const AboutMe = ({ goToContact }) => {
	useEffect(() => {
		const rectangle = document.querySelector('.black-rectangle');

		const text = document.querySelector('.about-me .text-content');
		const image = document.querySelector('.about-me .image-content .image');

		window.addEventListener('scroll', (e) => {
			if (window.scrollY > text.offsetTop + window.innerHeight / 2) {
				text.classList.remove('hidden');
				rectangle.style.transform = 'translate(0)';
				image.classList.remove('image-hidden');
			}
		});

		return (e) => {
			window.addEventListener(
				'scroll',
				(event) => {
					event.stopPropagation();
				},
				true
			);
		};
	});

	const history = useHistory();

	return (
		<div className='about-me component '>
			<div className='black-rectangle' />
			<div className='text-content hidden'>
				<h1 className='header'>
					Jestem Frondend Developerem, <br />
					tworzę strony internetowe od około dwóch lat.
				</h1>
				<p className='about-me-description'>
					Jestem osobą ambitną, nie bojącą się odpowiedzialności ani
					wysoko postawionej poprzeczki. Regularnie się uczę aby
					stawać się coraz lepszym i zawsze stawiam się tworzyć
					projekty powyżej poziomu moich umiejętności. Programowanie
					to nie tylko zajęcie z którym wiążę swoją karierę zawodową,
					ale także pasja którą pielęgnuję.
				</p>
				<span onClick={() => goToContact(history)}>
					Skontaktuj sie ze mną
				</span>
			</div>
			<div className='image-content'>
				<div className='image image-hidden'>
					<div className='lines' />
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
