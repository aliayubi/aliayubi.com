'use client';
import MenuItems from '../components/layout/MenuItems';
import Image from 'next/image';
import logo from '../public/assets/images/ali-logo-white.png';
import { useState } from 'react';

let Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	return (
		<header className='container'>
			<nav className='flex justify-between items-center px-3 lg:pt-4 lg:px-10'>
				<div className='logo pt-3 md:pt-0 w-[50%] max-w-[235px] md:w-[30%] md:max-w-[220px]'>
					<Image src={logo} alt='AliAyubi.com' />
				</div>
				<div className='main-menu text-white'>
					<div className='hidden lg:flex pc-menu-items text-2xl'>
						<MenuItems />
					</div>
					<div className='mobile-menu lg:hidden md:flex' onClick={() => setMobileMenu(!mobileMenu)}>
						<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='h-7 w-7'>
							<path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
						</svg>
					</div>
				</div>
				<div className={mobileMenu ? 'd-flex inset-0 fixed translate-x-0 bg-white text-black w-screen h-full top-[10%] px-5 py-3 text-1xl lg:hidden' : 'hidden'}>
					<MenuItems />
				</div>
			</nav>
		</header>
	);
};

export default Header;
