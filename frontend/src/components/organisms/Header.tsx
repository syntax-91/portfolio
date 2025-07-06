import { Logo } from '../molecules/Logo'
import { Menu } from '../molecules/menu'
import { Nav } from '../molecules/nav'

export function Header() {
	return (
		<header className='w-[80%] mx-auto my-10 flex justify-between ltr'>
			<Logo />

			<div className='md:flex hidden'>
				<Nav />
			</div>

			<div className='flex md:hidden'>
				<Menu />
			</div>
		</header>
	)
}
