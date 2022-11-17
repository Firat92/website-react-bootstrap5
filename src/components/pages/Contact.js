import React from 'react';
import Footer from '../inc/Footer';

const Contact = () => {
	return (
		<div>
			<section className='py-4 text-center bg-primary'>
				<h1 className='text-white'>Contact Us</h1>
			</section>

			<section className='py-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-8'>
							<iframe
								title='place'
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200066.14127160623!2d26.939632172082664!3d38.417591675337846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd862a762cacd%3A0x628cbba1a59ce8fe!2zxLB6bWly!5e0!3m2!1str!2str!4v1668690779624!5m2!1str!2str'
								width='100%'
								height='450'
								// style='border:0;'
								// allowfullscreen=''
								loading='lazy'
								// referrerpolicy='no-referrer-when-downgrade'
							></iframe>
							<h4>About Our Company</h4>
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
						<div className='col-md-4'>
							<div className='card shadow'>
								<div className='card-body py-4'>
									<h4>Send Your Idea</h4>
									<div className='underline mb-3'></div>
									<form action=''>
										<label htmlFor=''>Name</label>
										<input
											type='text'
											placeholder='Enter your Name'
											className='form-control mb-3'
										/>
										<label htmlFor=''>Email</label>
										<input
											type='text'
											placeholder='Enter your Email'
											className='form-control mb-3'
										/>
										<label htmlFor=''>Message</label>
										<textarea rows='3' className='form-control mb-3'></textarea>
										<button type='submit' className='btn btn-primary w-100'>
											Submit
										</button>
									</form>
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

export default Contact;
