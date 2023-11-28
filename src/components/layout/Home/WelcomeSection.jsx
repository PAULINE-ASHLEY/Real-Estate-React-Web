import React from 'react';
import { background } from 'assets/images';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function WelcomeSection() {
	const formik = useFormik({
		initialValues: {
			Search: '',
		},
		validationSchema: Yup.object({
			Search: Yup.string().min(3, 'Must be 3 characters or less'),
		}),
		onSubmit: () => {
			console.log(formik.value);
		},
	});
	return (
		<>
			<div
				style={{ backgroundImage: `url(${background})` }}
				className='bg-cover pt-100px pb-250px'
			>
				<div className='text-2xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl text-center text-white font-semibold'>
					<p>Real Paradise. Your Home. Our Commitment.</p>
				</div>
				<form onSubmit={formik.handleSubmit} className='rounded px-20 py-10'>
					<div className='flex flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col gap-y-4 justify-center items-center'>
						<div className='w-[70%]'>
							<input
								name='Search'
								type='text'
								className='rounded-full border-white border-solid border-2 w-full p-2 text-sm'
								placeholder='Search for a house to rent, buy or a new development'
								onChange={formik.handleChange}
							/>
							{formik.touched.fullName && formik.errors.fullName ? (
								<div className='text-red text-base ml-2'>
									{formik.errors.fullName}
								</div>
							) : null}
						</div>
						<div className='w-[30%] flex justify-center'>
							<button
								type='submit'
								className='px-10 h-10 text-base bg-black text-white rounded-full font-semibold'
							>
								Search
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default WelcomeSection;
