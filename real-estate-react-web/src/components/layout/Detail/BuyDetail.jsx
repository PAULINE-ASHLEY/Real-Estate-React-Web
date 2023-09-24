import BuyData from 'database/BuyData';
import { React } from 'react';
import { useParams } from 'react-router-dom';
import { tick } from 'assets/images';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BuyDetail = () => {
	const { title } = useParams();
	const phoneRegExp =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
	const formik = useFormik({
		initialValues: {
			fullName: '',
			email: '',
			phoneNumber: '',
		},
		validationSchema: Yup.object({
			fullName: Yup.string()
				.min(3, 'Must be 3 characters or less')
				.required('Required'),
			email: Yup.string().email().required('Required'),
			phoneNumber: Yup.string()
				.min(10)
				.matches(phoneRegExp)
				.required('Required'),
		}),
		onSubmit: () => {
			console.log(formik.value);
		},
	});
	return (
		<>
			{BuyData.filter((desc) => desc.title === title).map((desc, id) => (
				<div key={id} className='grid grid-cols-2 gap-x-6 pt-8 text-justify'>
					<div className='px-4'>
						<img src={desc.image} alt={desc.title} className='w-full rounded' />
						<h1 className='text-3xl font-500 text-red pt-10'>
							For more information, fill out the form
						</h1>
						<form
							onSubmit={formik.handleSubmit}
							className='bg-black mt-6 rounded px-10 py-10'
						>
							<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
								<div className='mb-4'>
									<label
										htmlFor='firstName'
										className='text-white text-xl flex'
									>
										Full Name <b className='text-red text-xl'>*</b>
										{formik.touched.fullName && formik.errors.fullName ? (
											<div className='text-red text-xl ml-2'>
												{formik.errors.fullName}
											</div>
										) : null}
									</label>
									<input
										name='firstName'
										type='text'
										className='p-1.5 rounded border-black border-solid border-2 w-full'
										placeholder='Enter your First Name'
										onChange={formik.handleChange}
									/>
								</div>
							</div>

							<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
								<div className='mb-4'>
									<label htmlFor='email' className='text-white text-xl flex'>
										Email Address <b className='text-red text-xl'>*</b>
										{formik.touched.email && formik.errors.email ? (
											<div className='text-red text-xl ml-2'>
												{formik.errors.email}
											</div>
										) : null}
									</label>
									<input
										name='email'
										type='email'
										className='p-1.5 rounded border-black border-solid border-2 w-full'
										placeholder='Enter your Email Address'
										onChange={formik.handleChange}
									/>
								</div>
							</div>

							<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
								<div className='mb-4'>
									<label
										htmlFor='phoneNumber'
										className='text-white text-xl flex'
									>
										Phone Number <b className='text-red text-xl'>*</b>
										{formik.touched.phoneNumber && formik.errors.phoneNumber ? (
											<div className='text-red text-xl ml-2'>
												{formik.errors.phoneNumber}
											</div>
										) : null}
									</label>
									<input
										name='phoneNumber'
										type='tel'
										className='p-1.5 rounded border-black border-solid border-2 w-full'
										placeholder='Enter your Phone Number'
										onChange={formik.handleChange}
									/>
								</div>
							</div>

							<div className='grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 pb-4'>
								<div>
									<button
										type='submit'
										className='px-4 py-4 text-xl bg-white text-black rounded-full'
									>
										Submit
									</button>
								</div>
							</div>
						</form>
					</div>
					<div>
						<h2 className='font-semibold text-red text-3xl'>{desc.title}</h2>
						<h2 className='font-semibold text-black text-2xl pt-4'>Price:</h2>
						<p className='pt-2 text-xl font-400'>{desc.price}</p>
						<h2 className='font-semibold text-black text-2xl pt-4'>
							Description:
						</h2>
						<p className='py-4 text-xl'>{desc.description}</p>
						<h2 className='font-semibold text-black text-2xl pb-4'>
							Property Features:
						</h2>
						<div className='flex gap-x-6 items-center'>
							<p className='text-black text-xl'>
								<b>{desc.bed}</b> bed
							</p>
							<p className='text-black text-xl'>
								<b>{desc.bath}</b> bath
							</p>
							<p className='text-black text-xl'>
								<b>{desc.sqf}</b> sqft
							</p>
						</div>
						<h2 className='font-semibold text-black text-2xl py-4'>
							Amenities:
						</h2>
						<div className='grid grid-cols-3 text-xl'>
							<div>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Backup Generator
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Kids Playing Area
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									24 Hours Security
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Fully Equipped Gym
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Borehole
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									CCTV
								</p>
							</div>
							<div>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									24 Hours Security
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Gated Community
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Secured Gates
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Video Intercom
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Internet Ready
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Indoor Games Room
								</p>
							</div>
							<div>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Electric Fence
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Elevator
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									BBQ Area
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Heated Swimming Pool
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Cable TV Ready
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									Controlled Parking
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default BuyDetail;
