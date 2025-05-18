import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { Logo } from '../molecules/Logo'
import { Menu } from '../molecules/menu'
import { Nav } from '../molecules/nav'

export function Header() {
	const headerRef = useRef(null)

	useEffect(() => {
		gsap.fromTo(headerRef.current, { opacity: 0, x: -30 }, { opacity: 1, x: 0 })
	}, [])
	return (
		<header
			ref={headerRef}
			className='w-[80%] mx-auto my-10 flex justify-between opacity-0
			'
		>
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
