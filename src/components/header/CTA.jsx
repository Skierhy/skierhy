import CV from '../../assets/Luis_Leonardo_Nolasco_Najera_Front-end_Jr.pdf';

// en este componente se usa para descargar el CV y ir a la sección de contacto
export const CTA = () => {
	return (
		<>
			<div className='cta'>
				<a href={CV} download className='btn'>
					Descargar CV
				</a>
				<a href='#contact' className='btn btn-primary'>
					Contáctame
				</a>
			</div>
		</>
	);
};
