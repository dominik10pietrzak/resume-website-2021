import React, { Component } from 'react';
import './message-form.scss';

class MessageForm extends Component {
	state = {
		messageName: '',
		messageCompany: '',
		messageEmail: '',
		messageText: ''
	};

	componentDidMount = () => {
		const box = document.querySelector('.color-box');
		const form = document.querySelector('.form-container');

		setTimeout(() => {
			box.style.height = '0%';
			box.style.background = 'black';
		}, 15);

		setTimeout(() => {
			form.classList.remove('form-hidden');
		}, 550);
	};

	getCookie = (name) => {
		let cookieValue = null;
		if (document.cookie && document.cookie !== '') {
			const cookies = document.cookie.split(';');
			for (let i = 0; i < cookies.length; i++) {
				const cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) === name + '=') {
					cookieValue = decodeURIComponent(
						cookie.substring(name.length + 1)
					);
					break;
				}
			}
		}
		return cookieValue;
	};

	checkIfFilled = (e) => {
		e.preventDefault();

		const textareas = document.querySelectorAll(
			'.message-form form .text-field'
		);

		textareas.forEach((item) => {
			item.style.borderColor = ' rgb(221, 221, 221)';
		});

		let isCorrect = true;
		textareas.forEach((item) => {
			if (item.value === '') {
				if (item.name === 'messageCompany') {
					return;
				}
				item.style.borderColor = 'red';
				isCorrect = false;
			}
		});

		if (isCorrect) {
			this.handleSendMessage(e);

			textareas.forEach((item) => {
				this.setState({ [item.name]: '' });
			});
		}
	};

	handleSendMessage = (e) => {
		e.preventDefault();

		const csrftoken = this.getCookie('csrftoken');

		let url =
			'https://dominik-pietrzak-resume.herokuapp.com/message/send_email/';

		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-CSRFToken': csrftoken
			},
			body: JSON.stringify({
				message_name: this.state.messageName,
				message_email: this.state.messageEmail,
				message_company: this.state.messageCompany,
				message: this.state.message
			})
		}).catch((err) => {
			console.log(err + 'Cos nie wyszło');
		});

		const communicate = document.querySelector(
			'.message-form form .bottom p'
		);

		communicate.style.opacity = '1';

		setTimeout(() => {
			communicate.style.opacity = '0';
		}, 5000);
	};

	handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div className='message-form'>
				<div className='color-box' />
				<form
					className='form-container form-hidden'
					onSubmit={this.checkIfFilled}
					method='POST'>
					<label>Jak się nazywasz?</label>
					<input
						className='text-field'
						type='text'
						name='messageName'
						placeholder='Imię i nazwisko'
						onChange={this.handleChange}
						value={this.state.messageName}
					/>
					<label>Kontakt (email, nr telefonu etc.)</label>
					<input
						className='text-field'
						type='email'
						name='messageContact'
						placeholder='Kontakt'
						onChange={this.handleChange}
						value={this.state.messageEmail}
					/>
					<label>Nazwa firmy (opcjonalne)</label>
					<input
						className='text-field'
						type='text'
						name='messageCompany'
						placeholder='Nazwa firmy'
						onChange={this.handleChange}
						value={this.state.messageCompany}
					/>
					<label>Wiadomość</label>
					<textarea
						className='text-field'
						placeholder='Napisz do mnie'
						name='message'
						onChange={this.handleChange}
						value={this.state.message}
					/>
					<div className='bottom'>
						<p className='message-sent'>
							Wiadomość została wysłana<i className='fas fa-check' />
						</p>
						<button className='send-button' type='submit'>
							Wyślij
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default MessageForm;
