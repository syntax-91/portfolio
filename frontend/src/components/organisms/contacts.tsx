import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'
import { SiGithub, SiTelegram } from 'react-icons/si'

export function Contacts() {
	const boxRef = useRef(null)

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger)

		gsap.fromTo(
			boxRef.current,
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				ease: 'power2.out',
				duration: 0.9,
				y: 0,
				//trigger
				scrollTrigger: {
					trigger: boxRef.current,
					start: 'top 90%',
					toggleActions: 'play none none none',
				},
			}
		)

		return () => ScrollTrigger.getAll().forEach(el => el.kill())
	}, [])

	return (
		//contacts
		<div
			ref={boxRef}
			className='mx-auto mt-40 text-center mb-20 cursor-pointer'
			id='Contacts'
		>
			<h3 className='mb-5'>Contacts</h3>

			{/* Github */}
			<div
				onClick={() => (location.href = 'https://github.com/syntax-91')}
				className='border border-[#444] w-[220px] h-[50px]
				mx-auto rounded-2xl flex items-center  hover:bg-white/5'
			>
				<div
					className='w-[40%] mx-auto flex items-center
				justify-between'
				>
					<SiGithub size={30} />
					<p>Github</p>
				</div>
			</div>

			{/* telegram */}
			<div
				onClick={() => (location.href = 'https://t.me/syntax_real')}
				className='border border-[#444] mt-1 w-[220px] h-[50px]
				mx-auto rounded-2xl flex items-center  hover:bg-white/5
				cursor-pointer'
			>
				<div
					className='w-[45%] mx-auto flex items-center
				justify-between gap-1.5'
				>
					<SiTelegram size={35} />
					<p>Telegram</p>
				</div>
			</div>
		</div>
	)
}
