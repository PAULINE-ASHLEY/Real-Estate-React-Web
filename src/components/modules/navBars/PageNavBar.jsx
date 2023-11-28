import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { estate, menu } from 'assets/images';
// import { Button } from 'components/widgets/Buttons';
// import NavBarLinks from './NavBarLinks';

const NavBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav>
			<div className='flex items-center font-semibold justify-around mx-4 md:mx-10 lg:mx-0 xl:mx-0 2xl:mx-0'>
				<div className='z-50 lg:w-auto w-full flex justify-between gap-2'>
					<img src={estate} alt='logo' width={60} height={60} />
					<p className='pt-4 text-lg'>Real Paradise</p>
					<div className='text-3xl lg:hidden' onClick={() => setOpen(!open)}>
						<img
							src={menu}
							alt='logo'
							name={`${open ? 'close' : 'menu'}`}
							className='pt-4'
						/>
					</div>
				</div>
				<ul className='lg:flex hidden items-center gap-8 text-base font-normal'>
					<li>
						<NavLink to='/' className='py-7 px-3 inline-block'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/Buy' className='py-7 px-3 inline-block'>
							Buy
						</NavLink>
					</li>
					<li>
						<NavLink to='/Rent' className='py-7 px-3 inline-block'>
							Rent
						</NavLink>
					</li>
					<li>
						<NavLink to='/Sell' className='py-7 px-3 inline-block'>
							New Developments
						</NavLink>
					</li>
					{/* <NavBarLinks /> */}
					<li>
						<NavLink to='/Contact' className='py-7 px-3 inline-block'>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink to='/Account' className='py-7 px-3 inline-block'>
							Account
						</NavLink>
					</li>
				</ul>
				<div className='lg:flex hidden justify-between gap-4'>
					<button className='bg-white text-black rounded-full px-4 h-10 text-base font-semibold'>
						<Link to='/SignIn'>Sign In</Link>
					</button>
					<button className='bg-white text-black rounded-full px-4 h-10 text-base font-semibold'>
						<Link to='/SignUp'>Sign Up</Link>
					</button>
				</div>
				{/* Mobile nav */}
				<ul
					className={`
        lg:hidden bg-black text-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
				>
					<li>
						<NavLink to='/' className='py-7 px-3 inline-block'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to='/Buy' className='py-7 px-3 inline-block'>
							Buy
						</NavLink>
					</li>
					<li>
						<NavLink to='/Rent' className='py-7 px-3 inline-block'>
							Rent
						</NavLink>
					</li>
					<li>
						<NavLink to='/Sell' className='py-7 px-3 inline-block'>
							Sell
						</NavLink>
					</li>
					{/* <NavBarLinks /> */}
					<li>
						<NavLink to='/Contact' className='py-7 px-3 inline-block'>
							Contact
						</NavLink>
					</li>
					<div>
						<button className='bg-white text-black rounded-full px-4 h-10 text-base font-semibold'>
							<Link to='/SignIn'>Sign In</Link>
						</button>{' '}
						<br /> <br />
						<button className='bg-white text-black rounded-full px-4 h-10 text-base font-semibold'>
							<Link to='/SignUp'>Sign Up</Link>
						</button>
					</div>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
