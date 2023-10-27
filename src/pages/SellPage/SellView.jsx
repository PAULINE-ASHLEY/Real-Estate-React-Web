import React from 'react';
import { PageWrapper } from 'components/modules/wrapper';
import { Sell } from 'components/layout/Sell';
import { Recent } from 'components/layout/Recent';
function SellView() {
	return (
		<PageWrapper>
			<div className='flex'>
				<div className='w-[70%]'>
					<div>
						<h2 className='font-bold text-black text-xl pt-10 px-10'>
							Looking for a new development ?
						</h2>
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
		</PageWrapper>
	);
}

export default SellView;
