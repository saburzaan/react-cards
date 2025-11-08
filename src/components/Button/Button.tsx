import './Button.css'
import type { ReactNode } from 'react'

type ButtonProps = {
  onClick?: () => void
  isActive?: boolean
  isDisabled?: boolean
  children: ReactNode
}

const Button = ({ onClick, isActive, isDisabled, children }: ButtonProps) => {
  return (
    <button
      className={`button ${isActive ? 'is-active' : ''}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

export default Button