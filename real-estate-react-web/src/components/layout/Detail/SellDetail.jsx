import SellData from 'database/SellData';
import { React } from 'react';
import { useParams } from 'react-router-dom';
import { tick } from 'assets/images';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SellDetail = () => {
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
			{SellData.filter((desc) => desc.title === title).map((desc, id) => (
				<div key={id} className='grid grid-cols-2 gap-x-6 pt-8 text-justify'>
					<div className='px-4'>
						<img src={desc.image} alt={desc.title} className='w-full rounded' />
						{/* Agent Details */}
						<h1 className='text-2xl font-semibold text-red mt-10'>
							Agent Information
						</h1>
						<div className='flex flex-row mt-4 items-center gap-x-10 border-2 border-solid border-black px-10 py-10 rounded'>
							<img
								src={desc.AgentImage}
								alt={desc.AgentName}
								width={100}
								className='rounded-full'
							/>
							<div className='text-black text-2xl font-semibold'>
								<p>Name : {desc.AgentName}</p>
								<p>Contact: {desc.AgentNumber}</p>
								<p>Email Address: {desc.AgentEmail}</p>
							</div>
						</div>
						<h1 className='text-2xl font-500 text-black pt-10'>
							Send Developer a message to inquire about{' '}
							<b className='text-red'>{desc.title}</b> that costs{' '}
							<b className='text-red'>{desc.price}</b>
						</h1>
						<form
							onSubmit={formik.handleSubmit}
							className='bg-black mt-6 rounded px-10 py-10'
						>
							<div className='flex flex-row gap-x-4 pb-10'>
								<h1 className='text-2xl font-500 text-white'>
									Name: {desc.title}
								</h1>
								<h1 className='text-2xl font-500 text-white'>
									Price: {desc.price}
								</h1>
							</div>
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
										className='p-1.5 rounded-full border-black border-solid border-2 w-full'
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
										className='p-1.5 rounded-full border-black border-solid border-2 w-full'
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
										className='p-1.5 rounded-full border-black border-solid border-2 w-full'
										placeholder='Enter your Phone Number'
										onChange={formik.handleChange}
									/>
								</div>
							</div>

							<div className='grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 pb-4'>
								<div>
									<button
										type='submit'
										className='px-10 py-4 text-xl bg-white text-black rounded-full'
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
									{desc.Amenities1}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities2}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities3}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities4}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities5}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities6}
								</p>
							</div>
							<div>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities7}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities8}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities9}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities10}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities11}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities12}
								</p>
							</div>
							<div>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities13}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities14}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities15}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities16}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities17}
								</p>
								<p className='flex flex-row gap-x-4 pb-4'>
									<img src={tick} alt='' />
									{desc.Amenities18}
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default SellDetail;
