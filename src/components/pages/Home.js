import React from 'react';
import Slider from '../inc/Slider';
import Mv from './includes/Mv';
import Footer from '../inc/Footer';

const Home = () => {
	return (
		<div>
			<Slider />
			<section className='py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h4>Our Company</h4>
							<div className='underline mb-3'></div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
								earum distinctio reiciendis veritatis aspernatur tenetur impedit
								sint sed beatae, sit corrupti! Iusto aperiam fuga at.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
								earum distinctio reiciendis veritatis aspernatur tenetur impedit
								sint sed beatae, sit corrupti! Iusto aperiam fuga at.
							</p>
						</div>
					</div>
				</div>
			</section>
			<Mv />
			<section className='py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<h4>Our Services</h4>
						</div>
						<div className='col-md-4'>
							<div className='card shadow'>
								<div className='card-body'>
									<h4>Designing</h4>
									<div className='mb-3 sub-underline'></div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Iure earum distinctio reiciendis veritatis aspernatur
										tenetur impedit sint sed beatae, sit corrupti! Iusto aperiam
										fuga at.
									</p>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='card shadow'>
								<div className='card-body'>
									<h4>Development</h4>
									<div className='mb-3 sub-underline'></div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Iure earum distinctio reiciendis veritatis aspernatur
										tenetur impedit sint sed beatae, sit corrupti! Iusto aperiam
										fuga at.
									</p>
								</div>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='card shadow'>
								<div className='card-body'>
									<h4>Digital Marketing</h4>
									<div className='mb-3 sub-underline'></div>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Iure earum distinctio reiciendis veritatis aspernatur
										tenetur impedit sint sed beatae, sit corrupti! Iusto aperiam
										fuga at.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
};

export default Home;
