import React from 'react';

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
						src='https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
						alt='First slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='400px'
						src='https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
						alt='Second slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='400px'
						src='https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
						alt='Third slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='400px'
						src='https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
						alt='Fourth slide'
					/>
				</div>
				<div className='carousel-item'>
					<img
						className='d-block w-100'
						height='400px'
						src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
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
