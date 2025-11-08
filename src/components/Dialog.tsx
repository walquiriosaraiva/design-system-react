import * as React from 'react'
import { useTheme } from '../hooks/useTheme'
import { tokens } from '../tokens/tokens'

interface DialogProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer
}) => {
  const { isDark } = useTheme()
  const theme = isDark ? tokens.colors.dark : tokens.colors.light

  if (!isOpen) return null

  const style = {
    '--color-background': theme.background,
    '--color-text': theme.secondaryText,
    '--color-overlay': 'rgba(0, 0, 0, 0.5)',
    '--color-border': theme.ghostBorder
  } as React.CSSProperties

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
    // allow Enter or Space to trigger the same behaviour as click for accessibility
    if (e.key === 'Enter' || e.key === ' ') {
      // Prevent default for space so the page doesn't scroll
      e.preventDefault()
      onClose()
    }
    // also allow Escape to close
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--color-overlay)]"
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
      role="button"
      tabIndex={0}
      style={style}
    >
      <div className="bg-[color:var(--color-background)] text-[color:var(--color-text)] rounded-lg shadow-xl w-full max-w-md p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[color:var(--color-text)] opacity-60 hover:opacity-100"
          aria-label="Close dialog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
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
        </button>

        {/* Dialog content */}
        <div className="space-y-4">
          {title && (
            <h2 className="text-xl font-semibold leading-6 text-[color:var(--color-text)]">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-sm text-[color:var(--color-text)] opacity-80">{description}</p>
          )}
          {children && <div className="mt-4 text-[color:var(--color-text)]">{children}</div>}
        </div>

        {/* Footer */}
        {footer && <div className="mt-6 flex justify-end gap-3">{footer}</div>}
      </div>
    </div>
  )
}
