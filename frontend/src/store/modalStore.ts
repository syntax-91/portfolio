import { makeAutoObservable } from 'mobx'

class ModalStore {
	isOpen = false

	title = ''
	msg = ''

	constructor() {
		makeAutoObservable(this)
	}

	setIsOpen(value: boolean) {
		this.isOpen = value
	}

	run(title: string, msg: string) {
		;(this.isOpen = true), (this.title = title), (this.msg = msg)
	}
}

export const modalStore = new ModalStore()
