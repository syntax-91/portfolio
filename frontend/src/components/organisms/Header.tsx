import { Logo } from '../molecules/Logo'
import { Nav } from '../molecules/nav'

export function Header() {
	return (
		<header className='w-[80%] mx-auto my-5 flex justify-between'>
			<Logo />

			<Nav />
		</header>
	)
}
