import { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import './contact.css';

export const Contact = () => {
	const [message, setMessage] = useState(false);
	const formRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
		emailjs
			.sendForm(
				'service_by014mp',
				'template_kfhyiw8',
				formRef.current,
				'0Hy01NunNYWcEAyR-'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	};

	return (
		<section id='contact'>
			<h5>Ponerte en contacto</h5>
			<h5>
				Responderé lo antes posible sin son validos (proporcione un
				correo para su contacto).
			</h5>
			<h2>Contáctame</h2>
			{/* contacto */}
			<div className='container contact__container'>
				<div className='contact__options'>
					<article className='contact__option'>
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>skierhy@gmail.com</h5>
						<a href='mailto:skierhy@gmail.com'>
							Envíame un correo Electrónico
						</a>
					</article>

					<article className='contact__option'>
						<BsWhatsapp className='contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>+52 1 (222) 878 0487</h5>
						<a href='https://api.whatsapp.com/send?phone=5212228780487'>
							Envíame un mensaje por WhatsApp
						</a>
					</article>

					<article className='contact__option'>
						<RiMessengerLine className='contact__option-icon' />
						<h4>Facebook</h4>
						<h5>Leonardo Naje</h5>
						<a href='https://m.me/leonardoa239/'>
							Envíame mensaje por privado en Facebook
						</a>
					</article>
				</div>
				{/* formulario */}
				<form ref={formRef} onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Nombre completo'
						name='name'
						required
					/>
					<input
						type='email'
						placeholder='Tu correo electrónico'
						name='email'
						required
					/>
					<textarea
						placeholder='Tu mensaje'
						rows='7'
						name='message'
						required
					></textarea>
					<button type='submit' className='btn btn-primary'>
						Enviar Mensaje
					</button>
					{message && (
						<span>Gracias, responderé lo antes posible</span>
					)}
				</form>
			</div>
		</section>
	);
};
