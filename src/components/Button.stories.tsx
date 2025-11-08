import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    isLoading: { control: 'boolean' },
    children: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'Botão Primário', variant: 'primary' } }
export const Secondary: Story = { args: { children: 'Botão Secundário', variant: 'secondary' } }
export const Ghost: Story = { args: { children: 'Botão Ghost', variant: 'ghost' } }
export const Loading: Story = {
  args: { children: 'Carregando…', variant: 'primary', isLoading: true }
}
