import { React } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ContactUsForm() {
	const phoneRegExp =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			comment: '',
		},
		validationSchema: Yup.object({
			firstName: Yup.string()
				.min(3, 'Must be 3 characters or less')
				.required('Required'),
			lastName: Yup.string()
				.min(3, 'Must be 3 characters or less')
				.required('Required'),
			email: Yup.string().email().required('Required'),
			phoneNumber: Yup.string().min(10).matches(phoneRegExp),
			comment: Yup.string()
				.required('Required')
				.max(50, 'Must be 50 characters or less'),
		}),
		onSubmit: () => {
			console.log(formik.value);
		},
	});
	return (
		<form
			onSubmit={formik.handleSubmit}
			className='sm:py-20 md:py-20 lg:px-20 lg:py-20 xl:px-20 xl:py-20 2xl:px-20 2xl:py-20'
		>
			<h1 className='text-5xl text-center font-semibold text-black'>
				Ask Us Any Burning Question
			</h1>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='firstName' className='text-black text-xl'>
						First Name <b className='text-red text-xl'>*</b>
					</label>
					<input
						name='firstName'
						type='text'
						className='p-1.5 rounded-full border-black border-solid border-2 w-full'
						placeholder='Enter your First Name'
						onChange={formik.handleChange}
					/>
					{formik.touched.firstName && formik.errors.firstName ? (
						<div className='text-red text-xl'>{formik.errors.firstName}</div>
					) : null}
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='lastName' className='text-black text-xl'>
						Last Name <b className='text-red text-xl'>*</b>
					</label>
					<input
						name='lastName'
						type='text'
						className='p-1.5 rounded-full border-black border-solid border-2 w-full'
						placeholder='Enter your Last Name'
						onChange={formik.handleChange}
					/>
					{formik.touched.lastName && formik.errors.lastName ? (
						<div className='text-red text-xl'>{formik.errors.lastName}</div>
					) : null}
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='email' className='text-black text-xl'>
						Email Address <b className='text-red text-xl'>*</b>
					</label>
					<input
						name='email'
						type='email'
						className='p-1.5 rounded-full border-black border-solid border-2 w-full'
						placeholder='Enter your Email Address'
						onChange={formik.handleChange}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className='text-red text-xl'>{formik.errors.email}</div>
					) : null}
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='phoneNumber' className='text-black text-xl'>
						Phone Number
					</label>
					<input
						name='phoneNumber'
						type='tel'
						className='p-1.5 rounded-full border-black border-solid border-2 w-full'
						placeholder='Enter your Phone Number'
						onChange={formik.handleChange}
					/>
					{formik.touched.phoneNumber && formik.errors.phoneNumber ? (
						<div className='text-red text-xl'>{formik.errors.phoneNumber}</div>
					) : null}
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 px-10 mb-8'>
				<label htmlFor='comment' className='text-black text-xl'>
					Message <b className='text-red text-xl'>*</b>
				</label>
				<textarea
					name='comment'
					type='textarea'
					className='p-1.5 rounded border-black border-solid border-2 w-full'
					rows='2'
					placeholder='Enter your Question (Max 250 words)'
					onChange={formik.handleChange}
				></textarea>
				{formik.touched.comment && formik.errors.comment ? (
					<div className='text-red text-xl'>{formik.errors.comment}</div>
				) : null}
			</div>

			<div className='grid sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 pb-4'>
				<div></div>
				<div className='flex justify-center'>
					<button
						type='submit'
						className='px-10 py-4 text-xl bg-black text-white rounded-full'
					>
						Send
					</button>
				</div>
				<div></div>
			</div>
		</form>
	);
}

export default ContactUsForm;
