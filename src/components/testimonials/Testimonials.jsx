import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const data = [
	{
		id: 1,
		link: 'https://www.linkedin.com',
		name: 'Luis',
		role: 'Full-Stack Web Developer',
		test: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 2,
		link: 'https://www.linkedin.com',
		name: 'Luis',
		role: 'Full-Stack Web Developer',
		test: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
	{
		id: 3,
		link: 'https://www.linkedin.com',
		name: 'Luis',
		role: 'Full-Stack Web Developer',
		test: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
	},
];

export const Testimonials = () => {
	return (
		<section id='testimonials'>
			<h5>Feedback from my peers</h5>
			<h2>Testimonials</h2>
			<Swiper
				className='container testimonials__container'
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{data.map((data) => (
					<SwiperSlide className='testimonial' key={data.id}>
						<div className='client__avatar'>
							<a href={data.link}>
								<BsLinkedin />
							</a>
						</div>
						<h5 className='client__name'>{data.name}</h5>
						<small className='client__review'>{data.test}</small>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};
