import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { estate } from 'assets/images';
// import { Button } from 'components/widgets/Buttons';
// import NavBarLinks from './NavBarLinks';

const NavBar = () => {
	const activeStyle = { color: 'red' };
	const [open, setOpen] = useState(false);
	return (
		<nav>
			<div className='flex items-center font-semibold justify-around'>
				<div className='z-50 md:w-auto w-full flex justify-between gap-2'>
					<img src={estate} alt='logo' width={60} height={60} />
					<p className='pt-4 text-xl'>Real Paradise</p>
					<div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
						<ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
					</div>
				</div>
				<ul className='md:flex hidden items-center gap-8 text-xl font-normal'>
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/'
							className='py-7 px-3 inline-block'
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/Buy'
							className='py-7 px-3 inline-block'
						>
							Buy
						</NavLink>
					</li>
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/Rent'
							className='py-7 px-3 inline-block'
						>
							Rent
						</NavLink>
					</li>
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/Sell'
							className='py-7 px-3 inline-block'
						>
							New Developments
						</NavLink>
					</li>
					{/* <NavBarLinks /> */}
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/Contact'
							className='py-7 px-3 inline-block'
						>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/Account'
							className='py-7 px-3 inline-block'
						>
							Account
						</NavLink>
					</li>
				</ul>
				<div className='flex justify-between gap-4'>
					<button className='bg-white text-black rounded-full py-3 px-8 text-xl font-semibold'>
						<Link to='/SignIn'>Sign In</Link>
					</button>
					<button className='bg-white text-black rounded-full py-3 px-8 text-xl font-semibold'>
						<Link to='/SignUp'>Sign Up</Link>
					</button>
				</div>
				{/* Mobile nav */}
				<ul
					className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
				>
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/'
							className='py-7 px-3 inline-block'
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/Buy'
							className='py-7 px-3 inline-block'
						>
							Buy
						</NavLink>
					</li>
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/Rent'
							className='py-7 px-3 inline-block'
						>
							Rent
						</NavLink>
					</li>
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/Sell'
							className='py-7 px-3 inline-block'
						>
							Sell
						</NavLink>
					</li>
					{/* <NavBarLinks /> */}
					<li>
						<NavLink
							activeStyle={activeStyle}
							to='/Contact'
							className='py-7 px-3 inline-block'
						>
							Contact
						</NavLink>
					</li>
					<div className='py-5'>{/* <Button /> */} </div>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
