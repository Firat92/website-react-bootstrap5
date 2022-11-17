import React from 'react';
import Slide1 from '../images/fantasy_phoenix-wallpaper.jpg';
import Slide2 from '../images/moon_12-wallpaper.jpg';
import Slide3 from '../images/halo_4_2013-wallpaper.jpg';
import Slide4 from '../images/baby_yoda-wallpaper.jpg';
import Slide5 from '../images/transformers_4_optimus_prime-wallpaper.jpg';

const Slider = () => {
	return (
		<div
			id='carouselExampleIndicators'
			className='carousel slide'
			data-ride='carousel'
		>
			<ol className='carousel-indicators'>
				<li
					data-target='#carouselExampleIndicators'
					data-slide-to='0'
					className='active'
				></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='3'></li>
				<li data-target='#carouselExampleIndicators' data-slide-to='4'></li>
			</ol>
			<div className='carousel-inner'>
				<div className='carousel-item active'>
					<img
						className='d-block w-100'
						height='400px'
						src={Slide1}
						alt='First slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='400px'
						src={Slide2}
						alt='Second slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='400px'
						src={Slide3}
						alt='Third slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='400px'
						src={Slide4}
						alt='Fourth slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='400px'
						src={Slide5}
						alt='Fifth slide'
					/>
				</div>
			</div>
			<a
				className='carousel-control-prev'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='prev'
			>
				<span className='carousel-control-prev-icon' aria-hidden='true'></span>
				<span className='sr-only'>Previous</span>
			</a>
			<a
				className='carousel-control-next'
				href='#carouselExampleIndicators'
				role='button'
				data-slide='next'
			>
				<span className='carousel-control-next-icon' aria-hidden='true'></span>
				<span className='sr-only'>Next</span>
			</a>
		</div>
	);
};

export default Slider;
