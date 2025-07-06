import { observer } from 'mobx-react-lite'
import { Contacts } from './components/organisms/contacts'
import { Header } from './components/organisms/Header'
import { Modal } from './components/organisms/modal'
import { Projects } from './components/organisms/Projects'
import { Stack } from './components/organisms/Stack'
import { Wrapper } from './components/organisms/wrapper'
import { modalStore } from './store/modalStore'

function App() {
	return (
		<div className='relative'>
			{modalStore.isOpen == true && <Modal />}
			<Header />
			<Wrapper />
			<Stack />
			<Projects />
			<Contacts />
		</div>
	)
}

export default observer(App)
