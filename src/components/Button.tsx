import clsx from 'clsx'
import * as React from 'react'
import { useTheme } from '../hooks/useTheme'
import { tokens } from '../tokens/tokens'
import { getContrastColor } from '../utils/color'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  isLoading?: boolean
  children?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  isLoading = false,
  children,
  ...props
}) => {
  const { isDark } = useTheme()
  const theme = isDark ? tokens.colors.dark : tokens.colors.light

  const baseStyles =
    'px-4 py-2 rounded-md font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm'

  const variantStyles = {
    primary: clsx('border', {
      'bg-[color:var(--color-primary)] text-[color:var(--color-primaryText)] border-transparent hover:opacity-90': true
    }),
    secondary: clsx('border', {
      'bg-[color:var(--color-secondary)] text-[color:var(--color-secondaryText)] hover:bg-opacity-80': true
    }),
    ghost: clsx('border', {
      'border-[color:var(--color-ghostBorder)] text-[color:var(--color-ghostText)] hover:bg-opacity-10': true
    })
  }

  // compute readable text colors dynamically based on the background color tokens
  const computedPrimaryText = getContrastColor(theme.primary)
  const computedSecondaryText = getContrastColor(theme.secondary)
  // for ghost, use the border color as the basis for contrast
  const computedGhostText = getContrastColor(theme.ghostBorder || theme.ghostText || theme.primary)

  const style = {
    '--color-primary': theme.primary,
    '--color-primaryText': computedPrimaryText,
    '--color-secondary': theme.secondary,
    '--color-secondaryText': computedSecondaryText,
    '--color-ghostBorder': theme.ghostBorder,
    '--color-ghostText': computedGhostText
  } as React.CSSProperties

  return (
    <button
      className={clsx(baseStyles, variantStyles[variant])}
      style={style}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? 'Carregando...' : children}
    </button>
  )
}
