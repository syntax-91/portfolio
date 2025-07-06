import { useEffect, useRef } from 'react'
import s from '../../shared/styles/modalStyles.module.css'
import { modalStore } from '../../store/modalStore'
import { Button } from '../atoms/Button'

export type TModal = 'info' | 'prompt' | 'error'

export interface ModalProps {
	/* shared */
	type?: TModal
	title?: string
	msg?: string
	titleBtn?: string
	theme?: 'light' | 'dark'
	autoClose?: boolean
	autoCloseDuration?: number
}

export function Modal({
	titleBtn = 'хорошо',
	theme = 'dark',
	autoClose = false,
	autoCloseDuration = 3000,
}: ModalProps) {
	//
	const handleClick = () => {
		modalStore.setIsOpen(false)
	}

	const refModalProgress = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (refModalProgress.current) {
			refModalProgress.current.style.setProperty(
				'--modalProgressDuration',
				`${autoCloseDuration}ms`
			)
		}

		let t: number

		t = setTimeout(() => modalStore.setIsOpen(false), autoCloseDuration)

		return () => clearTimeout(t)
	}, [])

	return (
		<div
			className={`// 
			// fn
			${s[theme + '_c']}
			${s['modal-container']}  
		`}
		>
			<div //
				className={`
				${s[theme]} ${s['modal']}
				${autoClose && s['progress_']}
				`}
			>
				<div
					ref={refModalProgress} //modalProgress
					className={s.progressBar}
				/>

				<p className='text-center'>{modalStore.title}</p>

				<p className='text-center py-2'>{modalStore.msg}</p>

				<Button
					theme={theme}
					onClick={handleClick}
					label={titleBtn}
					location='center'
					max_w={100}
				/>
			</div>
			{/**/}
		</div>
	)
}
