import React from 'react';
import './footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='contact-form-column base'>
				<h3 className='title'>myresume</h3>
				<p>
					Strona służy jako moje CV. Została stworzona przy pomocy
					Reacta oraz Django (w ilościach homeopatycznych). Mam
					nadzieję że treści na niej zawarte zachęcą adresata tej
					wiadomości do nawiązania współpracy.
					<br />
					<br />
					Pozdrawiam,{' '}
					<span
						onClick={() =>
							(window.location.href =
								'https://www.linkedin.com/in/dominik-pietrzak-0223bb197')}
						className='color'>
						Dominik Pietrzak
					</span>.
				</p>
			</div>
			<div className='contact-form-column'>
				<h3>Dane kontaktowe</h3>
				<span>662-792-664</span>
				<span>d.pietrzak516@op.pl</span>
			</div>
			<div className='contact-form-column'>
				<h3>Social Media</h3>
				<span
					onClick={() =>
						(window.location.href =
							'https://www.linkedin.com/in/dominik-pietrzak-0223bb197')}>
					LinkedIn
				</span>
				<span
					onClick={() =>
						(window.location.href =
							'https://github.com/dominik10pietrzak')}>
					Github
				</span>
				<span
					onClick={() =>
						(window.location.href =
							'https://www.facebook.com/dominik.pietrzak.10')}>
					Facebook
				</span>
				<span
					onClick={() =>
						(window.location.href =
							'https://www.instagram.com/dominik__pietrzak/?hl=pl')}>
					Instagram
				</span>
			</div>
		</div>
	);
};

export default Footer;
