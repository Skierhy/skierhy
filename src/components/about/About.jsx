import './about.css';
import ME from '../../assets/sobre-mi.jpg';
import { AboutCard } from './AboutCard';
import { aboutCards, aboutInfo } from '../../helpers/about-info';

export const About = () => {
	return (
		<>
			<section id='about'>
				<h5>Acerca</h5>
				<h2>de mi</h2>
				<div className='container about__container'>
					<div className='about__me'>
						<div className='about__me-image'>
							<img
								src={ME}
								alt='foto sobre mi'
								className='about__me-photo'
							/>
						</div>
					</div>

					<div className='about__content'>
						<div className='about__cards'>
							{aboutCards.map((card) => {
								return (
									<AboutCard
										key={aboutCards.id}
										card={card}
									/>
								);
							})}
						</div>

						<p>{aboutInfo.description}</p>

						<a href='#contact' className='btn btn-primary'>
							Contáctame
						</a>
					</div>
				</div>
			</section>
		</>
	);
};
