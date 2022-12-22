import { HeaderSocials } from './HeaderSocials';
import { CTA } from './CTA';
// import ME from '../../assets/me.png';
import './header.css';

// este componente es el principal del header el cual incluye el cta y los socials
export const Header = () => {
	return (
		<>
			<header>
				<div className='container header__container'>
					<h5>Hola Soy</h5>
					<h1>Luis Leonardo Nolasco</h1>
					<h5 className='text-light'>Front-end Developer</h5>
					<CTA />
					<HeaderSocials />

					{/* <div className='me'>
						<img src={ME} alt='mi foto' />
					</div> */}
					<a href='#contact' className='scroll__down'>
						Ir hasta abajo
					</a>
				</div>
			</header>
		</>
	);
};
