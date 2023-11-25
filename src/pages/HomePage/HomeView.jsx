import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import {
	Buy,
	Popular,
	Rent,
	Sell,
	WelcomeSection,
} from 'components/layout/Home';
import { Link } from 'react-router-dom';
import { Recent } from 'components/layout/Recent';

function HomeView() {
	return (
		<PageWrapper>
			<div>
				<div className='w-full'>
					<WelcomeSection />
				</div>

				<div className='flex flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
					<div className='lg:w-[50%] xl:w-[50%] 2xl:w-[50%] px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>
						<div className='flex items-center gap-x-10  pt-10 px-10'>
							<h2 className='font-bold text-black text-xl'>House To Rent</h2>
							<Link to='/Rent' className='font-bold text-red text-lg'>
								View All &gt;
							</Link>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 px-10 gap-x-4 pb-10'>
							<Rent />
						</div>
					</div>
					<div className='lg:w-[50%] xl:w-[50%] 2xl:w-[50%] px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>
						<div>
							<h2 className='font-bold text-black text-xl pt-10 px-10'>
								Most Popular Houses
							</h2>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-x-4 pb-10 px-10'>
							<Popular />
						</div>
					</div>
				</div>

				<div className='bg-black py-4 px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>
					<div className='flex items-center gap-x-10 pt-10 px-10'>
						<h2 className='font-bold text-white text-xl'>House to Buy</h2>
						<Link to='/Buy' className='font-bold text-white text-lg'>
							View All &gt;
						</Link>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 px-10 gap-x-4 pb-10'>
						<Buy />
					</div>
				</div>

				<div className='flex flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
					<div className='lg:w-[70%] xl:w-[70%] 2xl:w-[70%] px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0'>
						<div className='flex items-center gap-x-10  pt-10 px-10'>
							<h2 className='font-bold text-black text-xl'>New Developments</h2>
							<Link to='/Sell' className='font-bold text-red text-lg'>
								View All &gt;
							</Link>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 px-10 gap-x-4 pb-10'>
							<Sell />
						</div>
					</div>
					<div className='px-10 lg:px-2 lg:w-[30%] xl:w-[30%] 2xl:w-[30%]'>
						<div>
							<h2 className='font-bold text-black text-xl pt-10'>
								Most Viewed Houses
							</h2>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 gap-x-4 pb-10'>
							<Recent />
						</div>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
}

export default HomeView;
