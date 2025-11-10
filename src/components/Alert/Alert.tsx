import { useTheme } from '@hooks/useTheme'
import { tokens } from '@tokens/tokens'
import clsx from 'clsx'
import * as React from 'react'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info'
  title?: string
}

export const Alert: React.FC<AlertProps> = ({ variant = 'info', title, children, ...props }) => {
  const { isDark } = useTheme()
  const theme = isDark ? tokens.colors.dark : tokens.colors.light

  const style = {
    '--color-success': theme.success,
    '--color-error': theme.error,
    '--color-warning': theme.warning,
    '--color-info': theme.info,
    '--color-text': theme.primaryText
  } as React.CSSProperties

  const base =
    'flex items-start gap-3 px-4 py-3 rounded-md text-sm border-l-4 shadow-sm transition-all'

  const variants = {
    success:
      'bg-[color:var(--color-success)]/10 border-[color:var(--color-success)] text-[color:var(--color-success)]',
    error:
      'bg-[color:var(--color-error)]/10 border-[color:var(--color-error)] text-[color:var(--color-error)]',
    warning:
      'bg-[color:var(--color-warning)]/10 border-[color:var(--color-warning)] text-[color:var(--color-warning)]',
    info: 'bg-[color:var(--color-info)]/10 border-[color:var(--color-info)] text-[color:var(--color-info)]'
  }

  return (
    <div className={clsx(base, variants[variant])} style={style} {...props}>
      <div>
        {title && <strong className="block font-semibold mb-1">{title}</strong>}
        <span>{children}</span>
      </div>
    </div>
  )
}
