import React, { useEffect } from 'react';
import './development.scss';

import vue from '../../assets/vue.png';
import typescript from '../../assets/typescript.png';
import photoshop from '../../assets/photoshop.png';

import lines from '../../assets/lines.svg';
import dots from '../../assets/dots.svg';

const Development = () => {
	useEffect(() => {
		const boxes = document.querySelectorAll('.development .dev-container');
		const images = document.querySelectorAll('.development .image');
		boxes.forEach((box, index) => {
			window.addEventListener('scroll', () => {
				if (window.scrollY > box.offsetTop - window.innerHeight / 2) {
					box.classList.remove('box-hidden');
					images[index].style.transform = 'none';
					images[index].style.opacity = 1;
				}
			});
		});
	});

	return (
		<div className='development'>
			<div className='dev-container box-hidden'>
				<div className='square-image growth'>
					<img src={lines} alt='lines' className='lines' />
					<div className='image' />
				</div>
				<div className='text'>
					<h1>Po pierwsze systematyczny rozwój</h1>
					<p>
						Cały czas tworzę nowe projekty z użyciem różnych
						technologii, staram się regularnie wdrażać do nich nowe
						rozwiązania. Oprócz narzędzi wymienionych w sekcji wyżej
						używałem także takich jak Vue.js czy Typescript, w
						przyszłości planuję położyć duży nacisk na naukę
						Backendu, aby stać się Fullstackiem w pełnym tego słowa
						znaczeniu.
					</p>
					<div className='flex-container'>
						<div className='skill'>
							<img src={vue} alt='vue' />
							<h3>Vue.js</h3>
						</div>
						<div className='skill'>
							<img src={typescript} alt='typescript' />
							<h3>Typescript</h3>
						</div>
						<div className='skill'>
							<img src={photoshop} alt='ps' />
							<h3>Photoshop</h3>
						</div>
					</div>
				</div>
			</div>
			<div className='dev-container box-hidden'>
				<div className='square-image cooperation'>
					<img src={dots} alt='dots' className='dots top-right' />
					<img src={dots} alt='dots' className='dots bottom-left' />
					<div className='image' />
				</div>
				<div className='text'>
					<h1>Technologia to nie wszystko</h1>
					<p>
						Oprócz umiejętności technicznych ważne jest także
						właściwe ich spożytkowanie, dlatego rozwijam się także
						pod kątem kreatywności, nieszablonowego myślenia, ale
						także umiejętności miękkich. Staram się rozwijać w wielu
						dziedzinach, także pozornie niezwiązanych z
						progamowaniem.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Development;
