import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef } from 'react'
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

	// handlers
	const handleAnimeList = () => {
		window.location.href = 'https://anime-list-rust.vercel.app/'
	}

	const handleNano = () => {
		modalStore.run('не доступно', 'проект пока что не доступен..')
	}

	const handleUIkit = () => {
		location.href = 'https://github.com/syntax-91/syntax.UIkit'
	}

	const handleToolBox = () => {
		window.location.href = 'https://github.com/syntax-91/toolBox'
	}

	return (
		<div id='projects' ref={boxRef} className='py-10 m-10'>
			<h2 className='text-center'>Projects</h2>
			<br />

			<div className='flex overflow-x-auto lg:justify-center'>
				<Card
					title='Anime list'
					w={200}
					h={400}
					description='работает рендеринг аниме, сохранение, поиск'
					handleClick={handleAnimeList}
				/>

				<Card
					title='Nano'
					w={200}
					h={400}
					handleClick={handleNano}
					description='свободный мессенджер для коммуникаций (в разработке)'
				/>

				<Card
					title='syntax.UIkit'
					w={200}
					h={400}
					handleClick={handleUIkit}
					description='старый проект, есть button, input, modal, + GSAP анимаций'
				/>

				<Card
					title='toolBox'
					w={200}
					h={400}
					handleClick={handleToolBox}
					description='разные инструменты для разработчиков'
				/>
			</div>
		</div>
	)
}
