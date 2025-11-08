import { Alert } from '@components/Alert'
import { Dialog } from '@components/Dialog'
import { Input } from '@components/Input'
import { useState } from 'react'
import { Button } from './components/Button'

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleConfirm = () => {
    // Sua lógica de confirmação aqui
    setIsDialogOpen(false)
  }

  const handleCancel = () => {
    // Sua lógica de cancelamento aqui
    setIsDialogOpen(false)
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '12px', padding: '32px' }}>
        <Button variant="primary">Botão Primário</Button>
        <Button variant="secondary">Botão Secundário</Button>
        <Button variant="ghost">Botão Ghost</Button>
        <Button variant="primary" isLoading>
          Carregando
        </Button>
      </div>
      <div style={{ display: 'flex', gap: '12px', padding: '32px' }}>
        <Alert variant="success" title="Sucesso!">
          Esta é uma mensagem de sucesso.
        </Alert>
        <Alert variant="error" title="Erro!">
          Esta é uma mensagem de erro.
        </Alert>
        <Alert variant="warning" title="Aviso!">
          Esta é uma mensagem de aviso.
        </Alert>
        <Alert variant="info" title="Informação!">
          Esta é uma mensagem informativa.
        </Alert>
      </div>

      <div style={{ display: 'flex', gap: '12px', padding: '32px' }}>
        <Button onClick={() => setIsDialogOpen(true)}>Diálogo</Button>
        <Dialog
          isOpen={isDialogOpen}
          onClose={handleCancel}
          title="Título do Diálogo"
          description="Esta é a descrição do diálogo."
          footer={
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button variant="ghost" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleConfirm()
                }}
              >
                Confirmar
              </Button>
            </div>
          }
        >
          <p>Este é o conteúdo do diálogo.</p>
        </Dialog>
      </div>
      <div style={{ display: 'flex', gap: '12px', padding: '32px' }}>
        <Input label="Nome" placeholder="Digite seu nome" />

        <Input label="Preço" prefix="R$" placeholder="0,00" />
      </div>
    </>
  )
}

export default App
