import '@fontsource/jacques-francois'

import { createRoot } from 'react-dom/client' //eslint-disable-line

import { App } from './app'

import './styles/index.scss' //eslint-disable-line

createRoot(document.getElementById('root')!).render(<App />)
