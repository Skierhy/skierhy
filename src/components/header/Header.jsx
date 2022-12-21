import { CTA } from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import { HeaderSocials } from './HeaderSocials';

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

					<div className='me'>
						<img src={ME} alt='mi foto' />
					</div>
					<a href='#contact' className='scroll__down'>
						Scroll hasta abajo
					</a>
				</div>
			</header>
		</>
	);
};
