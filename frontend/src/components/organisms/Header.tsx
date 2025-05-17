import { Logo } from '../molecules/Logo'

export function Header() {
	return (
		<header className='w-[80%] mx-auto my-5 flex justify-between'>
			<Logo />

			<div className='flex gap-20'>
				<a>...</a>
				<a>...</a>
				<a>...</a>
			</div>
		</header>
	)
}
