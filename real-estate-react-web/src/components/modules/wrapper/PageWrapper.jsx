import React from 'react';
import PropTypes from 'prop-types';
import { PageNavBar } from 'components/modules/navBars';

function PageWrapper({ children }) {
	return (
		<div className='relative'>
			<nav className='py-2 text-white bg-black'>
				<div>
					<PageNavBar />
				</div>
			</nav>

			<main>
				<div className='min-h-[75vh] box-border w-full'>{children}</div>
			</main>
		</div>
	);
}

PageWrapper.propTypes = {
	children: PropTypes.any,
};

export default PageWrapper;
