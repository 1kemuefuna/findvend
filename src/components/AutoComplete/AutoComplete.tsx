import React, { useState, useEffect, forwardRef, useRef } from 'react'
import './auto_complete.scss'
import { AutoCompleteProps } from './types'

const AutoComplete = forwardRef<HTMLDivElement, AutoCompleteProps<any>>(
  (props, ref) => {
    const {
      options,
      defaultValue,
      getOptionLabel,
      renderOption,
      renderInput,
      onSelect,
      className,
      ...rest
    } = props

    const [inputValue, setInputValue] = useState<string>(
      defaultValue ? getOptionLabel(defaultValue) : ''
    )
    const [open, setOpen] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] =
      useState<any | undefined>(defaultValue)
    const [filteredOptions, setFilteredOptions] = useState<any[]>(options)

    const wrapperRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleClickOutside = (event: Event) => {
        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(event.target as Node)
        ) {
          setOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value
      setInputValue(value)

      const filtered = options.filter((option) =>
        getOptionLabel(option).toLowerCase().includes(value.toLowerCase())
      )
      setFilteredOptions(filtered)

      setOpen(true)
    }

    const handleOptionClick = (option: any) => {
      setSelectedOption(option)
      setInputValue(getOptionLabel(option))
      setOpen(false)
      if (onSelect) {
        onSelect(option)
      }
    }

    useEffect(() => {
      if (ref) {
        if (typeof ref === 'function') {
          ref(wrapperRef.current)
        } else {
          ref.current = wrapperRef.current
        }
      }
    }, [ref])

    return (
      <div
        className={`autocomplete-wrapper ${className}`}
        ref={wrapperRef}
        {...rest}
      >
        {renderInput({
          value: inputValue,
          onChange: handleInputChange,
          onFocus: () => setOpen(true),
        })}
        {open && (
          <ul className='autocomplete-options'>
            {filteredOptions.map((option) => (
              <li
                key={getOptionLabel(option)}
                onClick={() => handleOptionClick(option)}
                className={`autocomplete-option ${
                  selectedOption === option ? 'selected' : ''
                }`}
              >
                {renderOption ? renderOption(option) : getOptionLabel(option)}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
)

export default AutoComplete