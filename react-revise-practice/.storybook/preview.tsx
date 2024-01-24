import React from 'react'
import type { Preview } from '@storybook/react'
import 'tailwindcss/tailwind.css'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { withThemeFromJSXProvider } from '@storybook/addon-themes'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from '../src/materialTheme'
import { ModeProvider } from '../src/contexts/modeContext/modeProvider'

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
      <BrowserRouter>
        <ModeProvider>
          <Story {...context} />
        </ModeProvider>
      </BrowserRouter>
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
