import '../src/index.css'
import { wsrDark, wsrLight } from './wsrTheme'

// Storybook expects the darkMode parameter to have `light` and `dark` keys
// and `current` should be 'light' or 'dark'. We'll wire our themes there
// so the toolbar toggle and docs follow the selected theme.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  backgrounds: {
    // keep the user-facing names, but the dark-mode addon controls themes
    options: [
      { name: 'claro', value: '#f8fafc' },
      { name: 'escuro', value: '#0f172a' }
    ]
  },
  docs: {
    // default docs theme (dark docs will be applied by the darkMode addon)
    theme: wsrLight
  },
  darkMode: {
    // valid values: 'light' | 'dark'
    current: 'light',
    // provide both themes so the toggle works and docs reflect the mode
    light: wsrLight,
    dark: wsrDark,
    stylePreview: true
  },
  options: {
    // show roots will group stories by their first slash segment
    showRoots: true,
    storySort: {
      order: ['Getting started', 'Components', 'Customization', '*']
    }
  }
}

export const globals = {
  // set the default background option name
  backgrounds: 'claro',
  // set the default dark mode value (toolbar uses 'light'|'dark')
  darkMode: 'light'
}
