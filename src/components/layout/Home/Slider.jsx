import { useState, React } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
// import 'swiper/components/navigation/navigation.min.css';
// import 'swiper/components/pagination/pagination.min.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import {
	real,
	real1,
	real2,
	real3,
	real4,
	real5,
	real6,
	real7,
	real8,
} from 'assets/images';

function Slider() {
	const [Slides] = useState([
		{
			id: 1,
			image: real,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
		{
			id: 2,
			image: real1,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
		{
			id: 3,
			image: real2,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
		{
			id: 4,
			image: real3,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
		{
			id: 5,
			image: real4,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
		{
			id: 6,
			image: real5,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
		{
			id: 7,
			image: real,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
		{
			id: 8,
			image: real7,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
		{
			id: 9,
			image: real6,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
		{
			id: 10,
			image: real8,
			title: 'Runda Paradise Estate',
			price: 'Ksh.25 Million',
			bed: '4',
			bath: '4',
			sqf: '1,200',
		},
	]);
	return (
		<>
			<Swiper
				slidesPerView={4}
				spaceBetween={20}
				slidesPerGroup={7}
				loop={true}
				loopFillGroupWithBlank={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				navigation={true}
				modules={[Pagination, Navigation, Autoplay]}
				className='mySwiper'
			>
				{Slides.map((slide) => (
					<div key={slide.id}>
						<SwiperSlide>
							<div className='pt-8 text-justify'>
								<div>
									<img
										src={slide.image}
										alt={slide.title}
										className='w-full rounded'
									/>
								</div>
								<div className='pt-2'>
									<h2 className='font-400 text-red text-2xl'>{slide.title}</h2>
									<p className='pt-2 text-xl font-400'>{slide.price}</p>
									<div className='flex gap-x-6 items-center'>
										<p className='text-black text-xl'>
											<b>{slide.bed}</b> bed
										</p>
										<p className='text-black text-xl'>
											<b>{slide.bath}</b> bath
										</p>
										<p className='text-black text-xl'>
											<b>{slide.sqf}</b> sqft
										</p>
									</div>
									<div className='flex justify-between'>
										<div>
											<button className='px-4 py-2 text-lg bg-black rounded-full text-white mt-4'>
												<Link to='/'>View Details</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</div>
				))}
			</Swiper>
		</>
	);
}

export default Slider;
