import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Button } from './Button'
import { Dialog } from './Dialog'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof Dialog>

const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleConfirm = () => {
    alert('Ação confirmada!')
    setIsOpen(false)
  }

  const handleCancel = () => {
    setIsOpen(false)
  }

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Abrir Diálogo</Button>
      <Dialog
        isOpen={isOpen}
        onClose={handleCancel}
        title="Confirmação"
        description="Tem certeza que deseja realizar esta ação? Esta ação não pode ser desfeita."
        footer={
          <>
            <Button variant="ghost" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={handleConfirm}>
              Confirmar
            </Button>
          </>
        }
      />
    </div>
  )
}

export const Default: Story = {
  render: () => <DialogDemo />
}

export const WithCustomContent: Story = {
  render: () => <WithCustomContentDemo />
}

export const Simple: Story = {
  render: () => <SimpleDemo />
}

const WithCustomContentDemo = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Abrir caixa de diálogo personalizada</Button>
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} title="Conteúdo Personalizado">
        <div className="space-y-4">
          <p>Esta é uma caixa de diálogo com conteúdo personalizado.</p>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter some text..."
          />
        </div>
      </Dialog>
    </div>
  )
}

const SimpleDemo = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Abrir caixa de diálogo simples</Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Simples Diálogo"
        description="Esta é uma caixa de diálogo simples com apenas um título e descrição."
        footer={
          <Button variant="primary" onClick={() => setIsOpen(false)}>
            Fechar
          </Button>
        }
      />
    </div>
  )
}
