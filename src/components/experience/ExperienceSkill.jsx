import { BsPatchCheckFill } from 'react-icons/bs';
import { PropTypes } from 'prop-types';

export const ExperienceSkill = ({ info }) => {
	const { tecnologia, nivel } = info;
	return (
		<>
			<article className='experience__details'>
				<BsPatchCheckFill className='experience__details-icon' />
				<div>
					<h4>{tecnologia}</h4>
					<small className='text-light'>{nivel}</small>
				</div>
			</article>
		</>
	);
};

ExperienceSkill.propTypes = {
	info: PropTypes.object.isRequired,
};
