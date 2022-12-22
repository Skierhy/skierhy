import { backEndInfo, frontEndInfo } from '../../helpers/experience-info';
import './experience.css';
import { ExperienceSkill } from './ExperienceSkill';

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
							{frontEndInfo.map((info) => {
								return (
									<ExperienceSkill
										key={info.id}
										info={info}
									/>
								);
							})}
						</div>
					</div>

					{/* backend */}

					<div className='experience__backend'>
						<h3>Back-End Development</h3>
						<div className='experience__content'>
							{backEndInfo.map((info) => {
								return (
									<ExperienceSkill
										key={info.id}
										info={info}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
