import React from 'react';
import { logo } from 'assets/images';
import { Link } from 'react-router-dom';
import {
	FacebookButton,
	InstagramButton,
	LinkButton,
	LinkedInButton,
	TwitterButton,
	YoutubeButton,
} from 'components/widgets/Buttons';

function PageFooter() {
	return (
		<>
			<div className='text-white grid grid-cols-3'>
				<div>
					<Link to='/' className='shrink-0 grow-0 rounded-full'>
						<img src={logo} width={150} height={150} alt='restaurant logo' />
					</Link>
				</div>
				<div>
					<h3 className='text-2xl mt-5 mb-2 text-white'>Navigate</h3>
					<div className='grid gap-2 grid-cols-2 mt-6'>
						<div className='flex flex-col'>
							<LinkButton to='/'>Home</LinkButton>
							<LinkButton to='/'>About Us</LinkButton>
						</div>

						<div className='flex flex-col'>
							<LinkButton to='/'>Blog</LinkButton>
							<LinkButton to='/'>Our Partners</LinkButton>
						</div>
					</div>
				</div>
				<div>
					<h3 className='text-2xl mt-5 mb-2 text-white'>Contact Us</h3>
					<p className='text-white'>
						5900 Balcones Drive STE 100 Austin, TX
						<br />
						78731, Austin, Texas, United States Of America
					</p>
					<p className='text-white'>
						<p className='text-white'>info@blackwomancan.com</p>
					</p>
					<h3 className='font-bold text-2xl mt-5 mb-2'>Get In Touch With Us</h3>
					<div className='flex gap-x-4'>
						<InstagramButton />
						<LinkedInButton />
						<FacebookButton />
						<TwitterButton />
						<YoutubeButton />
					</div>
				</div>
			</div>

			<div className='text-white grid grid-cols-3 w-full'>
				<div>
					<p className='text-white font-semibold pt-4'>
						© Copyright 2022 BWC All rights reserved.
					</p>
				</div>
				<div></div>
				<div></div>
			</div>
		</>
	);
}

export default PageFooter;
