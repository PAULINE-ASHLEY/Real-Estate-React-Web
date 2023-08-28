import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Rent } from 'components/layout/Rent';
function RentView() {
	return (
		<PageWrapper>
			<div>
				<h2 className='font-semibold text-black text-3xl pt-10 px-10'>
					Looking for a house to rent ?
				</h2>
			</div>
			<div className='grid grid-cols-4 px-10 gap-x-4 pb-10'>
				<Rent />
			</div>
		</PageWrapper>
	);
}

export default RentView;
