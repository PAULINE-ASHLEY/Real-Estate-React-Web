import React from 'react';
import { Link } from 'react-router-dom';
import {
	FacebookButton,
	InstagramButton,
	LinkedInButton,
	TwitterButton,
	YoutubeButton,
} from 'components/widgets/Buttons';

function PageFooter() {
	return (
		<>
			<div className='text-white grid grid-cols-3'>
				<div className='text-center text-white'>
					<p className='font-semibold text-2xl mt-5 pb-6'>REAL PARADISE</p>
					<p className='pb-2 text-lg'>5040 Real Paradise, Kenya</p>
					<p className='pb-2 text-lg'>P.O Box 20227 - 00100</p>
					<p className='pb-2 text-lg'>Nairobi Kenya</p>
					<p className='pb-2 text-lg'>+2547000000</p>
					<p className='pb-2 text-lg'>info@realparadise.com</p>
				</div>
				<div className='text-center'>
					<p className='font-semibold text-2xl mt-5 pb-6 text-white'>
						NAVIGATE
					</p>
					<div className='text-lg'>
						<Link to='/'>Home</Link> <br />
						<Link to='/'>News</Link> <br />
						<Link to='/'>Careers</Link> <br />
						<Link to='/Contact'>Contact</Link> <br />
						<Link to='/'>Get In Touch</Link> <br />
					</div>
				</div>
				<div>
					<div className='text-center'>
						<p className='font-semibold text-2xl mt-5 pb-6 text-white'>
							EXPLORE
						</p>
						<div className='text-lg'>
							<Link to='/Buy'>Buy</Link> <br />
							<Link to='/Rent'>Rent</Link> <br />
							<Link to='/'>Developments</Link> <br />
							<Link to='/'>Services</Link> <br />
							<Link to='/'>Privacy Policy</Link> <br />
						</div>
					</div>
				</div>
			</div>

			<div className='text-white justify-center mt-10'>
				<div>
					<div className='flex gap-x-4 justify-center pb-6'>
						<InstagramButton />
						<LinkedInButton />
						<FacebookButton />
						<TwitterButton />
						<YoutubeButton />
					</div>
					<p className='font-semibold text-2xl mt-5 pb-6 text-white text-center'>
						REAL PARADISE
					</p>
					<p className='text-white font-normal pb-6 text-2xl text-center'>
						© Copyright 2023 REAL PARADISE All rights reserved.
					</p>
				</div>
			</div>
		</>
	);
}

export default PageFooter;
