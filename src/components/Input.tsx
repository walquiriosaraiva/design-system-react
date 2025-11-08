import clsx from 'clsx'
import * as React from 'react'
import { useTheme } from '../hooks/useTheme'
import { tokens } from '../tokens/tokens'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label?: string
  error?: string
  helperText?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  variant?: 'default' | 'success' | 'error'
  fullWidth?: boolean
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      prefix,
      suffix,
      variant = 'default',
      fullWidth = false,
      disabled = false,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const { isDark } = useTheme()
    const theme = isDark ? tokens.colors.dark : tokens.colors.light
    // call useId unconditionally to respect the Rules of Hooks
    const generatedId = React.useId()
    const inputId = id ?? generatedId

    const style = {
      '--color-background': theme.background,
      '--color-text': theme.secondaryText,
      '--color-border': theme.ghostBorder,
      '--color-placeholder': `${theme.secondaryText}80`,
      '--color-success': theme.success,
      '--color-error': theme.error
    } as React.CSSProperties

    const baseInputStyles = clsx(
      'w-full px-3 py-2 text-sm transition-all duration-200',
      'bg-[color:var(--color-background)]',
      'text-[color:var(--color-text)]',
      'placeholder:text-[color:var(--color-placeholder)]',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      {
        'opacity-60 cursor-not-allowed': disabled,
        'rounded-md': !prefix && !suffix,
        'rounded-r-md': prefix && !suffix,
        'rounded-l-md': !prefix && suffix,
        'border border-[color:var(--color-border)]': variant === 'default',
        'border border-[color:var(--color-success)]': variant === 'success',
        'border border-[color:var(--color-error)]': variant === 'error',
        'focus:border-[color:var(--color-success)] focus:ring-[color:var(--color-success)]/20':
          variant === 'success',
        'focus:border-[color:var(--color-error)] focus:ring-[color:var(--color-error)]/20':
          variant === 'error',
        'focus:border-[color:var(--color-text)] focus:ring-[color:var(--color-text)]/20':
          variant === 'default'
      }
    )

    const wrapperStyles = clsx('inline-flex flex-col gap-1.5', {
      'w-full': fullWidth
    })

    const inputGroupStyles = clsx('flex items-center gap-1', {
      'w-full': fullWidth
    })

    const addonStyles = clsx(
      'inline-flex items-center px-3 py-2',
      'text-sm border border-[color:var(--color-border)]',
      'bg-[color:var(--color-background)]',
      'text-[color:var(--color-text)]'
    )

    return (
      <div className={wrapperStyles} style={style}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[color:var(--color-text)]">
            {label}
          </label>
        )}

        <div className={inputGroupStyles}>
          {prefix && <div className={clsx(addonStyles, 'rounded-l-md border-r-0')}>{prefix}</div>}

          <div className="relative flex-1">
            {leftIcon && (
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[color:var(--color-text)] opacity-60">
                {leftIcon}
              </div>
            )}

            <input
              {...props}
              ref={ref}
              id={inputId}
              disabled={disabled}
              className={clsx(
                baseInputStyles,
                {
                  'pl-10': leftIcon,
                  'pr-10': rightIcon
                },
                className
              )}
            />

            {rightIcon && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[color:var(--color-text)] opacity-60">
                {rightIcon}
              </div>
            )}
          </div>

          {suffix && <div className={clsx(addonStyles, 'rounded-r-md border-l-0')}>{suffix}</div>}
        </div>

        {(helperText || error) && (
          <p
            className={clsx('text-xs', {
              'text-[color:var(--color-error)]': error || variant === 'error',
              'text-[color:var(--color-text)] opacity-80': !error && variant !== 'error'
            })}
          >
            {error || helperText}
          </p>
        )}
      </div>
    )
  }
)

// Improve React DevTools / linting: name the forwardRef component
Input.displayName = 'Input'
