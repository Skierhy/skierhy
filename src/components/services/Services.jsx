import './services.css';
import { BiCheck } from 'react-icons/bi';
export const Services = () => {
	return (
		<>
			<section id='services'>
				<h5>Mis</h5>
				<h2>Servicios</h2>

				<div className='container services__container'>
					<article className='service'>
						<div className='service__head'>
							<h3>Diseño UI/UX</h3>
						</div>

						<ul className='service__list'>
							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>

							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>

							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>

							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>
						</ul>
					</article>

					{/* web */}
					<article className='service'>
						<div className='service__head'>
							<h3>Desarrollo web</h3>
						</div>

						<ul className='service__list'>
							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>

							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>

							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>

							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>
						</ul>
					</article>

					{/* contenido */}
					<article className='service'>
						<div className='service__head'>
							<h3>Contenido</h3>
						</div>

						<ul className='service__list'>
							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>

							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>

							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>

							<li>
								<BiCheck className='service__list-icon' />
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit.
								</p>
							</li>
						</ul>
					</article>
				</div>
			</section>
		</>
	);
};
