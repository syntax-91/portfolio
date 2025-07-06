import { MdMenu } from 'react-icons/md'
import { isOpenStore } from '../../store/isOpen'
import { Logo } from '../molecules/Logo'
import { Nav } from '../molecules/nav'

export function Header() {
	const handleClickMenu = () => {
		if (isOpenStore.isOpenMap.menuMobile == true) {
			isOpenStore.setIsOpen('menuMobile', false)
		} else {
			isOpenStore.setIsOpen('menuMobile', true)
		}
	}

	return (
		<header className='w-[80%] mx-auto my-10 flex justify-between ltr'>
			<Logo />

			<div className='md:flex hidden'>
				<Nav />
			</div>

			<div onClick={handleClickMenu} className='cp flex md:hidden'>
				<MdMenu size={30} />
			</div>
		</header>
	)
}
