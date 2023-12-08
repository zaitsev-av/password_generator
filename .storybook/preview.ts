import type { Preview } from '@storybook/react'
import '@fontsource/jacques-francois'
import '../src/styles/index.scss'
import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: '#051f30' },
      light: { ...themes.normal, appBg: '#fffdfd' },
    },
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
