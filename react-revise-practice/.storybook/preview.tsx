import { defaultTheme } from '../src/materialTheme'
import type { Preview } from '@storybook/react'
import 'tailwindcss/tailwind.css'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'

import { ModeProvider } from '../src/contexts/modeContext/modeProvider'
import React from 'react'

/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      dark: defaultTheme(true),
      light: defaultTheme(false)
    },
    defaultTheme: 'dark',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline
  }),

  // Decorator for providing the mode (you may need to adjust the actual implementation)
  (Story, context) => {
    return (
      <ModeProvider>
        <Story {...context} />
      </ModeProvider>
    )
  }
]

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
