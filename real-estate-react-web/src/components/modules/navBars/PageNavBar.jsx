import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from 'assets/images';
// import { Button } from 'components/widgets/Buttons';
import NavBarLinks from './NavBarLinks';

const NavBar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav>
			<div className='flex items-center font-medium justify-around'>
				<div className='z-50 md:w-auto w-full flex justify-between'>
					<img src={logo} alt='logo' className='md:cursor-pointer h-20' />
					<div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
						<ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
					</div>
				</div>
				<ul className='md:flex hidden items-center gap-8 text-xl'>
					<li>
						<Link to='/' className='py-7 px-3 inline-block'>
							HOME
						</Link>
					</li>
					<NavBarLinks />
					<li>
						<Link to='/Contact' className='py-7 px-3 inline-block'>
							CONTACT
						</Link>
					</li>
				</ul>
				<div className='md:block hidden'>
					{/* <button className='bg-yellow text-black rounded-full py-3 px-6'>
						DONATE NOW
					</button> */}
				</div>
				{/* Mobile nav */}
				<ul
					className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? 'left-0' : 'left-[-100%]'}
        `}
				>
					<li>
						<Link to='/' className='py-7 px-3 inline-block'>
							Home
						</Link>
					</li>
					<NavBarLinks />
					<li>
						<Link to='/Contact' className='py-7 px-3 inline-block'>
							Contact
						</Link>
					</li>
					<div className='py-5'>{/* <Button /> */} </div>
				</ul>
			</div>
		</nav>
	);
};

export default NavBar;
