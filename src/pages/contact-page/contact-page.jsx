import React, { useEffect } from 'react';
import './contact-page.scss';
import { useHistory } from 'react-router-dom';

import MessageForm from '../../components/message-form/message-form';
import Footer from '../../components/footer/footer';

const goHome = (history) => {
	const square = document.querySelector('.contact-page .white-square');

	square.style.opacity = '1';
	setTimeout(() => {
		history.push('/');
	}, 500);
};

const ContactPage = () => {
	const history = useHistory();

	useEffect(() => {
		setTimeout(() => {
			document.querySelector('.contact-page .content').style.background =
				'black';
		}, 15);
		setTimeout(() => {
			document
				.querySelector('.contact-page .content')
				.classList.remove('hidden');
		}, 700);

		return () => {
			window.location.reload();
		};
	});

	return (
		<div className='contact-page'>
			<div className='white-square' />
			<div className='content hidden'>
				<span onClick={() => goHome(history)}>
					<i className='fas fa-arrow-left' />
				</span>
				<h1>Skontaktuj się ze mną poprzez email</h1>
				<p>
					Za pomocą poniższego formularza możesz napisać do mnie
					wiadomość, która zostanie dostarczona na moją skrzynkę
					mailową.
				</p>
			</div>
			<MessageForm />
			<Footer />
		</div>
	);
};

export default ContactPage;
