import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'
import { projectsConfig } from '../../shared/configs/projectsConfig'
import { modalStore } from '../../store/modalStore'
import { Card } from '../molecules/Card'

export function Projects() {
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
					start: 'top 55%',
					toggleActions: 'play none none none',
				},
			}
		)

		return () => ScrollTrigger.getAll().forEach(el => el.kill())
	}, [])

	const handleProject = (available: boolean, link: string) => {
		if (available) {
			location.href = `${link}`
		} else {
			modalStore.run('ошибка', 'проект недоступен или в разработке')
		}
	}

	return (
		<div id='projects' ref={boxRef} className='py-10 m-10'>
			<h2 className='text-center'>Projects</h2>
			<br />

			<div className='flex overflow-x-auto lg:justify-center '>
				{projectsConfig.map((e, idx) => (
					<div key={idx}>
						<Card
							title={e.title}
							description={e.description}
							handleClick={() => handleProject(e.available, e.link || '')}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
