import type { Meta, StoryObj } from '@storybook/react'
import { Alert } from './Alert'

const meta: Meta<typeof Alert> = {
  title: 'Components/Feedback/Alert',
  component: Alert,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Alert>

export const Info: Story = {
  args: {
    variant: 'info',
    title: 'Informação',
    children: 'Este é um alerta informativo.'
  }
}

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Sucesso',
    children: 'Operação realizada com sucesso!'
  }
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Atenção',
    children: 'Verifique os dados antes de prosseguir.'
  }
}

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Erro',
    children: 'Ocorreu um problema inesperado.'
  }
}
