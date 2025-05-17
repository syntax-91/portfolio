import { Contacts } from './components/organisms/contacts'
import { Header } from './components/organisms/Header'
import { Stack } from './components/organisms/Stack'
import { Wrapper } from './components/organisms/wrapper'

function App() {
	return (
		<div>
			<Header />
			<Wrapper />
			<Stack />
			<Contacts />
		</div>
	)
}

export default App
