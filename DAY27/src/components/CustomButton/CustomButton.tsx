import React, { ReactNode } from 'react'
import './custom-button.styles.scss'

interface ButtonProps {
  children: ReactNode
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (() => void) | undefined
  className?: string
  isGoogleSignIn?: boolean
  inverted?: boolean
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`
    ${inverted ? 'inverted' : ''}
    ${isGoogleSignIn
      ? 'google-sign-in'
      : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
)

export default CustomButton
