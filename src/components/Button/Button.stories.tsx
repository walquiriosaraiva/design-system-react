import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Inputs/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost']
    },
    isLoading: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button Primary'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button Secondary'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Button Ghost'
  }
}

export const Loading: Story = {
  args: {
    variant: 'primary',
    isLoading: true,
    children: 'Button'
  }
}

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Button Disabled'
  }
}
