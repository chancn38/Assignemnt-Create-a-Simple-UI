import React from 'react'

interface IButtonProps {
  children: React.ReactNode
  onClick: () => void
  type?: 'primary' | 'default'
}

export const Button: React.FC<IButtonProps> = ({ children, onClick, type }) => {
  const className = type === 'primary' ? 'btn-primary' : ''
  return (
    <button style={{height: 100}} className={className} onClick={onClick}>
      {children}
    </button>
  )
}
