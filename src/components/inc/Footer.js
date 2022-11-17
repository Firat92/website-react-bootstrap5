import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<section className='bg-dark text-white p-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-4'>
						<h6>Company Info</h6>
						<hr />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Asperiores officiis dignissimos sint culpa, excepturi blanditiis
							tempora voluptates voluptatum deserunt quos.
						</p>
					</div>
					<div className='col-md-4'>
						<h6>Quick Links</h6>
						<hr />
						<div>
							<Link to='/' className='text-decoration-none '>
								Home
							</Link>
						</div>
						<div>
							<Link to='/about' className='text-decoration-none '>
								About Us
							</Link>
						</div>
						<div>
							<Link to='/contact' className='text-decoration-none '>
								Contact Us
							</Link>
						</div>
						<div>
							<Link to='/' className='text-decoration-none '>
								Blog
							</Link>
						</div>
					</div>
					<div className='col-md-4'>
						<h6>Contact Information</h6>
						<hr />
						<div>
							<p>random street, random city, Random Country</p>
						</div>
						<div>
							<p>random phone number: 123456789</p>
						</div>
						<div>
							<p>example@example.com</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
