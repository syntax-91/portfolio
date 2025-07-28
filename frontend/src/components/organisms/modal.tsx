import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { themeConfig } from '../../shared/configs/themeConfig'
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

function Modal({ titleBtn = 'хорошо', theme = 'dark' }: ModalProps) {
	//
	const handleClick = () => {
		modalStore.close()
	}

	return (
		<div
			className={clsx(
				`// 
			//
			${s[theme + '_c']}
			${s['modal-container']}  
		`
			)}
		>
			<div //
				style={{
					background: themeConfig.themes.dark.bb,
				}}
				className={` fn  
				${s[theme]} ${s['modal']}
				${modalStore.isClosing === true && 'scale-up'}`}
			>
				<p className='text-center'>{modalStore.title}</p>

				<p className='text-center max-w-[95%] py-2'>{modalStore.msg}</p>

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

export default observer(Modal)
