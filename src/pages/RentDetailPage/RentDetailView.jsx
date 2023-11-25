import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { RentDetail } from 'components/layout/Detail';
function RentDetailView() {
	return (
		<PageWrapper>
			<div>
				<h2 className='font-semibold text-black text-2xl pt-10 px-20'>
					House Details
				</h2>
			</div>
			<div className='px-4 md:px-10 lg:px-20 xl:px-20 2xl:px-20 pb-10'>
				<RentDetail />
			</div>
		</PageWrapper>
	);
}

export default RentDetailView;
