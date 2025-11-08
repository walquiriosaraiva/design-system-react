import { addons } from '@storybook/manager-api'
import { wsrDark, wsrLight } from './wsrTheme'

addons.setConfig({
  theme: wsrLight,
  darkTheme: wsrDark
})
