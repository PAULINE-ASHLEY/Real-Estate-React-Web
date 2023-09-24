import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { BuyDetail } from 'components/layout/Detail';
function BuyDetailView() {
	return (
		<PageWrapper>
			<div>
				<h2 className='font-semibold text-black text-3xl pt-10 px-20'>
					House Details
				</h2>
			</div>
			<div className='px-20 pb-10'>
				<BuyDetail />
			</div>
		</PageWrapper>
	);
}

export default BuyDetailView;
