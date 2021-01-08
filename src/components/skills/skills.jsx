import './skills.scss';
import { useEffect } from 'react';

import react from '../../assets/react.png';
import python from '../../assets/python.png';
import adobe from '../../assets/adobe.png';
import english from '../../assets/english.png';

import SkillAdvance from '../skill-advance/skill-advance';

const Skills = () => {
	useEffect(() => {
		const description = document.querySelector('.skills .short-desc');
		const skills = document.querySelectorAll('.skills-container .skill');

		window.addEventListener(
			'scroll',
			() => {
				if (
					window.scrollY >
					description.offsetTop - window.innerHeight / 2
				) {
					description.classList.remove('text-hidden');
				}
			},
			false
		);

		skills.forEach((box, index) => {
			window.addEventListener('scroll', () => {
				if (window.scrollY > box.offsetTop - window.innerHeight / 2) {
					setTimeout(() => {
						box.classList.remove('hidden');
					}, 100 * index);
				}
			});
		});
	});

	return (
		<div className='skills'>
			<div className='short-desc text-hidden'>
				<h1>Moje umiejętności</h1>
				<p>
					Jak już wspomniałem wyżej programowaniem zajmuję się od
					dłuższego czasu i udało mi się opanować w dobrym stopniu
					kilka technologii. Piszę kod odpowiadający głównie za
					Frontend, ale w niedalekiej przyszłości chcę się nauczyć
					tworzenia całego zaplecza technicznego aplikacji
					internetowych.
				</p>
			</div>
			<div className='skills-container'>
				<div className='skill react hidden'>
					<img className='skill-image' src={react} alt='react' />
					<h1 className='skill-title'>React</h1>
					<SkillAdvance advance={4.5} skillName='react' />
					<p className='skill-description'>
						Reacta uczę się już prawie rok i uważam, że poznałem go
						dość dobrze. Naukę zacząłem od kursów internetowych, a
						obecnie tworzę za jego pomocą strony internetowe.
					</p>
				</div>
				<div className='skill python hidden'>
					<img className='skill-image' src={python} alt='python' />
					<h1 className='skill-title'>Python (Django)</h1>
					<SkillAdvance advance={3} skillName='python' />
					<p className='skill-description'>
						Kilka tygodni temu uznałem, że najwyższy czas
						zainteresować się trochę backend'em i postanowiłem
						zacząć uczyć się Pythona, a mianowicie jego webowego
						frameworka Django.
					</p>
				</div>
				<div className='skill adobe hidden'>
					<img className='skill-image' src={adobe} alt='adobe' />
					<h1 className='skill-title'>Programy Adobe</h1>
					<SkillAdvance advance={2.5} skillName='adobe' />
					<p className='skill-description'>
						W podstawowym stopniu opanowałem Adobe Illustrator i
						Adobe XD, zaczynam się także uczyć obsługi Photoshopa.
					</p>
				</div>
				<div className='skill english hidden'>
					<img className='skill-image' src={english} alt='english' />
					<h1 className='skill-title'>Angielski</h1>
					<SkillAdvance advance={5} skillName='english' />
					<p className='skill-description'>
						Posługiwanie się językiem angielskim nigdy nie sprawiało
						mi problemów, rozumiem go dobrze, także ze słuchu.
						Programowania też uczyłem się w większości z
						anglojęzycznych źródeł m.in. z dokumentacji.
					</p>
					<div className='lines' />
				</div>
			</div>
		</div>
	);
};

export default Skills;
