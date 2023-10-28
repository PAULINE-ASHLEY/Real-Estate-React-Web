import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { PopularDetail } from 'components/layout/Detail';
function PopularDetailView() {
	return (
		<PageWrapper>
			<div>
				<h2 className='font-semibold text-black text-2xl pt-10 px-20'>
					House Details
				</h2>
			</div>
			<div className='px-20 pb-10'>
				<PopularDetail />
			</div>
		</PageWrapper>
	);
}

export default PopularDetailView;
