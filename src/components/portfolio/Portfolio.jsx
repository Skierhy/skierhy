import './portfolio.css';
import { portfolioInfo } from '../../helpers/portfolio-info';
export const Portfolio = () => {
	return (
		<>
			<section id='portfolio'>
				<h5>Mis proyectos recientes</h5>
				<h2>Portafolio</h2>

				<div className='container portfolio__container'>
					{portfolioInfo.map(({ id, image, title, github, demo }) => {
						return (
							<article className='portfolio__item' key={id}>
								<div className='portfolio__item-image'>
									<img
										src={image}
										alt={`proyecto imagen numero:${id}`}
									/>
								</div>
								<h3>{title}</h3>
								<div className='portfolio__item-cta'>
									<a
										href={github}
										className='btn'
										target='_blank'
										rel='noreferrer'
									>
										Github
									</a>
									<a
										href={demo}
										className='btn btn-primary'
										target='_blank'
										rel='noreferrer'
										style={
											demo === ''
												? { display: 'none' }
												: {}
										}
									>
										Demo
									</a>
								</div>
							</article>
						);
					})}
				</div>
				<br />
				<h5>Los demás proyectos esta en mi GitHub</h5>
				<h2>
					<a
						href='https://github.com/Skierhy'
						target='_blank'
						rel='noreferrer'
					>
						Link de mi GitHub
					</a>
				</h2>
			</section>
		</>
	);
};
