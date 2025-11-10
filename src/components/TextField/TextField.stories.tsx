import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'

const meta = {
  title: 'Components/Inputs/TextField',
  component: TextField,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard']
    },
    size: {
      control: 'select',
      options: ['small', 'medium']
    },
    error: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    fullWidth: {
      control: 'boolean'
    },
    multiline: {
      control: 'boolean'
    }
  }
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder'
  }
}

export const Filled: Story = {
  args: {
    label: 'Filled',
    variant: 'filled',
    placeholder: 'Placeholder'
  }
}

export const Standard: Story = {
  args: {
    label: 'Standard',
    variant: 'standard',
    placeholder: 'Placeholder'
  }
}

export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
    placeholder: 'Placeholder'
  }
}

export const WithHelperText: Story = {
  args: {
    label: 'Email',
    helperText: 'Enter your email address',
    placeholder: 'example@email.com'
  }
}

export const Error: Story = {
  args: {
    label: 'Email',
    error: true,
    helperText: 'This field is required',
    placeholder: 'example@email.com'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    placeholder: 'Placeholder'
  }
}

export const Multiline: Story = {
  args: {
    label: 'Multiline',
    multiline: true,
    rows: 4,
    placeholder: 'Enter your message...'
  }
}

export const WithStartAdornment: Story = {
  args: {
    label: 'Phone',
    startAdornment: '📞',
    placeholder: '+55 11 99999-9999'
  }
}

export const WithEndAdornment: Story = {
  args: {
    label: 'Password',
    type: 'password',
    endAdornment: '👁️',
    placeholder: 'Enter password'
  }
}

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    fullWidth: true,
    placeholder: 'This input takes full width'
  },
  decorators: [
    Story => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    )
  ]
}
