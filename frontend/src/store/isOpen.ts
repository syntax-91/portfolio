import { makeAutoObservable } from 'mobx'

class isOpenMenuMobile {
	isOpenMap = {
		menuMobile: false,
	}

	constructor() {
		makeAutoObservable(this)
	}

	setIsOpen(type: keyof typeof this.isOpenMap, value: boolean) {
		this.isOpenMap[type] = value
	}
}

export const isOpenStore = new isOpenMenuMobile()
