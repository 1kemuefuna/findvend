import React from 'react'
import { InputProps } from './types'
import './input.scss'

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    prefixIcon,
    suffixIcon,
    hasError,
    className,
    disabled,
    ...inputProps
  } = props
  return (
    <div
      className={`
        input-container ${className}
        ${disabled ? 'input-disabled' : ''}
        ${!disabled && hasError ? 'input-error' : ''}
      `}
    >
      {prefixIcon && <span className='input-container__prefix-icon'>{prefixIcon}</span>}
      <input className='input-container__input' disabled={disabled} ref={ref} {...inputProps} />
      {suffixIcon && <span className='input-container__suffix-icon'>{suffixIcon}</span>}
    </div>
  )
})

export default Input