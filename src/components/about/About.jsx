import './about.css';
import ME from '../../assets/sobre-mi (1).jpg';
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
								<h5>Experience</h5>
								<small>3+ años de trabajo</small>
							</article>

							<article className='about__card'>
								<FiUsers className='about__icon' />
								<h5>Clientes</h5>
								<small>3+ clientes</small>
							</article>

							<article className='about__card'>
								<VscFolderLibrary className='about__icon' />
								<h5>Proyectos</h5>
								<small>10+ Completados</small>
							</article>
						</div>

						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Obcaecati autem quia, eligendi deserunt neque
							iusto dolorem reprehenderit molestias. Error
							repellendus illo praesentium! Ipsa aut
							necessitatibus, quis quidem veritatis modi
							assumenda?
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
