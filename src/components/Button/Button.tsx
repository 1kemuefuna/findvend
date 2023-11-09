import React from 'react'
import { ButtonProps } from './types'
import './button.scss'

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      prefixIcon,
      suffixIcon,
      className,
      children,
      variant = 'block',
      ...inputProps
    } = props

    return (
      <button
        className={`button button__${variant} ${className}`}
        ref={ref}
        {...inputProps}
      >
        {prefixIcon && (
          <span className='button__prefix-icon'>{prefixIcon}</span>
        )}
        <span className='button__button-content'>{children}</span>
        {suffixIcon && (
          <span className='button__suffix-icon'>{suffixIcon}</span>
        )}
      </button>
    )
  }
)

export default Button