import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

export const HeaderSocials = () => {
	return (
		<>
			<div className='header__socials'>
				<a
					href='https://www.linkedin.com/in/luis-leonardo-nolasco-najera-skierhy'
					target='_blank'
					rel='noreferrer'
				>
					<BsLinkedin />
				</a>
				<a
					href='https://github.com/Skierhy'
					target='_blank'
					rel='noreferrer'
				>
					<FaGithub />
				</a>
			</div>
		</>
	);
};
