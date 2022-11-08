import Link from 'next/link';
let MenuItems = () => {
	return (
		<ul className='md:flex gap-5 '>
			<li>
				<Link href='/'>Home</Link>
			</li>
			<li>
				<Link href='/about'>About me</Link>
			</li>
		</ul>
	);
};
export default MenuItems;
