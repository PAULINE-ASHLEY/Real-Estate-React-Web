import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Buy } from 'components/layout/Buy';
import { Recent } from 'components/layout/Recent';
function BuyView() {
	return (
		<PageWrapper>
			<div className='flex flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
				<div className='lg:w-[70%] xl:w-[70%] 2xl:w-[70%]'>
					<div>
						<h2 className='font-bold text-black text-xl pt-10 px-10'>
							Looking for a house to buy ?
						</h2>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 px-10 gap-x-4 pb-10'>
						<Buy />
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
		</PageWrapper>
	);
}

export default BuyView;
