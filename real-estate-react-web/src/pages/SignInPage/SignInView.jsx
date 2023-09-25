import React from 'react';
import { back, estate, home } from 'assets/images';
import { SignInForm } from 'components/layout/Forms';
import { Link } from 'react-router-dom';
function SignInView() {
	return (
		<div className='grid grid-cols-2 h-screen'>
			<div className='w-[50%] bg-black'>
				<Link to='/'>
					<div className='pt-8 px-6 flex gap-x-4 items-center'>
						<img src={back} alt='Back Button' />
						<img src={estate} alt='Real Estate Logo' />
						<p className='text-white text-2xl font-semibold'>Real Paradise</p>
					</div>
				</Link>
				<div className='flex justify-center items-center mt-20'>
					<img src={home} alt='Real Estate Logo' />
				</div>
			</div>
			<div className='w-[50%]'>
				<SignInForm />
			</div>
		</div>
	);
}

export default SignInView;
