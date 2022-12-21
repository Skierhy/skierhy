import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

export const Experience = () => {
	return (
		<>
			<section id='experience'>
				<h5>Mis habilidades</h5>
				<h2>Mi experiencia</h2>

				<div className='container experience__container'>
					<div className='experience__frontend'>
						<h3>Front-End Development</h3>
						<div className='experience__content'>
							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>HTML</h4>
									<small className='text-light'>Medio</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>CSS</h4>
									<small className='text-light'>Medio</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>SASS</h4>
									<small className='text-light'>Medio</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>JavaScript</h4>
									<small className='text-light'>Medio</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>React</h4>
									<small className='text-light'>Medio</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>Bootstrap</h4>
									<small className='text-light'>Medio</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>Angular</h4>
									<small className='text-light'>Bajo</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>TypeScript</h4>
									<small className='text-light'>Bajo</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>Redux</h4>
									<small className='text-light'>Bajo</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>Jest</h4>
									<small className='text-light'>Bajo</small>
								</div>
							</article>
						</div>
					</div>

					{/* backend */}

					<div className='experience__backend'>
						<h3>Back-End Development</h3>
						<div className='experience__content'>
							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>PHP</h4>
									<small className='text-light'>Medio</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>Node JS</h4>
									<small className='text-light'>bajo</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>Express JS</h4>
									<small className='text-light'>Bajo</small>
								</div>
							</article>

							<article className='experience__details'>
								<BsPatchCheckFill className='experience__details-icon' />
								<div>
									<h4>MongoDB</h4>
									<small className='text-light'>Bajo</small>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
