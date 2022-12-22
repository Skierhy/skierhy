import { PropTypes } from 'prop-types';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

export const AboutCard = ({ card }) => {
	const { icon, title, description } = card;
	return (
		<>
			<article className='about__card'>
				{icon === 'FaAward' && <FaAward className='about__icon' />}
				{icon === 'FiUsers' && <FiUsers className='about__icon' />}
				{icon === 'VscFolderLibrary' && (
					<VscFolderLibrary className='about__icon' />
				)}
				<h5>{title} </h5>
				<small>{description}</small>
			</article>
		</>
	);
};

AboutCard.propTypes = {
	card: PropTypes.object.isRequired,
};
