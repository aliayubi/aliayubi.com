import Image from 'next/image';
import logo from '../public/logotest.png';
let Header = () => {
	return (
		<div className='container'>
			<div className='flex'>
				<div className='logo'>
					<Image src={logo} alt='AliAyubi.com' />
				</div>
			</div>
		</div>
	);
};

export default Header;
