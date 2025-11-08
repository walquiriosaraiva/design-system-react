import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...'
  }
}

export const WithLabel: Story = {
  args: {
    label: 'Nome',
    placeholder: 'Digite seu nome'
  }
}

export const WithHelperText: Story = {
  args: {
    label: 'Senha',
    type: 'password',
    placeholder: 'Digite sua senha',
    helperText: 'A senha deve ter pelo menos 8 caracteres'
  }
}

export const WithError: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    value: 'email@invalido',
    error: 'Email inválido',
    variant: 'error'
  }
}

export const WithSuccess: Story = {
  args: {
    label: 'Email',
    placeholder: 'Digite seu email',
    value: 'email@valido.com',
    variant: 'success',
    helperText: 'Email disponível'
  }
}

export const WithIcons: Story = {
  args: {
    label: 'Pesquisar',
    placeholder: 'Buscar...',
    leftIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    rightIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    )
  }
}

export const WithPrefixSuffix: Story = {
  args: {
    label: 'Preço',
    placeholder: '0,00',
    prefix: 'R$',
    suffix: 'BRL'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Campo desabilitado',
    placeholder: 'Não é possível editar',
    disabled: true,
    value: 'Valor desabilitado'
  }
}

export const FullWidth: Story = {
  args: {
    label: 'Endereço',
    placeholder: 'Digite seu endereço completo',
    fullWidth: true
  }
}
