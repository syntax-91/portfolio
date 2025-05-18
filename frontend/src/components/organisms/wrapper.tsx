import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export function Wrapper() {
	const wrapperRef = useRef(null)

	useEffect(() => {
		gsap.fromTo(
			wrapperRef.current,
			{ opacity: 0, y: -30 },
			{ opacity: 1, y: 0 }
		)
	}, [])

	return (
		<div
			ref={wrapperRef}
			className='w-[95%] md:w-[70%] mx-auto flex justify-between
		items-center  mt-30 gap-10 || opacity-0'
			id='About_me'
		>
			{/* block 1 */}
			<div
				className=' b1 w-[80%]  md:w-[50%]  text-center mx-auto || md:mx-0
			md:text-start '
			>
				<h2 className='text-2xl'>
					Привет я <i>syntax</i>
				</h2>

				<p>
					- начинающий фронтенд-разработчик, сфокусированный на чистой
					архитектуре и переиспользуемости. Пишу UI через Atomic Design, строю
					интерфейсы из компонентов, легко масштабирующихся и поддерживаемых.
					Использую <a>React</a>, TailwindCSS, <i>GSAP</i> для анимаций и Axios
					для работы с API. Backend покрываю на <i>Express.js</i>, когда нужно
					быстро поднять сервер. Работаю с хуками, маршрутизацией через{' '}
					<i>React Router DOM</i>, оптимизирую через <i>react.lazy</i> и на
					основе лёгких библиотек.
				</p>
			</div>

			{/* block 2 */}
			<div
				className='bg-white/40 w-[300px] h-[300px] border
			 border-black/90 rounded || hidden md:flex
			 '
			>
				<img
					src='https://avatars.githubusercontent.com/u/190104690?s=400&u=77ff2428ce97bf7aa7fbef189de603b8a4da0a44&v=4'
					alt='syntax'
				/>
			</div>
		</div>
	)
}
