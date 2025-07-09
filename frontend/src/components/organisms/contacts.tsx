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
				className='w-[130px] h-[50px] bg-[#000]
				mx-auto rounded-2xl flex items-center justify-between hover:bg-white/10'
			>
				<div
					className='w-[70%] mx-auto flex items-center
				justify-between'
				>
					<SiGithub size={30} />
					<p>Github</p>
				</div>
			</div>

			{/* telegram */}
			<div className='w-[130px] mx-auto h-[50px] flex justify-center items-center gap-2 rounded-2xl bg-blue-700 mt-2 hover:bg-blue-900'>
				<SiTelegram size={30} />
				<p>Telegram</p>
			</div>
		</div>
	)
}
