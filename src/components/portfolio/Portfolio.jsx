import './portfolio.css';
import IMG from '../../assets/portfolio1.jpg';

const data = [
	{
		id: 1,
		image: IMG,
		title: 'Un proyecto',
		github: 'https://github.com',
		demo: 'https://demo.com',
	},
	{
		id: 2,
		image: IMG,
		title: 'Un proyecto2',
		github: 'https://github.com',
		demo: 'https://demo.com',
	},
	{
		id: 3,
		image: IMG,
		title: 'Un proyecto3',
		github: 'https://github.com',
		demo: 'https://demo.com',
	},
];
export const Portfolio = () => {
	return (
		<>
			<section id='portfolio'>
				<h5>Mis proyectos recientes</h5>
				<h2>Portafolio</h2>

				<div className='container portfolio__container'>
					{data.map(({ id, image, title, github, demo }) => {
						return (
							<article className='portfolio__item' key={id}>
								<div className='portfolio__item-image'>
									<img src={image} alt={`image${id}`} />
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
									>
										Demo
									</a>
								</div>
							</article>
						);
					})}
				</div>
			</section>
		</>
	);
};
