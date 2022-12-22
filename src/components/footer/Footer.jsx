import './footer.css';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

export const Footer = () => {
	return (
		<footer>
			<a href='#home' className='footer__logo'>
				Skierhy
			</a>
			<ul className='permalinks'>
				<li>
					<a href='#home'>Inicio</a>
				</li>
				<li>
					<a href='#about'>Sobre mi</a>
				</li>
				<li>
					<a href='#experience'>Habilidad</a>
				</li>
				<li>
					<a href='#portfolio'>Portafolio</a>
				</li>
				<li>
					<a href='#testimonials'>Testimonios</a>
				</li>
				<li>
					<a href='#contact'>Contacto</a>
				</li>
			</ul>
			<div className='footer__socials'>
				<a
					href='https://www.linkedin.com/in/luis-leonardo-nolasco-najera-skierhy'
					target='_blank'
					rel='noreferrer'
				>
					<BsLinkedin />
				</a>
				<a
					href='https://github.com/Skierhy'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithub />
				</a>
			</div>
			<div className='footer__copyright'>
				<small>&copy; 2022. Todos los derechos reservados.</small>
			</div>
		</footer>
	);
};
