import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { SellDetail } from 'components/layout/Detail';
function SellDetailView() {
	return (
		<PageWrapper>
			<div>
				<h2 className='font-semibold text-black text-3xl pt-10 px-20'>
					House Details
				</h2>
			</div>
			<div className='px-20 pb-10'>
				<SellDetail />
			</div>
		</PageWrapper>
	);
}

export default SellDetailView;
