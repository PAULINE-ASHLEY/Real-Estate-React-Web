import React from 'react';
import { ContactUsForm } from 'components/layout/Forms';
import { people, people2, people4, people5, back } from 'assets/images';
import { Link } from 'react-router-dom';
import {
	FacebookButton,
	InstagramButton,
	LinkedInButton,
	TwitterButton,
	YoutubeButton,
} from 'components/widgets/Buttons';

function ContactView() {
	return (
		<div>
			<div className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row h-full'>
				<div className='md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-black py-10'>
					<Link to='/'>
						<div className='pt-8 px-6 flex gap-x-4 items-center'>
							<img src={back} alt='Back Button' width={30} />
							<p className='text-white text-lg font-semibold'>Back</p>
						</div>
					</Link>
					<div className='mt-20 px-20 md:px-10'>
						<h2 className='font-400 text-white text-2xl pb-6'>
							Want to talk to us anytime ?
						</h2>
						<div className='flex gap-x-2 items-center'>
							<img src={people} alt='Real Estate Logo' width={30} />
							<p className='text-lg text-white'>
								{' '}
								Opening Hours (8:00 AM - 5:00 PM) , Monday to Friday
							</p>
						</div>
						<div className='flex gap-x-2 items-center'>
							<img src={people2} alt='Real Estate Logo' width={30} />
							<p className='text-lg text-white'> +2547000000</p>
						</div>
						<div className='flex gap-x-2 items-center'>
							<img src={people4} alt='Real Estate Logo' width={30} />
							<p className='text-lg text-white'> info@realparadise.com</p>
						</div>
						<div className='flex gap-x-2 items-center'>
							<img src={people5} alt='Real Estate Logo' width={30} />
							<p className='text-lg text-white'> 5040 Real Paradise, Kenya</p>
						</div>
						<h2 className='font-400 text-white text-lg pt-10 pb-4'>
							Follow us on our Social Media Channels
						</h2>
						<div className='flex gap-x-4'>
							<InstagramButton />
							<LinkedInButton />
							<FacebookButton />
							<TwitterButton />
							<YoutubeButton />
						</div>
					</div>
				</div>
				<div className='md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-10 lg:p-0 xl:p-0 2xl:p-0'>
					<ContactUsForm />
				</div>
			</div>
		</div>
	);
}

export default ContactView;
