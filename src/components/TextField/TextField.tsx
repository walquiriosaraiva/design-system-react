import React, { forwardRef, InputHTMLAttributes } from 'react';
import './TextField.css';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  size?: 'small' | 'medium';
  multiline?: boolean;
  rows?: number;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      helperText,
      error = false,
      fullWidth = false,
      variant = 'outlined',
      size = 'medium',
      multiline = false,
      rows = 1,
      startAdornment,
      endAdornment,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const classes = [
      'textfield',
      `textfield--${variant}`,
      `textfield--${size}`,
      error && 'textfield--error',
      disabled && 'textfield--disabled',
      fullWidth && 'textfield--fullwidth',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const InputComponent = multiline ? 'textarea' : 'input';

    return (
      <div className={classes}>
        {label && (
          <label className="textfield__label">
            {label}
          </label>
        )}
        <div className="textfield__input-wrapper">
          {startAdornment && (
            <div className="textfield__adornment textfield__adornment--start">
              {startAdornment}
            </div>
          )}
          <InputComponent
            ref={multiline ? undefined : ref}
            className="textfield__input"
            disabled={disabled}
            rows={multiline ? rows : undefined}
            {...(props as any)}
          />
          {endAdornment && (
            <div className="textfield__adornment textfield__adornment--end">
              {endAdornment}
            </div>
          )}
        </div>
        {helperText && (
          <span className="textfield__helper-text">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
