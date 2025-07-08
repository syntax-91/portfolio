import { makeAutoObservable } from 'mobx'

class ModalStore {
	isOpen = false
	isClosing = false

	title = ''
	msg = ''

	constructor() {
		makeAutoObservable(this)
	}

	close() {
		this.isClosing = true

		setTimeout(() => {
			;(this.isOpen = false), (this.isClosing = false)
		}, 300)
	}

	run(title: string, msg: string) {
		;(this.isOpen = true), (this.title = title), (this.msg = msg)
	}
}

export const modalStore = new ModalStore()
