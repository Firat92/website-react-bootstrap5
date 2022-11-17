import React from 'react';
import Mv from '../pages/includes/Mv';
import Footer from '../inc/Footer';

const About = () => {
	return (
		<div>
			<section className='py-4 text-center bg-primary'>
				<h1 className='text-white'>About Us</h1>
			</section>

			<section className='py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6'>
							<h4>About Our Company</h4>
							<div className='underline mb-3'></div>
							<p>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
								consequatur voluptates molestiae mollitia praesentium neque vero
								ipsum dolorem! Facilis, quo nihil dolorum explicabo tenetur
								commodi.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
								minus voluptates nesciunt ea, consequatur rem quas veniam enim
								tempora, tempore hic quis. Ipsam soluta, nulla a repellendus qui
								ipsa laborum voluptatum dolore eveniet? Consequatur sapiente
								quibusdam labore possimus! Culpa, labore.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
								minus voluptates nesciunt ea, consequatur rem quas veniam enim
								tempora, tempore hic quis. Ipsam soluta, nulla a repellendus qui
								ipsa laborum voluptatum dolore eveniet? Consequatur sapiente
								quibusdam labore possimus! Culpa, labore.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Mv />
			<Footer />
		</div>
	);
};

export default About;
