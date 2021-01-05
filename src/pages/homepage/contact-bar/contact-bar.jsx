import React from 'react';
import { useHistory } from 'react-router-dom';
import './contact-bar.scss';

const ContactBar = ({ goToContact }) => {
	const history = useHistory();

	return (
		<div className='contact-bar'>
			<div
				className='message-button'
				onClick={() => goToContact(history)}>
				<i className='far fa-envelope' />
			</div>
			<div className='contact-forms'>
				<div className='basic'>
					<h3>d.pietrzak516@op.pl</h3>
					<h3>662-792-664</h3>
				</div>
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
			</div>
		</div>
	);
};

export default ContactBar;
