import { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import { OptionsNav } from './optionsNav'

export function Menu() {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		if (isOpen) {
			setIsOpen(false)
		} else {
			setIsOpen(true)
		}
	}

	return (
		<div>
			<div onClick={handleClick} className='cp'>
				<MdMenu size={30} />
			</div>

			{isOpen && (
				<div
					onClick={handleClick}
					className='w-[130px] h-[130px] border border-[#444]
					fixed right-[30px] top-[20px] z-2 rounded-2xl
					flex justify-center items-center || fn'
				>
					<OptionsNav />
				</div>
			)}
		</div>
	)
}
