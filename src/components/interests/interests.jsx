import React, { useEffect } from 'react';
import './interests.scss';

const Interests = () => {
	useEffect(() => {
		const interests = document.querySelector('.interests');

		const boxes = document.querySelectorAll(
			'.interests .grid-container .grid-box'
		);

		window.addEventListener('scroll', () => {
			if (
				window.scrollY >
				interests.offsetTop - window.innerHeight / 4 * 3
			) {
				interests.classList.remove('hidden');
				interests.style.transitionDelay = '0s';
			}
		});

		boxes.forEach((box) => {
			window.addEventListener(
				'scroll',
				() => {
					if (
						window.scrollY >
						interests.offsetTop +
							(box.offsetTop - window.innerHeight / 4 * 3)
					) {
						box.classList.remove('box-hidden');
					}
				},
				false
			);
		});
	});

	return (
		<div className='interests hidden'>
			<h1 className='title'>Czym się interesuję</h1>
			<div className='grid-container'>
				<div className='grid-box music box-hidden'>
					<span className='description'>
						Bardzo często w wolnym czasie słucham muzyki, chciałbym
						kiedyś nauczyć się grać na gitarze elektrycznej.
					</span>
				</div>
				<div className='grid-box astronomy box-hidden'>
					<span className='description'>
						Mało rzeczy budzi we mnie taką fascynację jak
						astronomia, uwielbiam czytać o kosmosie i wszelkiego
						rodzaju zjawiskach.
					</span>
				</div>
				<div className='grid-box books box-hidden'>
					<span className='description'>
						Lubię poczytać dobrą literaturę, nie tylko beletrystykę,
						bardzo chętnie sięgam po książki naukowe z dziedzin
						takich jak np. ekonomia.
					</span>
				</div>
				<div className='grid-box gym box-hidden'>
					<span className='description'>
						Bardzo często w wolnym czasie uprawiam sport, dbanie o
						formę fizyczną uważam za niezwykle ważną rzecz.
					</span>
				</div>
				{/* <div className='image' />
			<div className='text'>
				<p>
					Interesuję się sportem, zwłaszcza piłką nożną, muzyką,
					której słucham bez przerwy, astronomią i oczywiście
					progamowaniem. Wolny czas lubię spędzać aktywnie. Dbanie o
					formę fizyczną uważam za rzecz niezwykle ważną, nie tylko ze
					względu na zdrowie, ale także dlatego, że regularnie
					uprawiając sport, mogę ćwiczyć swój charakter, co korzystnie
					wpływa praktycznie na wszystkie aspekty życia. Lubię także
					poczytać dobrą książkę, nie tylko beletrystykę, bardzo
					chętnie sięgam po książki naukowe z dziedzin takich jak np.
					ekonomia.
				</p>
			</div> */}
			</div>
		</div>
	);
};

export default Interests;
