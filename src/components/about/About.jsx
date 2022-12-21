import './about.css';
import ME from '../../assets/sobre-mi.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

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
							<article className='about__card'>
								<FaAward className='about__icon' />
								<h5>Licenciatura </h5>
								<small>
									Ingeniería en Ciencias de la Computación
								</small>
							</article>

							<article className='about__card'>
								<FiUsers className='about__icon' />
								<h5>Cursos</h5>
								<small>5 Curso</small>
							</article>

							<article className='about__card'>
								<VscFolderLibrary className='about__icon' />
								<h5>Proyectos en GitHub</h5>
								<small>30+ Realizados</small>
							</article>
						</div>

						<p>
							Hola, Soy Leonardo, soy recién egresado de la
							universidad Benemérita Universidad Autónoma de
							Puebla, empezando en el desarrollo web en la parte
							de Front-end.
						</p>

						<a href='#contact' className='btn btn-primary'>
							Contáctame
						</a>
					</div>
				</div>
			</section>
		</>
	);
};
