import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './shared/styles/animations.css'
import './shared/styles/globalAnimation.css'
import './shared/styles/globalStyles.css'
import './shared/styles/index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
)
