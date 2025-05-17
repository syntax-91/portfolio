export function Wrapper() {
	return (
		<div
			className='w-[70%] mx-auto flex justify-between
		items-center  mt-30 '
		>
			{/* block 1 */}
			<div
				className=' b1 w-[50%] text-center mx-auto || md:mx-0
			md:text-start '
			>
				<h3>
					Привет я <a>syntax</a>
				</h3>

				<p>
					- начинающий фронтенд-разработчик, сфокусированный на чистой
					архитектуре и переиспользуемости. Пишу UI через Atomic Design, строю
					интерфейсы из компонентов, легко масштабирующихся и поддерживаемых.
					Использую <a>React</a>, TailwindCSS, <a>GSAP</a> для анимаций и Axios
					для работы с API. Backend покрываю на <a>Express.js</a>, когда нужно
					быстро поднять сервер. Работаю с хуками, маршрутизацией через React
					Router DOM, оптимизирую через react.lazy и на основе лёгких библиотек.
				</p>
			</div>

			{/* block 2 */}
			<div className='bg-white/40 w-[300px] h-[300px] border border-white/1 rounded'>
				<img
					src='https://avatars.githubusercontent.com/u/190104690?s=400&u=77ff2428ce97bf7aa7fbef189de603b8a4da0a44&v=4'
					alt='я заебался'
				/>
			</div>
		</div>
	)
}
