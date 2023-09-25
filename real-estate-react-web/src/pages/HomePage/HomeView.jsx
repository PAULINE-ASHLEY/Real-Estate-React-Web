import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Buy, Rent, Sell, WelcomeSection } from 'components/layout/Home';
import { Link } from 'react-router-dom';

function HomeView() {
	return (
		<PageWrapper>
			<div>
				<div className='w-full'>
					<WelcomeSection />
				</div>
				<div className='px-10'>
					<div className='flex items-center gap-x-10  pt-10 px-10'>
						<h2 className='font-semibold text-black text-2xl'>House to Rent</h2>
						<Link to='/Rent' className='font-400 text-red text-xl'>
							View All &gt;
						</Link>
					</div>
					<div className='grid grid-cols-2 px-10 gap-x-4 pb-10'>
						<Rent />
					</div>
				</div>
				<div className='bg-black px-10 py-4'>
					<div className='flex items-center gap-x-10  pt-10 px-10'>
						<h2 className='font-semibold text-white text-2xl'>House to Buy</h2>
						<Link to='/Buy' className='font-400 text-white text-xl'>
							View All &gt;
						</Link>
					</div>
					<div className='grid grid-cols-4 px-10 gap-x-4 pb-10'>
						<Buy />
					</div>
				</div>
				<div>
					<div className='flex items-center gap-x-10  pt-10 px-10'>
						<h2 className='font-semibold text-black text-2xl'>
							New Developments
						</h2>
						<Link to='/Sell' className='font-400 text-red text-xl'>
							View All &gt;
						</Link>
					</div>
					<div className='grid grid-cols-3 px-10 gap-x-4 pb-10'>
						<Sell />
					</div>
				</div>
			</div>
		</PageWrapper>
	);
}

export default HomeView;
