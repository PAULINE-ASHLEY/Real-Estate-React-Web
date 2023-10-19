import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Rent } from 'components/layout/Rent';
import { Recent } from 'components/layout/Recent';
function RentView() {
	return (
		<PageWrapper>
			<div className='flex'>
				<div className='w-[70%]'>
					<div>
						<h2 className='font-bold text-black text-2xl pt-10 px-10'>
							Looking for a house to rent ?
						</h2>
					</div>
					<div className='grid grid-cols-3 px-10 gap-x-4 pb-10'>
						<Rent />
					</div>
				</div>
				<div className='w-[30%]'>
					<div>
						<h2 className='font-bold text-black text-2xl pt-10'>
							Most Viewed Houses
						</h2>
					</div>
					<div className='grid grid-cols-1 gap-x-4 pb-10'>
						<Recent />
					</div>
				</div>
			</div>
		</PageWrapper>
	);
}

export default RentView;
