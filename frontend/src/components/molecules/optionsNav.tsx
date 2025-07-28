import { isOpenStore } from '../../store/isOpen'

export function OptionsNav() {
	const handleClick = () => {
		isOpenStore.setIsOpen('menuMobile', false)
	}

	return (
		<div onClick={handleClick} className='block md:flex fn gap-10'>
			{/* ********* */}
			<a
				onClick={handleClick}
				className='block md:flex text-center'
				href='#About_me'
			>
				про меня
			</a>

			<a
				onClick={handleClick}
				className='block md:flex mt-4 md:mt-0 text-center'
				href='#Stack'
			>
				стек
			</a>

			<a
				onClick={handleClick}
				className='block md:flex mt-4 md:mt-0 text-center'
				href='#Contacts'
			>
				контакты
			</a>

			<a
				onClick={handleClick}
				className='block md:flex mt-4 md:mt-0 text-center'
				href='#projects'
			>
				проекты
			</a>

			<a
				onClick={handleClick}
				className='block md:hidden mt-4 md:mt-0 text-center'
			>
				закрыть
			</a>
		</div>
	)
}
