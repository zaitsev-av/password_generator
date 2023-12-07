import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/jacques-francois'

import { App } from './app'

createRoot(document.getElementById('root')!).render(<App />)
