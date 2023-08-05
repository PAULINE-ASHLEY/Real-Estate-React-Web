import { React } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { linkedin, google, facebook } from 'assets/icons';
import { Link } from 'react-router-dom';

function SignUpForm() {
	const strongPasswordRegex =
		/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid email address').required('Required'),
			password: Yup.string()
				.min(8)
				.required('Required')
				.matches(strongPasswordRegex),
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
			<h1 className='text-5xl text-center font-semibold text-black pb-10'>
				Create Your New Account
			</h1>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 px-10'>
				<div className='border-black border-solid border-2 rounded-full mb-4 bg-black'>
					<a
						href='#'
						rel='noreferrer'
						target='_blank'
						className='text-white flex justify-center items-center gap-x-2 p-2'
					>
						<img src={google} /> Continue with Google
					</a>
				</div>

				<div className='border-black border-solid border-2 rounded-full mb-4 bg-black'>
					<a
						href='#'
						rel='noreferrer'
						target='_blank'
						className='text-white flex justify-center items-center gap-x-2 p-2'
					>
						<img src={facebook} alt='LinkedIn Image' /> Continue with LinkedIn
					</a>
				</div>

				<div className='border-black border-solid border-2 rounded-full mb-4 p-2 bg-black'>
					<a
						href='#'
						rel='noreferrer'
						target='_blank'
						className='text-white flex justify-center items-center gap-x-2'
					>
						<img src={linkedin} alt='LinkedIn Image' /> Continue with LinkedIn
					</a>
				</div>

				<div className='text-center flex justify-between items-center py-8'>
					<div className='border-b border-black w-[80%] text-black'></div>{' '}
					<Link to='#' className='px-2 text-center text-black w-[20%] text-xl'>
						Or continue with
					</Link>
					<div className='border-b border-black w-[80%] text-black'></div>
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='fullName' className='text-black text-xl'>
						Full Name <b className='text-red text-xl'>*</b>
					</label>
					<input
						name='fullName'
						type='text'
						className='p-1.5 rounded-full border-black border-solid border-2 w-full'
						placeholder='Enter your Full Name'
						onChange={formik.handleChange}
					/>
					{formik.touched.fullName && formik.errors.fullName ? (
						<div className='text-red text-xl'>{formik.errors.fullName}</div>
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
					<label htmlFor='email' className='text-black text-xl'>
						Confirm Email Address <b className='text-red text-xl'>*</b>
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

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='password' className='text-black text-xl'>
						Password <b className='text-red text-xl'>*</b>
					</label>
					<input
						name='password'
						type='text'
						className='p-1.5 rounded-full border-black border-solid border-2 w-full'
						placeholder='Enter your Password'
						onChange={formik.handleChange}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className='text-red text-xl'>{formik.errors.password}</div>
					) : null}
				</div>
			</div>

			<div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
				<div className='px-10 mb-4'>
					<label htmlFor='password' className='text-black text-xl'>
						Confirm Password <b className='text-red text-xl'>*</b>
					</label>
					<input
						name='password'
						type='text'
						className='p-1.5 rounded-full border-black border-solid border-2 w-full'
						placeholder='Enter your Password'
						onChange={formik.handleChange}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className='text-red text-xl'>{formik.errors.password}</div>
					) : null}
				</div>
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

export default SignUpForm;
