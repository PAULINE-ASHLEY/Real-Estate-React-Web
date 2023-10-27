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

				<div className='flex'>
					<div className='w-[50%]'>
						<div className='flex items-center gap-x-10  pt-10 px-10'>
							<h2 className='font-bold text-black text-xl'>House To Rent</h2>
							<Link to='/Rent' className='font-bold text-red text-lg'>
								View All &gt;
							</Link>
						</div>
						<div className='grid grid-cols-2 px-10 gap-x-4 pb-10'>
							<Rent />
						</div>
					</div>
					<div className='w-[50%]'>
						<div>
							<h2 className='font-bold text-black text-xl pt-10 px-10'>
								Most Popular Houses
							</h2>
						</div>
						<div className='grid grid-cols-2 gap-x-4 pb-10 px-10'>
							<Popular />
						</div>
					</div>
				</div>

				<div className='bg-black px-10 py-4'>
					<div className='flex items-center gap-x-10  pt-10 px-10'>
						<h2 className='font-bold text-white text-xl'>House to Buy</h2>
						<Link to='/Buy' className='font-bold text-white text-lg'>
							View All &gt;
						</Link>
					</div>
					<div className='grid grid-cols-4 px-10 gap-x-4 pb-10'>
						<Buy />
					</div>
				</div>

				<div className='flex'>
					<div className='w-[70%]'>
						<div className='flex items-center gap-x-10  pt-10 px-10'>
							<h2 className='font-bold text-black text-xl'>New Developments</h2>
							<Link to='/Sell' className='font-bold text-red text-lg'>
								View All &gt;
							</Link>
						</div>
						<div className='grid grid-cols-3 px-10 gap-x-4 pb-10'>
							<Sell />
						</div>
					</div>
					<div className='w-[30%]'>
						<div>
							<h2 className='font-bold text-black text-xl pt-10'>
								Most Viewed Houses
							</h2>
						</div>
						<div className='grid grid-cols-1 gap-x-4 pb-10'>
							<Recent />
						</div>
					</div>
				</div>
			</div>
		</PageWrapper>
	);
}

export default HomeView;
