import {
	SiAxios,
	SiCss3,
	SiExpress,
	SiHtml5,
	SiJavascript,
	SiNodedotjs,
	SiPnpm,
	SiReact,
	SiReacthookform,
	SiReactrouter,
	SiTypescript,
} from 'react-icons/si'
import { themeConfig } from '../../shared/configs/themeConfig'

export function Stack() {
	return (
		<div className='mx-auto text-center mt-20 rtl' id='Stack'>
			<h3>Stack</h3>

			<div
				style={{
					background: themeConfig.themes.dark.bb,
				}}
				className='flex flex-wrap gap-10 w-[90%] md:w-[70%] justify-between mx-auto mt-10 py-5 px-5 rounded-4xl'
			>
				<div
					className='transition-all hover:scale-110
				|| hidden lg:flex overflow-x-auto'
				>
					<SiHtml5 size={50} />
				</div>

				<div
					className='transition-all hover:scale-110
				|| hidden lg:flex'
				>
					<SiCss3 size={50} />
				</div>

				<div className='transition-all hover:scale-110'>
					<SiJavascript size={50} />
				</div>

				<div className='transition-all hover:scale-110'>
					<SiTypescript size={50} />
				</div>

				<div className='transition-all hover:scale-110'>
					<SiReact size={50} />
				</div>

				<div className='transition-all hover:scale-110'>
					<SiNodedotjs size={50} />
				</div>

				<div
					className='transition-all hover:scale-110
				|| hidden lg:flex'
				>
					<SiExpress size={50} />
				</div>

				<div className='transition-all hover:scale-110'>
					<SiReactrouter size={50} />
				</div>

				<div className='transition-all hover:scale-110'>
					<SiAxios size={50} />
				</div>

				<div
					className='transition-all hover:scale-110
				|| hidden lg:flex'
				>
					<SiReacthookform size={50} />
				</div>

				<div className='transition-all hover:scale-110'>
					<SiPnpm size={50} />
				</div>
			</div>
		</div>
	)
}
