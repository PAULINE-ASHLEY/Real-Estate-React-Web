import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Sell } from 'components/layout/Sell';
function SellView() {
	return (
		<PageWrapper>
			<div>
				<h2 className='font-semibold text-black text-3xl pt-10 px-10'>
					Looking for a new upcoming development ?
				</h2>
			</div>
			<div className='grid grid-cols-4 px-10 gap-x-4 pb-10'>
				<Sell />
			</div>
		</PageWrapper>
	);
}

export default SellView;
