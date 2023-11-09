import React from 'react'
import './circular_progress.scss'

const CircularProgress: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={`circular-progress ${className}`} {...props} />
  )
}

export default CircularProgress