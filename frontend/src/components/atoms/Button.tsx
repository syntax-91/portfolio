import s from '../../shared/styles/btnStyles.module.css'
type BtnType = 'button' | 'submit' | 'reset'
export interface BtnProps {
	label?: string
	type?: BtnType
	onClick?: () => void
	w?: number

	style?: 'укажите свои кастомные типы, и опишите в css' | 'default'

	location?: 'start' | 'center' | 'end'
	theme?: 'dark' | 'light'
	isBlock?: boolean
	max_w?: number
}

export function Button({
	label = 'text',
	type = 'button',
	style = 'default',
	location = 'start',
	theme = 'dark',
	isBlock = true,
	max_w = 80,
	w = 300,
	...rest
}: BtnProps) {
	//

	return (
		<div
			className={`${isBlock ? `flex w-[100%]` : 'inline-flex'}

			/*----------*/

			${location === 'start' && 'justify-start'}
			${location === 'center' && 'justify-center'}
			${location === 'end' && 'justify-end'}
	  	`}
		>
			<button
				style={{ width: w, maxWidth: `${max_w}%` }} //
				className={` ${s[style]} ${s[theme]} `}
				onClick={rest.onClick}
			>
				{label}
			</button>
		</div>
	)
}
