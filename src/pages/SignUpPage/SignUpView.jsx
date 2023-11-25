import React from 'react';
import { home, back } from 'assets/images';
import { SignUpForm } from 'components/layout/Forms';
import { Link } from 'react-router-dom';
function SignUpView() {
	return (
		<div className='flex flex-col lg:flex-row xl:flex-row 2xl:flex-row h-full'>
			<div className='lg:w-[50%] xl:w-[50%] 2xl:w-[50%] bg-black py-10'>
				<Link to='/'>
					<div className='pt-8 px-6 flex gap-x-4 items-center'>
						<img src={back} width={30} alt='Back Button' />
						<p className='text-white text-base font-semibold'>Back</p>
					</div>
				</Link>
				<div className='flex justify-center items-center mt-20'>
					<img src={home} width={300} alt='Real Estate Logo' />
				</div>
				<div>
					<p className='text-white text-2xl font-semibold text-center'>
						Real Paradise
					</p>
				</div>
			</div>
			<div className='lg:w-[50%] xl:w-[50%] 2xl:w-[50%] p-10 lg:p-0 xl:p-0 2xl:p-0'>
				<SignUpForm />
			</div>
		</div>
	);
}

export default SignUpView;
