import { OptionsNav } from './optionsNav'

export function Menu() {
	return (
		<div className='w-[100%] h-[100vh] bg-[rgba(0,0,0,0.2)] backdrop-blur-2xl fixed z-10 top-0 p-10'>
			<OptionsNav />
		</div>
	)
}
