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
				<div className='text-3xl text-center text-white font-bold'>
					<p>
						<b className='text-red'>Real Paradise </b>.Your Home.
						<b className='text-black'>Our Commitment.</b>
					</p>
				</div>
				<form onSubmit={formik.handleSubmit} className='rounded px-10 py-10'>
					<div className='grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-x-4 justify-center'>
						<div></div>
						<div>
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
						<div>
							<button
								type='submit'
								className='px-4 h-10 text-base bg-black text-white rounded-full font-semibold'
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
